"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        if (response.status === 400) {
          setError(body?.error ?? "Please enter a valid email address.");
          return;
        }

        throw new Error("Waitlist signup failed.");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="bg-[#0F2318] px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Sign Up for Early Access.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            Stay up to date with Windward Atlas progress and get access to
            exclusive content before launch.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            placeholder="you@example.com"
            required
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "waitlist-error" : undefined}
            disabled={submitted || isSubmitting}
            className="min-h-12 flex-1 rounded-full border border-white/10 bg-white px-5 text-sm text-[#102317] outline-none transition placeholder:text-[#5E6B63]/70 focus:border-[#22C55E] focus:ring-4 focus:ring-[#22C55E]/20 disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={submitted || isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#22C55E] px-6 text-sm font-bold text-[#07120D] transition hover:bg-[#16A34A] hover:text-white disabled:opacity-70"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={
                  submitted
                    ? "submitted"
                    : isSubmitting
                      ? "submitting"
                      : "ready"
                }
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {submitted
                  ? "You're on the list"
                  : isSubmitting
                    ? "Joining..."
                    : "Join Early Access"}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.form>

        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              id="waitlist-error"
              key="error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-4 text-sm font-medium text-[#FCA5A5]"
            >
              {error}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
