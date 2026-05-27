"use client";

import DesktopFeatureShowcase from "./DesktopFeatureShowcase";
import MobileFeatureShowcase from "./MobileFeatureShowcase";

export default function FeatureShowcaseSection() {
  return (
    <section id="features" className="bg-[#EEF3EC] py-20 lg:py-24">
      <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-[#102317] sm:text-4xl lg:text-5xl">
        See how it works.
      </h2>
      <DesktopFeatureShowcase />
      <MobileFeatureShowcase />
    </section>
  );
}
