"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import FeatureText from "./FeatureText";
import MapProgressRail from "./MapProgressRail";
import PhoneVideoFrame from "./PhoneVideoFrame";
import { features } from "./content";

export default function DesktopFeatureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      features.length - 1,
      Math.max(0, Math.floor(latest * features.length)),
    );

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeFeature = features[activeIndex];

  return (
    <div ref={sectionRef} className="relative hidden h-[330vh] lg:block">
      {features.map((feature, index) => (
        <span
          key={feature.id}
          id={feature.id}
          aria-hidden="true"
          className="pointer-events-none absolute h-px w-px scroll-mt-24"
          style={{ top: `${(index / features.length) * 100}%` }}
        />
      ))}

      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[190px_minmax(0,1fr)_minmax(300px,380px)] items-center gap-12 px-6">
          <MapProgressRail
            activeIndex={activeIndex}
            features={features}
            progress={scrollYProgress}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <FeatureText
                feature={activeFeature}
                index={activeIndex}
                total={features.length}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {activeFeature.videoUrl ? (
                <PhoneVideoFrame feature={activeFeature} active />
              ) : (
                <img
                  src={activeFeature.poster}
                  alt={activeFeature.posterAlt}
                  width={1080}
                  height={1920}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
