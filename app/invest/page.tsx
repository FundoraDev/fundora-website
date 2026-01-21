"use client";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundora - Invest",
  description: "Invest your wealth with Fundora.",
};

export default function Invest() {

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/invest-hero-mb.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/invest-hero-dk.png');
            background-position: right;
          }
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
      {/* Hero Section */}
      <section
        className="home-hero-bg bg-black text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          {/* Left copy */}
          <div className="flex-1 space-y-6">
            <h1 className="hidden md:block md:text-[54px] lg:text-[72px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
              Invest With Clarity,
              <br />
              Not Guesswork
            </h1>
            <h1 className="block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
              Invest With
              <br />
              Clarity, Not
              <br />
              Guesswork
            </h1>
            <p className="hidden md:block max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Grow your money using structured, long-term <br /> investment strategies
            </p>
            <p className="block md:hidden max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Grow your money using structured, long-<br />term investment strategies
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/consultation"
                className="sm:w-auto text-center w-full rounded-[36px] bg-[#F9FAFC] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Start Your Wealth Journey
              </Link>
              <Link
                href="/consultation"
                className="sm:w-auto w-full text-center rounded-[36px] bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Book a Consultation
              </Link>
            </div>
            <p className="hidden md:block text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">At Fundora, investing is not about chasing trends or timing<br /> markets. It’s about building wealth deliberately, using<br /> vehicles that match your goals, timeline, and risk tolerance.</p>
            <p className="block md:hidden text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">At Fundora, investing is not about chasing trends or<br /> timing markets. It’s about building wealth deliberately,<br /> using vehicles that match your goals, timeline, and risk<br /> tolerance.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
