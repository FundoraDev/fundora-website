"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/insurance-redefine-0.avif", alt: "Motor insurance coverage" },
  { src: "/images/insurance-redefine-1.avif", alt: "Life insurance planning" },
  { src: "/images/insurance-redefine-2.avif", alt: "Travel insurance protection" },
  { src: "/images/insurance-redefine-3.avif", alt: "Additional insurance offerings" },
];

export default function InsuranceImageShuffler() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex h-full min-h-[480px] w-full items-center justify-center md:min-h-[500px]">
      {images.map((image, index) => (
        <Image
          key={image.src}
          alt={image.alt}
          src={image.src}
          fill
          priority={index === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 md:bottom-6">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show ${image.alt}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#101828]" : "bg-[#D0D5DD] hover:bg-[#98A2B3]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
