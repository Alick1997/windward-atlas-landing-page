"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { FeatureItem } from "./content";

type PhoneVideoFrameProps = {
  feature: FeatureItem;
  active?: boolean;
};

export default function PhoneVideoFrame({
  feature,
  active = true,
}: PhoneVideoFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(frameRef, { amount: 0.45 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldReduceMotion) {
      return;
    }

    if (active && isInView) {
      void video.play();
    } else {
      video.pause();
    }
  }, [active, isInView, shouldReduceMotion, feature.videoUrl]);

  return (
    <motion.div
      ref={frameRef}
      key={feature.id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto w-[min(64vw,320px)] sm:w-[min(50vw,340px)] lg:w-[min(24vw,360px)]"
    >
      <video
        ref={videoRef}
        aria-label={
          feature.videoLabel ?? `${feature.title} Windward Atlas app preview`
        }
        autoPlay={!shouldReduceMotion}
        className="h-full w-full bg-[#07120D] object-cover"
        loop
        muted
        playsInline
        poster={feature.poster}
        preload="metadata"
        src={feature.videoUrl}
      />
    </motion.div>
  );
}
