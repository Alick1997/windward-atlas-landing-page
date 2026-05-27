"use client";

import { motion, type MotionValue } from "framer-motion";
import type { FeatureItem } from "./content";

type MapProgressRailProps = {
  activeIndex: number;
  features: FeatureItem[];
  progress: MotionValue<number>;
};

export default function MapProgressRail({
  activeIndex,
  features,
  progress,
}: MapProgressRailProps) {
  return (
    <aside
      aria-label="Feature progress"
      className="hidden h-[460px] w-full max-w-[180px] flex-col justify-center lg:flex"
    >
      <div className="relative pl-8">
        <div className="absolute left-[41px] top-3 h-[calc(100%-1.5rem)] w-px bg-[#102317]/10" />
        <motion.div
          className="absolute left-[41px] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-[#22C55E]"
          style={{ scaleY: progress }}
        />
        <div className="space-y-12">
          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;

            return (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="group grid grid-cols-[20px_1fr] gap-5"
              >
                <span
                  className={`relative z-10 mt-0.5 h-5 w-5 rounded-full border bg-[#F7F5EF] transition ${
                    isActive || isPast
                      ? "border-[#22C55E]"
                      : "border-[#102317]/25"
                  }`}
                >
                  <span
                    className={`absolute inset-1 rounded-full transition ${
                      isActive || isPast ? "bg-[#22C55E]" : "bg-transparent"
                    }`}
                  />
                </span>
                <span>
                  <span
                    className={`block text-xs font-bold uppercase tracking-[0.16em] transition ${
                      isActive ? "text-[#102317]" : "text-[#5E6B63]"
                    }`}
                  >
                    {feature.navLabel}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
