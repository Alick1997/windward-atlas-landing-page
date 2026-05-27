"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b border-[#102317]/10 bg-[#F7F5EF]/[0.92] backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          <a href="#product" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white">
              <Image
                src="/logo.png"
                alt="Windward Atlas logo"
                width={32}
                height={32}
              />
            </span>
            <span className="truncate text-sm font-semibold tracking-tight text-[#102317]">
              Windward Atlas
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#5E6B63] transition hover:text-[#102317]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#waitlist"
              className="hidden min-h-10 items-center justify-center rounded-full bg-[#22C55E] px-4 text-sm font-bold text-[#07120D] transition hover:bg-[#16A34A] hover:text-white sm:inline-flex"
            >
              Early Access
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#102317]/10 md:hidden"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 origin-center bg-[#102317]"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-5 bg-[#102317]"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-5 origin-center bg-[#102317]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[#102317]/10 bg-[#F7F5EF] px-5 py-4 shadow-lg shadow-[#102317]/10 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-base font-medium text-[#102317]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
