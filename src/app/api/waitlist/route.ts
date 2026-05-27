import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WAITLIST_TABLE = "waitlist_signups";
const GENERIC_ERROR_MESSAGE = "Something went wrong. Please try again.";

type WaitlistRequestBody = {
  email?: unknown;
};

function normalizeEmail(email: unknown) {
  if (typeof email !== "string") {
    return "";
  }

  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email);
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase configuration.");
  }

  return { key, url: url.replace(/\/$/, "") };
}

function getSupabaseHeaders(key: string) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

async function emailExists(email: string, url: string, key: string) {
  const requestUrl = new URL(`${url}/rest/v1/${WAITLIST_TABLE}`);
  requestUrl.searchParams.set("email", `eq.${email}`);
  requestUrl.searchParams.set("select", "email");
  requestUrl.searchParams.set("limit", "1");

  const response = await fetch(requestUrl, {
    headers: getSupabaseHeaders(key),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to check waitlist.");
  }

  const rows = (await response.json()) as unknown[];
  return rows.length > 0;
}

async function addEmailToWaitlist(email: string, url: string, key: string) {
  const response = await fetch(`${url}/rest/v1/${WAITLIST_TABLE}`, {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(key),
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, source: "https://windwardatlas.com" }),
  });

  if (response.status === 409) {
    return "duplicate";
  }

  if (!response.ok) {
    throw new Error("Unable to add email to waitlist.");
  }

  return "created";
}

async function sendWelcomeEmail(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.WAITLIST_EMAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("Missing email configuration.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: "Welcome to Windward Atlas early access",
      text: [
        "You're on the Windward Atlas early access list.",
        "",
        "Thanks for joining us as we build a better way to discover Dominica's trails.",
        "",
        "We'll be in touch when the preview opens.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send welcome email.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistRequestBody;
    const email = normalizeEmail(body.email);

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const { key, url } = getSupabaseConfig();

    if (await emailExists(email, url, key)) {
      return NextResponse.json({ ok: true });
    }

    const result = await addEmailToWaitlist(email, url, key);

    if (result === "created") {
      await sendWelcomeEmail(email);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist signup failed", error);

    return NextResponse.json({ error: GENERIC_ERROR_MESSAGE }, { status: 500 });
  }
}
