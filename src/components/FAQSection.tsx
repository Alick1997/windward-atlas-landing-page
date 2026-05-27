"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/content/faqs";

type FAQItemProps = {
  answer: string;
  index: number;
  question: string;
};

function FAQItem({ answer, index, question }: FAQItemProps) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-answer-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="border-b border-[#102317]/10"
    >
      <button
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-base font-semibold text-[#102317]">
          {question}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-light leading-none text-[#1A3D2B]"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-7 text-[#5E6B63]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-[#F7F5EF] px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8"
        >
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#102317] sm:text-4xl">
            FAQ
          </h2>
        </motion.div>

        {faqs.map((faq, index) => (
          <FAQItem key={faq.q} answer={faq.a} index={index} question={faq.q} />
        ))}
      </div>
    </section>
  );
}
