import type { FeatureItem } from "./content";

type FeatureTextProps = {
  feature: FeatureItem;
  index: number;
  total: number;
};

export default function FeatureText({
  feature,
  index,
  total,
}: FeatureTextProps) {
  return (
    <div>
      <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#102317] sm:text-4xl lg:text-5xl">
        {feature.title}
      </h3>
      <p className="mt-5 max-w-md text-base leading-7 text-[#5E6B63] sm:text-lg">
        {feature.body}
      </p>
      <div className="mt-7 flex flex-wrap gap-2">
        {feature.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-[#102317]/10 bg-white px-3 py-1.5 text-sm font-medium text-[#102317]"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
