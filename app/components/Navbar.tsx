"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("US");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: "US", label: "English (US)" },
    { code: "GB", label: "English (UK)" },
    { code: "ES", label: "Español" },
    { code: "FR", label: "Français" },
    { code: "DE", label: "Deutsch" },
  ];

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/invest", label: "Invest" },
    { href: "/protect", label: "Protect" },
    { href: "/programs", label: "Programs" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    if (!mounted || !pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#000000] h-[68px] text-white px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image alt="Fundora Logo" src="/fundora.png" width={30} height={30} />
          <span className="text-white text-[22px] font-bold font-sans">
            fundora
          </span>
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  active
                    ? "bg-clip-text text-transparent transition-all"
                    : "text-white hover:text-gray-300 transition-colors"
                } text-[16px] font-light`}
                style={
                  active
                    ? {
                        backgroundImage:
                          "linear-gradient(to right, rgba(249, 115, 22, 0.52) 0%, rgba(234, 179, 8, 0.8) 50%, rgba(234, 179, 8, 0.55) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Side - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center gap-[10px]">
          {/* Desktop Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors"
            >
              <HiOutlineGlobeEuropeAfrica className="h-5 w-5" />
              <span className="text-sm">{selectedLang}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  isLangDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Desktop Language Dropdown */}
            {isLangDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-lg z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                        selectedLang === lang.code
                          ? "text-yellow-500"
                          : "text-white"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          <Link
            href="/login"
            className="px-4 py-2 bg-black border border-yellow-500 text-white rounded-[36px] text-sm font-semibold hover:bg-gray-900 transition-colors"
          >
            <p className="bg-gradient-to-r from-[#C3A346] to-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent inline-block">
              Log in
            </p>
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-white border border-black text-black rounded-[36px] text-sm hover:bg-gray-100 transition-colors font-semibold"
          >
            Sign up
          </Link>
        </div>

        {/* Hamburger Menu Button - Visible on mobile/tablet */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (isMenuOpen) setIsLangDropdownOpen(false);
          }}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => {
            setIsMenuOpen(false);
            setIsLangDropdownOpen(false);
          }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[68px] right-0 z-40 h-[calc(100vh-68px)] w-full max-w-sm bg-[#000000] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLangDropdownOpen(false);
                  }}
                  className={`${
                    active
                      ? "bg-clip-text text-transparent transition-all"
                      : "text-white hover:text-gray-300 transition-colors"
                  } text-[18px] font-light py-2`}
                  style={
                    active
                      ? {
                          backgroundImage:
                            "linear-gradient(to right, rgba(249, 115, 22, 0.52) 0%, rgba(234, 179, 8, 0.8) 50%, rgba(234, 179, 8, 0.55) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Language Selector */}
          <div className="mb-6 pb-6 border-b border-gray-800">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors w-full"
            >
              <HiOutlineGlobeEuropeAfrica className="h-5 w-5" />
              <span className="text-sm flex-1 text-left">
                {languages.find((l) => l.code === selectedLang)?.label ||
                  selectedLang}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  isLangDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mobile Language Dropdown */}
            {isLangDropdownOpen && (
              <div className="mt-3 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-800 transition-colors ${
                      selectedLang === lang.code
                        ? "text-yellow-500 bg-gray-900"
                        : "text-white"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLangDropdownOpen(false);
              }}
              className="px-4 py-2 bg-black border border-yellow-500 text-white rounded-[36px] text-sm font-semibold hover:bg-gray-900 transition-colors text-center"
            >
              <p className="bg-gradient-to-r from-[#C3A346] to-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent inline-block">
                Log in
              </p>
            </Link>
            <Link
              href="/signup"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLangDropdownOpen(false);
              }}
              className="px-4 py-2 bg-white border border-black text-black rounded-[36px] text-sm hover:bg-gray-100 transition-colors font-semibold text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
