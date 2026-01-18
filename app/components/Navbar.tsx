"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/invest", label: "Invest" },
    { href: "/protect", label: "Protect" },
    { href: "/programs", label: "Programs" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#000000] text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          alt="Fundora Logo"
          src="/fundora.png"
          width={30}
          height={30}
        />
        <span className="text-white text-[22px] font-bold font-sans">fundora</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
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

      {/* Right Side: Language Selector + Buttons */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <div className="flex items-center gap-0.4 cursor-pointer hover:text-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm">US</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
        </div>

        {/* Buttons */}
        <Link
          href="/login"
          className="px-4 py-2 bg-black border border-yellow-500 text-white  rounded-[36px] text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          <p className="bg-gradient-to-r from-[#C3A346] to-[#FEEF9C]  to-[#C7AB4F] bg-clip-text text-transparent inline-block">Log in</p>
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-white border border-black text-black rounded-[36px] text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
