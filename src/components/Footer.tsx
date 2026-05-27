import Image from "next/image";

const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
  { label: "Early Access", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F2318] px-5 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
                <Image
                  src="/logo.png"
                  alt="Windward Atlas logo"
                  width={32}
                  height={32}
                />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Windward Atlas
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              A mobile-first guide for discovering and following Dominica trails
              with local context.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Navigation
              </p>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Contact
              </p>
              <a
                href="mailto:hello@windwardatlas.com"
                className="mt-4 inline-block text-sm text-white/70 transition hover:text-white"
              >
                hello@windwardatlas.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>2026 Windward Atlas. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
