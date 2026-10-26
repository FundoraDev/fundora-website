import type { ReactNode } from "react";
import { GoldBrushSwipe, GoldBrushSwipe2 } from "./svg";

export const CALENDLY_URL = "https://calendly.com/seyi-fundorahq/30min";

// Buttons are at least 48px tall so they're comfortable to tap.
const buttonBase =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-[15px] font-semibold leading-tight transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C3A346] md:text-base";
export const buttonLight = `${buttonBase} bg-[#F9FAFC] text-black shadow-md hover:brightness-95`;
export const buttonGold = `${buttonBase} bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] text-black shadow-md hover:brightness-105`;
export const buttonDark = `${buttonBase} bg-black font-bold hover:bg-[#1a1a1a]`;

// Gold gradient text, for labels on black buttons.
export function GoldText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export const sectionY = "py-14 sm:py-20 lg:py-24";
export const h2 = "font-satoshi text-[28px] font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl";
export const eyebrow = "text-sm font-bold uppercase tracking-[0.3em] sm:text-base lg:text-xl";

export type Highlighted = { readonly before: string; readonly highlight: string; readonly after: string };

// A heading phrase with the gold brush stroke behind its highlighted words.
// The stroke stretches to the words, so it fits any language.
export function BrushHighlight({ text, variant = 1 }: { text: Highlighted; variant?: 1 | 2 }) {
  const Brush = variant === 1 ? GoldBrushSwipe : GoldBrushSwipe2;
  return (
    <>
      {text.before}
      {text.before && " "}
      <span className="relative isolate inline-block max-w-full px-3 py-1">
        <span aria-hidden="true" className="brush-sweep absolute inset-0 -z-10">
          <Brush preserveAspectRatio="none" className="h-full w-full" />
        </span>
        <span className="text-black">{text.highlight}</span>
      </span>
      {text.after && " "}
      {text.after}
    </>
  );
}
