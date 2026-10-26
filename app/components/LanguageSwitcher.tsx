"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { LOCALE_COOKIE, localeNames, locales, stripLocale, switchLocalePath, type Locale } from "@/i18n/config";
import { format } from "@/i18n/rich";

type LanguageSwitcherProps = {
  lang: Locale;
  labels: { language: string; changeLanguage: string };
  // "dropdown" for the desktop navbar, "list" for the mobile menu.
  variant: "dropdown" | "list";
};

// Each language is a plain link to the same page in that language, so it works
// without JavaScript and search engines can follow it. Visiting a localized URL
// is what records the choice (see proxy.ts).
export default function LanguageSwitcher({ lang, labels, variant }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const path = stripLocale(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const current = localeNames[lang];
  const buttonLabel = format(labels.changeLanguage, { language: current.label });

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const options = locales.map((locale) => {
    const isCurrent = locale === lang;
    return (
      <li key={locale}>
        <a
          href={switchLocalePath(locale, path)}
          // Save the choice before leaving the page. The proxy saves it too;
          // this covers browsers that replay a cached redirect.
          onClick={() => {
            document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
          }}
          hrefLang={locale}
          lang={locale}
          aria-current={isCurrent ? "true" : undefined}
          className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-4 py-2 text-left text-[15px] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#C3A346] ${
            isCurrent ? "font-semibold text-[#FEEF9C]" : "text-white"
          }`}
        >
          {localeNames[locale].label}
          {isCurrent && (
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
              <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
            </svg>
          )}
        </a>
      </li>
    );
  });

  return (
    <div ref={rootRef} className={variant === "dropdown" ? "relative" : "w-full"}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-label={buttonLabel}
        className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg transition-colors hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-[#C3A346] ${
          variant === "dropdown" ? "px-2" : "w-full px-1"
        }`}
      >
        <HiOutlineGlobeEuropeAfrica className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className={variant === "dropdown" ? "text-sm" : "flex-1 text-left text-[15px]"}>
          {variant === "dropdown" ? current.short : current.label}
        </span>
        <svg
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <ul
        id={listId}
        aria-label={labels.language}
        hidden={!isOpen}
        className={
          variant === "dropdown"
            ? "absolute right-0 z-20 mt-2 w-52 rounded-xl border border-gray-800 bg-[#1a1a1a] p-1.5 shadow-lg"
            : "mt-2 space-y-1"
        }
      >
        {options}
      </ul>
    </div>
  );
}
