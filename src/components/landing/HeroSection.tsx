"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const proofItems = [
  "Local trail data",
  "Offline maps",
  "Sight and warning waypoints",
];

export default function HeroSection() {
  return (
    <section
      id="product"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#0F2318] px-5 pt-20 text-white sm:px-6"
    >
      <Image
        src="/bg-images/hiker-banner.jpg"
        alt="Hiker on a misty green trail"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 42%" }}
      />
      <div className="absolute inset-0 bg-[#07120D]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07120D]/45 via-[#07120D]/20 to-[#07120D]/60 lg:bg-gradient-to-r lg:from-[#07120D]/90 lg:via-[#07120D]/58 lg:to-[#07120D]/12" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F5EF] to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 pb-14 pt-12 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-x-16 lg:gap-y-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-w-0 max-w-2xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Windward Atlas
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hike with Confidence
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
            Windward Atlas uses local expertise to offer a seamless hiking
            experience in Dominica.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#22C55E] px-6 text-sm font-bold text-[#07120D] transition hover:bg-[#16A34A] hover:text-white"
            >
              Join Early Access
            </a>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-bold text-white transition hover:border-white/60"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto min-w-0 w-full max-w-[250px] sm:max-w-[340px] lg:max-w-[430px]"
        >
          <div className="absolute inset-x-8 bottom-2 h-20 rounded-full bg-[#07120D]/55 blur-3xl" />
          <Image
            src="/mockups/promo-mockup.png"
            alt="Windward Atlas app promo mockup"
            width={1080}
            height={1350}
            priority
            sizes="(min-width: 1024px) 430px, (min-width: 640px) 340px, 280px"
            className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.42)]"
          />
        </motion.div>

        <div className="grid min-w-0 max-w-xl gap-3 border-t border-white/20 pt-5 sm:grid-cols-3 lg:col-start-1 lg:row-start-2">
          {proofItems.map((item) => (
            <p key={item} className="text-sm font-medium text-white/75">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
