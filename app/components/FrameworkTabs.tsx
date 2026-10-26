"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { buttonDark, GoldText } from "./ui";

type FrameworkItem = {
  title: string;
  description: string;
  items: readonly string[];
  cta: string;
  imageAlt: string;
  image: string;
  href: string;
  external?: boolean;
};

// The wealth framework on phones and tablets: one pillar at a time behind
// accessible tabs (arrow keys move between them).
export default function FrameworkTabs({ label, pillars, newTabLabel }: { label: string; pillars: FrameworkItem[]; newTabLabel: string }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const pillar = pillars[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : pillars.length - 1)) % pillars.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="flex flex-col gap-6">
      <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="grid grid-cols-3 rounded-3xl border border-[#E5E5E5] bg-white p-1 text-sm">
        {pillars.map((item, i) => (
          <button
            key={item.title}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 cursor-pointer rounded-[22px] px-2 ${
              i === active ? "bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] font-semibold text-black" : "text-black"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="flex flex-col gap-5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-black sm:aspect-[16/10]">
          <Image src={pillar.image} alt={pillar.imageAlt} fill sizes="(min-width: 640px) 90vw, 100vw" className="object-cover" />
        </div>
        <p className="text-base text-[#696F8C]">{pillar.description}</p>
        <ul className="ml-5 list-disc space-y-1 text-base font-semibold">
          {pillar.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {pillar.external ? (
          <a href={pillar.href} target="_blank" rel="noopener noreferrer" className={`${buttonDark} w-full sm:w-auto sm:self-start`}>
            <GoldText>{pillar.cta}</GoldText>
            <span className="sr-only"> ({newTabLabel})</span>
          </a>
        ) : (
          <Link href={pillar.href} className={`${buttonDark} w-full sm:w-auto sm:self-start`}>
            <GoldText>{pillar.cta}</GoldText>
          </Link>
        )}
      </div>
    </div>
  );
}
