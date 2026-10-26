"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AUTO_ADVANCE_MS = 4000;

const sources = [
  "/images/insurance-redefine-0.avif",
  "/images/insurance-redefine-1.avif",
  "/images/insurance-redefine-2.avif",
  "/images/insurance-redefine-3.avif",
];

type InsuranceImageShufflerProps = {
  alts: readonly string[];
  label: string;
  // "Show {item}", already filled in per slide.
  slideLabels: readonly string[];
};

export default function InsuranceImageShuffler({ alts, label, slideLabels }: InsuranceImageShufflerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Don't animate for people who've asked their device for less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sources.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative flex aspect-[4/5] w-full items-center justify-center sm:aspect-[4/3] md:aspect-auto md:h-full md:min-h-[500px]"
    >
      {sources.map((src, index) => (
        <Image
          key={src}
          alt={alts[index]}
          src={src}
          fill
          priority={index === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          aria-hidden={index !== activeIndex}
          className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 md:bottom-6">
        <div className="flex items-center rounded-full bg-white px-1 shadow-sm">
          {sources.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={slideLabels[index]}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className="group flex h-8 w-7 cursor-pointer items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#101828]" : "bg-[#D0D5DD] group-hover:bg-[#98A2B3]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
