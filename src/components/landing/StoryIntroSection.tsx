"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trailNotes = ["Routes", "Distance", "Trail notes"];

export default function StoryIntroSection() {
  return (
    <section id="story" className="bg-[#F7F5EF] px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-xl"
        >
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#102317] sm:text-4xl lg:text-5xl">
            Designed for Explorers.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5E6B63] sm:text-lg">
            Windward Atlas delivers local trail knowledge so you can explore our
            densest forests with confidence.
          </p>
          <p className="mt-5 text-base leading-7 text-[#5E6B63] sm:text-md italic">
            Leave no stone unturned, and no sight unseen.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[0.5rem] bg-[#102317] shadow-[0_24px_80px_rgba(16,35,23,0.12)]"
        >
          <Image
            src="/hike-photos/elfin-woodlands-trail.jpeg"
            alt="Windward Atlas open on a phone with Dominica trail details"
            width={1536}
            height={2048}
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
            style={{ objectPosition: "44% 62%" }}
          />
        </motion.figure>
      </div>
    </section>
  );
}
