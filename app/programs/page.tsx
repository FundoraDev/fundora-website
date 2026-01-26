import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BusinessIcon, ChooseConsultationIcon, ChooseFACAPIcon, ChoosePWAIcon, Facap2Icon, UnderstandHowToInvest } from "../components/svg";

export const metadata: Metadata = {
  title: "Fundora - Programs",
  description: "Explore our programs and find the perfect one for you.",
};

export default function Programs() {

  const howToChoose = [
    {
      id: "choose-consultation",
      body: <p>Choose <br className="hidden md:block" /> Consultation for <br className="hidden md:block" /> immediate clarity</p>,
      icon: <ChooseConsultationIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "choose-facap",
      body: <p>Choose <span className="font-bold">FACAP</span> for full <br className="hidden md:block" /> personal financial <br className="hidden md:block" /> structure</p>,
      icon: <ChooseFACAPIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "choose-private-wealth",
      body: <p>Choose <span className="font-bold">Private Wealth <br className="hidden md:block" /> Advisory</span> for bespoke, <br className="hidden md:block" /> long-term guidance</p>,
      icon: <ChoosePWAIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "business",
      body: <p>Choose <span className="font-bold">Business <br className="hidden md:block" />  Consulting</span> for enterprise-<br className="hidden md:block" /> focused support</p>,
      icon: <BusinessIcon className="w-20 h-10 sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-20 lg:h-10" />
    },

  ];

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
            <h1 className="font-satoshi hidden md:block md:text-[54px] lg:text-[72px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-extrabold capitalize">
              Structured <br /> guidance for every <br /> stage of wealth
            </h1>
            <h1 className="font-satoshi block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-extrabold capitalize">
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
        className="bg-[#F5F5F5] text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <div className="order-2 md:order-none">
              <h3 className="font-satoshi text-[24px] md:text-[56px] font-extrabold mb-[12px] md:mb-[19px]">FACAP</h3>
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
          <h2 className="font-satoshi text-[24px] md:text-[56px] font-extrabold mb-[12px] md:mb-[19px] leading-tight">FACAP is Ideal if <br className="hidden md:block" /> You Want:</h2>
          <div className="w-[343px] h-[418px] md:w-full md:h-auto mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-2 rounded-[16.37px] md:rounded-[60px] py-[27px] px-[16px] md:py-[90px] md:px-[80px] facap2-bg">
            <div className="flex flex-col items-start justify-end md:justify-center gap-[12px] md:gap-[48px] text-white">
              <div className="flex flex-row justify-center items-center gap-[14px] font-extrabold text-[12px] leading-tight md:text-[28px] md:gap-[32px]">
                <Facap2Icon className="w-12 h-12" />
                <p>
                  Clear understanding of <br /> financial planning
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-[14px] font-extrabold text-[12px] leading-tight md:text-[28px] md:gap-[32px]">
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

      {/* Our FACAP Wealth */}
      <section
        className="bg-white text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16 lg:gap-20 px-4 pb-16 pt-10 md:px-6 lg:pb-20 lg:pt-14">

          <h2 className="font-satoshi text-[24px] md:text-[56px] font-extrabold mb-4 md:mb-6 leading-tight text-center">Our FACAP Wealth <br className="hidden md:block" /> Framework</h2>

          {/* Consultation: image first on mobile, text left / image right on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center w-full text-left">
            <div className="order-1 md:order-2 w-full max-w-[560px] md:max-w-none mx-auto md:mx-0">
              <div className="relative w-full aspect-[604/629] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px]">
                <Image
                  src="/images/programs-consultation.png"
                  alt="Consultation"
                  width={604}
                  height={629}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 order-2 md:order-1 py-2 md:py-12 lg:py-20">
              <div>
                <h3 className="font-satoshi text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-bold uppercase tracking-wide mb-2 md:mb-3">Consultation</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#696F8C] font-normal leading-relaxed">Not every situation requires a long-term <br className="hidden md:block" /> program. Sometimes, you need one clear <br className="hidden md:block" /> conversation to make the right next move.</p>
              </div>
              <ul className="flex flex-col gap-2 md:gap-3 pl-5 list-disc space-y-1">
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Investment decisions</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Insurance or protection questions</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Cross-border financial concerns</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Career, income, or transition <br className="hidden md:block" /> planning</li>
              </ul>
              <button className="bg-black rounded-[36px] px-6 py-3 text-[14px] md:text-[16px] font-bold">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Book a consultation</span>
              </button>
            </div>
          </div>

          {/* PWA: image first on mobile, image left / text right on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center w-full text-left">
            <div className="order-1 md:order-1 w-full max-w-[560px] md:max-w-none mx-auto md:mx-0">
              <div className="relative w-full aspect-[604/629] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px]">
                <Image
                  src="/images/programs-pwa.png"
                  alt="Private Wealth Advisory"
                  width={604}
                  height={629}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 order-2 md:order-2 py-2 md:py-12 lg:py-20">
              <div>
                <h3 className="font-satoshi text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-bold uppercase tracking-wide mb-2 md:mb-3">PRIVATE WEALTH <br className="hidden md:block" /> ADVISORY</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#696F8C] font-normal leading-relaxed">
                  Private Wealth Advisory is designed for <br className="hidden md:block" /> clients with complex financial lives who need <br className="hidden md:block" /> custom strategy, discretion, and long-term <br className="hidden md:block" /> oversight.
                </p>
              </div>
              <ul className="flex flex-col gap-2 md:gap-3 pl-5 list-disc space-y-1">
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Personalised investment strategy</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Asset allocation and <br className="hidden md:block" /> diversification planning</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Risk and protection integration</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Wealth preservation and <br className="hidden md:block" /> legacy planning</li>
              </ul>
              <button className="bg-black rounded-[36px] px-6 py-3 text-[14px] md:text-[16px] font-bold">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Request Private Advisory</span>
              </button>
            </div>
          </div>

          {/* Business Consulting: image first on mobile, text left / image right on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center w-full text-left">
            <div className="order-1 md:order-2 w-full max-w-[560px] md:max-w-none mx-auto md:mx-0">
              <div className="relative w-full aspect-[604/629] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px]">
                <Image
                  src="/images/programs-bc.png"
                  alt="Business Consulting"
                  width={604}
                  height={629}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 order-2 md:order-1 py-2 md:py-12 lg:py-20">
              <div>
                <h3 className="font-satoshi text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-bold uppercase tracking-wide mb-2 md:mb-3">BUSINESS <br className="hidden md:block" /> CONSULTING</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#696F8C] font-normal leading-relaxed">Financial clarity for founders and <br className="hidden md:block" /> business owners.</p>
              </div>
              <ul className="flex flex-col gap-2 md:gap-3 pl-5 list-disc space-y-1">
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Financial structure and planning</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Cash-flow clarity</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Risk and continuity thinking</li>
                <li className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px]">Strategic decision support</li>
              </ul>
              <button className="bg-black rounded-[36px] px-6 py-3 text-[14px] md:text-[16px] font-bold">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Business Consulting</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How To Choose */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-8xl px-4 py-12 md:px-6 md:py-16 space-y-10 text-center">
          <h2 className="text-black font-bold text-[16px] md:text-[28px]">HOW TO CHOOSE THE RIGHT <br className="block md:hidden" /> PROGRAM</h2>
          {/* Calm Strategy block */}
          <div
            className="flex flex-col md:justify-center md:items-end gap-8 rounded-[20px] md:rounded-[60px] bg-black p-6 md:p-8 md:bg-left overflow-hidden"
          >
            <div className="md:flex flex-col justify-center items-start md:items-start w-full space-y-4">
              <div className="flex flex-col text-[32px] leading-tight tracking-tight font-bold justify-center items-center md:items-start w-full md:w-auto md:justify-start text-center md:text-left md:text-[52px] text-white gap-[16px] md:mb-[50px]">
                <p className="font-satoshi font-extrabold leading-tighter">
                  Start with <br className="hidden md:block" /> clarity
                </p>
                <p className="text-[16px] md:text-[22.38px] font-normal tracking-normal">If you’re unsure where to begin:</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full mt-4 gap-4 md:gap-6 lg:gap-8 text-xs text-white">
                {howToChoose.map((strategy) => (
                  <div
                    key={strategy.id}
                    className="flex flex-col items-center text-center md:items-start md:text-left justify-center gap-3 md:gap-4 min-h-[131px] md:min-h-0 font-semibold text-[14px] md:text-[20px] lg:text-[24px]"
                  >
                    {strategy.icon}
                    {strategy.body}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
