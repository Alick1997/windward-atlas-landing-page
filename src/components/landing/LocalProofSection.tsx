"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocalProofSection() {
  return (
    <section id="support" className="bg-[#F7F5EF] px-5 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-[0.5rem] bg-[#102317]"
        >
          <Image
            src="/hike-photos/trafalgar-falls-papa.jpeg"
            alt="Hiker using Windward Atlas near Trafalgar Falls in Dominica"
            width={1536}
            height={2048}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="aspect-[4/5] w-full object-cover"
            style={{ objectPosition: "48% 60%" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#102317] sm:text-4xl lg:text-5xl">
            Supported by Local Guides and Hikers.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#5E6B63]">
            We partner with licensed guides and hikers who know these trails
            best to keep information accurate and updated. So that we can offer
            a better hiking experience across Dominica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
