import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Facap2Icon, UnderstandHowToInvest } from "../components/svg";

export const metadata: Metadata = {
  title: "Fundora - Programs",
  description: "Explore our programs and find the perfect one for you.",
};

export default function Programs() {

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/programs-hero-mb.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/programs-hero-dk.png');
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
        .facap2-bg {
          background-image: url('/images/facap2-mb.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .facap2-bg {
            background-image: url('/images/facap2.png');
          }
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
              Structured <br /> guidance for every <br /> stage of wealth
            </h1>
            <h1 className="block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
              Structured <br /> guidance for <br /> every stage <br /> of wealth
            </h1>
            <p className="hidden md:block max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Different seasons require different levels of support. <br />
              Fundora offers clearly defined programs designed to <br /> meet you exactly where you are and guide you <br /> forward with structure and clarity.
            </p>
            <p className="block md:hidden max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Different seasons require different levels of <br /> support.
              Fundora offers clearly  <br /> programs designed to meet you exactly <br /> where you are and guide you forward with <br /> structure and clarity.
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
            <p className="hidden md:block text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">Whether you’re starting, growing, or refining your financial <br /> life, there is a program built for you.</p>
            <p className="block md:hidden text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">Whether you’re starting, growing, or refining your <br /> financial life, there is a program built for you.</p>
          </div>
        </div>
      </section>

      {/* FACAP Section */}
      <section
        className="bg-white text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <div className="order-2 md:order-none">
              <h3 className="text-[24px] md:text-[56px] font-bold mb-[12px] md:mb-[19px]">FACAP</h3>
              <p className="text-[16px] md:text-[24px] font-normal mb-[12px] md:mb-[19px]">Finance and Career Accountability Program (FACAP) is a comprehensive financial planning experience for individuals and families who want full visibility and control over their financial lives.
              </p>
              <p className="text-[16px] md:text-[24px] font-normal mb-[12px] md:mb-[19px]">This program brings all key areas together—income, investing, protection, and long-term planning—into one clear structure.</p>
            </div>
            <div className="order-1 md:order-none">
              <Image alt="FACAP" src="/images/facap.png" width={639} height={423} />
            </div>
          </div>
        </div>
      </section>

      {/* FACAP is Ideal Section */}
      <section
        className="bg-white text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-16 pt-10 md:flex-col items-start justify-center md:gap-[60px] md:px-6 lg:pb-20 lg:pt-14">
          <h2 className="text-[24px] md:text-[56px] font-bold mb-[12px] md:mb-[19px] leading-tight">FACAP is Ideal if <br className="hidden md:block" /> You Want:</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-[16.37px] md:rounded-[60px] py-[27px] px-[16px] md:py-[90px] md:px-[80px] facap2-bg">
            <div className="flex flex-col items-start justify-center gap-[12px] md:gap-[48px] text-white">
              <div className="flex flex-row justify-center items-center gap-[14px] font-bold text-[12px] leading-tight md:text-[28px] md:gap-[32px]">
                <Facap2Icon className="w-12 h-12" />
                <p>
                  Clear understanding of <br /> financial planning
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-[14px] font-bold text-[12px] leading-tight md:text-[28px] md:gap-[32px]">
                <UnderstandHowToInvest className="w-12 h-12" />
                <p>
                  Understand how to invest in <br /> stocks and fixed income <br /> instruments as a beginner
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] text-black rounded-[36px] px-4 py-2 text-[11px] md:text-[16px] font-bold py-[7.5px] md:py-[12px] px-[23.5px] md:px-[32px] ">Register for next cohort of FACAP</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
