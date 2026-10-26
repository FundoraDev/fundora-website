"use client";

import Link from "next/link";
import { localizePath } from "@/i18n/config";
import { useLocale } from "../components/LocaleContext";

// Rendered inside the localized layout, which supplies the strings, so every
// page around it can stay statically prerendered.
export default function NotFound() {
  const { lang, notFound } = useLocale();

  return (
    <div className="flex min-h-[calc(100svh-68px)] flex-col items-center justify-center gap-10 bg-black px-4 text-center text-white">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
        <p className="text-xl font-extrabold">404</p>
        <div className="hidden h-[5vh] border border-white sm:block" />
        <p className="text-sm font-semibold">{notFound.message}</p>
      </div>
      <Link
        href={localizePath(lang, "/")}
        className="inline-flex min-h-11 items-center rounded-lg border border-white px-5 text-sm font-light hover:border-2 hover:font-semibold"
      >
        {notFound.home}
      </Link>
    </div>
  );
}
