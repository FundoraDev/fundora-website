"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localizePath, stripLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { AppDownloadButton } from "./AppDownload";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  lang: Locale;
  labels: Dictionary["nav"] & { logIn: string; getTheApp: string };
};

const activeGradient = {
  backgroundImage: "linear-gradient(to right, #C3A346 0%, #FEEF9C 50%, #C7AB4F 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function Navbar({ lang, labels }: NavbarProps) {
  const pathname = stripLocale(usePathname() ?? "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: labels.about },
    { href: "/invest", label: labels.invest },
    { href: "/insurance", label: labels.insurance },
    { href: "/programs", label: labels.programs },
    { href: "/contact-us", label: labels.contact },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeMenu = () => setIsMenuOpen(false);

  // While the menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.dataset.menuOpen = "";
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      delete document.body.dataset.menuOpen;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        aria-label={labels.main}
        className="fixed top-0 right-0 left-0 z-[100] flex h-[68px] items-center justify-between bg-black px-4 text-white sm:px-6"
      >
        <Link href={localizePath(lang, "/")} aria-label={labels.home} className="flex min-h-11 items-center gap-2" onClick={closeMenu}>
          <Image alt="" src="/fundora.png" width={30} height={30} />
          <span className="font-sans text-[22px] font-bold text-white">fundora</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={localizePath(lang, link.href)}
                  aria-current={active ? "page" : undefined}
                  className={`text-base font-medium ${active ? "transition-all" : "text-white transition-colors hover:text-gray-300"}`}
                  style={active ? activeGradient : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher lang={lang} labels={labels} variant="dropdown" />
          <AppDownloadButton
            placement="navbar"
            className="min-h-10 rounded-full border border-yellow-500 bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
          >
            <span className="inline-block bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">
              {labels.logIn}
            </span>
          </AppDownloadButton>
          <AppDownloadButton
            placement="navbar"
            className="min-h-10 rounded-full border border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            {labels.getTheApp}
          </AppDownloadButton>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 top-[68px] z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="mobile-menu"
        // Off-screen and unreachable (by keyboard or screen reader) while closed.
        inert={!isMenuOpen}
        className={`fixed top-[68px] right-0 z-40 h-[calc(100dvh-68px)] w-full max-w-sm transform bg-black text-white transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain p-6">
          <ul className="mb-6 flex flex-col">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={localizePath(lang, link.href)}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center text-lg font-light ${active ? "transition-all" : "text-white transition-colors hover:text-gray-300"}`}
                    style={active ? activeGradient : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mb-6 border-b border-gray-800 pb-6">
            <LanguageSwitcher lang={lang} labels={labels} variant="list" />
          </div>

          <div className="flex flex-col gap-3">
            <AppDownloadButton
              placement="navbar"
              onClick={closeMenu}
              className="min-h-12 rounded-full bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-4 py-3 text-center text-[15px] font-semibold text-black"
            >
              {labels.logIn}
            </AppDownloadButton>
            <AppDownloadButton
              placement="navbar"
              onClick={closeMenu}
              className="min-h-12 rounded-full border border-black bg-white px-4 py-3 text-center text-[15px] font-semibold text-black transition-colors hover:bg-gray-100"
            >
              {labels.getTheApp}
            </AppDownloadButton>
          </div>
        </div>
      </div>
    </>
  );
}
