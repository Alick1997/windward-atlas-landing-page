"use client";

import { motion } from "framer-motion";
import FeatureText from "./FeatureText";
import PhoneVideoFrame from "./PhoneVideoFrame";
import { features } from "./content";

export default function MobileFeatureShowcase() {
  return (
    <div className="space-y-20 px-5 pb-20 sm:px-6 lg:hidden">
      {features.map((feature, index) => (
        <motion.article
          key={feature.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-xl"
        >
          <FeatureText
            feature={feature}
            index={index}
            total={features.length}
          />
          <div className="mt-8">
            {feature.videoUrl ? (
              <PhoneVideoFrame feature={feature} />
            ) : (
              <img
                src={feature.poster}
                alt={feature.posterAlt}
                width={1080}
                height={1920}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            )}
          </div>
        </motion.article>
      ))}

      <div className="mx-auto max-w-xl border-t border-[#102317]/10 pt-8">
        <a
          href="#waitlist"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#22C55E] px-6 text-sm font-bold text-[#07120D] transition hover:bg-[#16A34A] hover:text-white"
        >
          Join Early Access
        </a>
      </div>
    </div>
  );
}
