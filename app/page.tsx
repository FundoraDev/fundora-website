"use client";
import Image from "next/image";
import Link from "next/link";
import { BuildingHomeIcon, ClearThinkingIcon, DisciplinedExecutionIcon, DisciplinedIcon, EthicalIcon, FutureFocusedIcon, GoldBrushSwipe, LongTermPerspectiveIcon, NavigatingHomeIcon, PlanningHomeIcon, RiskAwarenessIcon } from "./components/svg";
import React from "react";
// import { useState } from "react";

type Tab = "invest" | "protect" | "advisory";

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<Tab>("invest");
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  const completeWealthFramework = [
    {
      id: "invest",
      title: "Invest",
      description: "Grow your capital through structured, research-driven investment solutions.",
      list: ["Mutual Fund", "Stocks & Fixed Income Instruments", "Alternative Investments"],
      path: "/images/invest-home.png",
    },
    {
      id: "protect",
      title: "Protect",
      description: "Safeguard your income, assets, and future.",
      list: ["Life & Health Insurance", "Income Protection", "Asset & Business Coverage"],
      path: "/images/protect-home.png",
    },
    {
      id: "advisory",
      title: "Advisory",
      description: "Get personalised guidance for complex financial decisions.",
      list: ["Financial Consultation", "Private Wealth Advisory", "Business & Strategy Support"],
      path: "/images/advisory-home.png",
    },
  ];

  const activeItem = completeWealthFramework.find((item) => item.id === activeTab);

  const calmStrategy = [
    {
      id: "disciplined-execution",
      body: <p className="pl-2">Disciplined <br /> execution</p>,
      icon: <DisciplinedExecutionIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "long-term-perspective",
      body: <p className="pl-2">Long-term <br /> perspective</p>,
      icon: <LongTermPerspectiveIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "risk-awareness",
      body: <p className="pl-2">Risk <br /> awareness</p>,
      icon: <RiskAwarenessIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "clear-thinking",
      body: <p className="pl-2">Clear <br /> thinking</p>,
      icon: <ClearThinkingIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },

  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/home-hero-mb.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/home-hero-dk.png');
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
              Build. Grow. Protect
              <br />
              Transfer Wealth
              <br />
              With Clarity.
            </h1>
            <h1 className="block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
              Build. Grow. Protect
              <br />
              Transfer Wealth
              <br />
              With Clarity.
            </h1>
            <p className="max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Fundora is building Africa's next generation <br /> of wealthy families.
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
            <p className="text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">We guide Africans at home and abroad on investing, <br /> protecting their wealth, setting up trust funds, and <br /> creating long-term financial legacies.</p>
          </div>
        </div>
        <div className="w-full px-4 pb-16 pt-10 md:px-6 lg:pb-20 lg:pt-14 bg-black flex flex-col items-center justify-center flex-wrap gap-[48px] pt-4 text-xs text-gray-300 text-center">
          <h3 className="leading-9 text-white text-center md:text-left text-[20px] md:text-[24px] lg:text-[32px] font-extrabold">
            Helping Africans Everywhere <br className="block md:hidden" /> Build{" "}
            <span className="relative inline-flex items-center justify-center px-2 py-1">
              <span className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
                <GoldBrushSwipe className="w-[210px] sm:w-[260px] md:w-[280px] lg:w-[320px] h-auto max-w-full" />
              </span>
              <span className="relative text-black z-15">Lasting Wealth</span>
            </span>
          </h3>
          <div className="w-full mx-auto grid grid-cols-3 justify-between items-center text-[12px] text-white md:text-[24px] font-semibold">
            <div className="flex flex-col items-center justify-center gap-[12px]">
              <DisciplinedIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <p className="text-inherit">Disciplined</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[12px]">
              <EthicalIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <p>Ethical</p></div>
            <div className="flex flex-col items-center justify-center gap-[12px]">
              <FutureFocusedIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <p>Future-focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Africans Serious About Wealth */}
      <section className="bg-white">
        <div className="px-4 py-10 md:px-0 md:py-14">
          <div className=" mb-[34px] md:mb-[60px] mx-auto lg:max-w-7xl px-4 md:px-6"><h2 className="mb-1 text-left text-[24px] leading-7 md:leading-[1.1] font-extrabold md:mb-3 md:text-[56px]">
            Built For <br /> Africans Serious <br /> About Wealth
          </h2>
            <p className="text-[#808080] text-[16px] leading-6 font-normal md:text-[24px]">Fundora supports:</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:flex md:gap-[20px] md:overflow-x-auto md:pl-6 lg:mx-auto lg:max-w-7xl hide-scrollbar">
            {[
              {
                id: "black",
                body: <p className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent text-[19.32px] md:text-[28px] font-semibold">Professionals building <br /> long-term financial <br /> security</p>,
                icon: <BuildingHomeIcon className="w-16 sm:w-20 md:w-28 lg:w-36 h-auto max-w-full" />,
              },
              {
                id: "gold",
                body: <p className="text-black text-[19.32px] md:text-[28px] font-semibold">Families planning <br /> for protection and <br /> legacy</p>,
                icon: <PlanningHomeIcon className="w-16 sm:w-20 md:w-28 lg:w-36 h-auto max-w-full" />,
              },
              {
                id: "black",
                body: <p className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent text-[19.32px] md:text-[28px] font-semibold">Diaspora Africans <br /> navigating cross-border <br /> finances</p>,
                icon: <NavigatingHomeIcon className="w-16 sm:w-20 md:w-28 lg:w-36 h-auto max-w-full" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-[32px] md:gap-[90px] justify-between items-start rounded-2xl border border-black/5 ${item.id === "black" ? "bg-gradient-to-b from-[#111111] via-[#272727] to-black" : "bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F]"} px-5 py-6 text-white shadow-sm md:w-[497px] md:flex-shrink-0`}
              >
                {item.icon && item.icon}
                <div className="space-y-2">
                  {item.body}
                </div>
                <button className={`w-auto rounded-[999px] px-4 py-[8px] md:py-[12px] text-[11px] md:text-[16px] font-bold ${item.id === "gold" ? "bg-gradient-to-b from-[#111111] via-[#272727] to-black text-white" : "bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] text-black"}`}>Book a Consultation</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Complete Wealth Framework */}
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="mb-15 text-center text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-7 md:leading-12">
            A Complete Wealth <br /> Framework
          </h2>

          <div className="hidden md:grid gap-[100px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            {/* Invest */}
            <div className="flex flex-col items-start justify-center rounded-3xl bg-transparent text-[#141A00 font-normal] p-6 md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-inherit text-black text-[32px] font-semibold md:tracking-[12%] md:mb-[13px] lg:mb-[16px]">
                Invest
              </div>
              <p className="mb-5 text-[20px] font-normal text-sm text-[#696F8C] md:mb-[35px] lg:mb-[48px]">Grow your capital through structured, <br /> research-driven investment solutions.
              </p>
              <ul className="list-disc text-[24px] tracking-[0%] font-semibold mb-[35px] lg:mb-[48px] ml-[20px]">
                <li>Mutual Fund</li>
                <li>Stocks & Fixed Income Instruments</li>
                <li>Alternative Investments</li>
              </ul>
              <button className="bg-black rounded-[36px] px-4 py-2 text-[16px] font-bold py-[12px] px-[32px]">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Investing</span>
              </button>
            </div>
            <div className="flex items-center justify-center rounded-3xl 
            bg-black p-6">
              <Image src="/images/invest-home.png" alt="Invest" width={260}
                height={260} className="w-full h-full object-cover" />
            </div>

            {/* Protect */}
            <div className="flex items-center justify-center rounded-3xl 
            bg-black p-6">
              <Image src="/images/protect-home.png" alt="Protect" width={260}
                height={260} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start justify-center rounded-3xl bg-transparent text-[#141A00 font-normal] p-6 md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-inherit text-black text-[32px] font-semibold md:tracking-[12%] md:mb-[13px] lg:mb-[16px]">
                Protect
              </div>
              <p className="mb-5 text-[20px] font-normal text-sm text-[#696F8C] md:mb-[35px] lg:mb-[48px]">
                Safeguard your income, assets, <br /> and future.
              </p>
              <ul className="list-disc text-[24px] tracking-[0%] font-semibold mb-[35px] lg:mb-[48px] ml-[20px]">
                <li>Life & Health Insurance</li>
                <li>Income Protection</li>
                <li>Asset & Business Coverage</li>
              </ul>
              <button className="bg-black rounded-[36px] px-4 py-2 text-[16px] font-bold py-[12px] px-[32px]">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Investing</span>
              </button>
            </div>

            <div className="flex flex-col items-start justify-center rounded-3xl bg-transparent text-[#141A00 font-normal] p-6 md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-inherit text-black text-[32px] font-semibold md:tracking-[12%] md:mb-[13px] lg:mb-[16px]">
                Advisory
              </div>
              <p className="mb-5 text-[20px] font-normal text-sm text-[#696F8C] md:mb-[35px] lg:mb-[48px]">Get personalised guidance for <br /> complex financial decisions.
              </p>
              <ul className="list-disc text-[24px] tracking-[0%] font-semibold mb-[35px] lg:mb-[48px] ml-[20px]">
                <li>Financial Consultation</li>
                <li>Private Wealth Advisory</li>
                <li>Business & Strategy Support</li>
              </ul>
              <button className="bg-black rounded-[36px] px-4 py-2 text-[16px] font-bold py-[12px] px-[32px]">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Investing</span>
              </button>
            </div>
            <div className="relative rounded-3xl bg-black overflow-hidden">
              <div
                className="z-20 pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-70 blur-2xl bg-[radial-gradient(circle_at_top,_#00DB0E_0%,_rgba(0,219,14,0)_70%)]"
              />
              <Image
                src="/images/advisory-home.png"
                alt="Advisory"
                width={260}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center align-center gap-[24px] md:hidden">
            <div className="grid grid-cols-3 border-[0.5px] border-[#E5E5E5] rounded-3xl p-[4px] text-[12px]">
              {completeWealthFramework.map((item) => (
                <button key={item.id} onClick={() => handleTabClick(item.id as Tab)} className={`w-full h-full rounded-[22.45px] ${activeTab === item.id ? "bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] text-black font-semibold" : "bg-transparent text-black"} py-[11px]`}>
                  {item.title}
                </button>
              ))}
            </div>
            {
              <>
                <div className="flex flex-col items-start justify-center rounded-3xl bg-black p-0 overflow-hidden">
                  <Image src={activeItem?.path || ""} alt={activeItem?.title || ""} width={300} height={300} className="w-full h-full object-cover" />
                </div>
                <p className="text-[14px] font-normal text-[#696F8C]">{activeItem?.description || ""}</p>
                <ul className="list-disc text-[16px] tracking-[0%] font-semibold ml-[20px]">
                  {activeItem?.list?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="w-auto bg-black rounded-[25.69px] px-4 py-2 text-[12px] font-bold py-[8.13px] px-[22px]">
                  <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Investing</span>
                </button>
              </>
            }
          </div>
        </div>
      </section>

      {/* Calm Strategy, Structured Support, Leadership Highlights */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-8xl px-4 py-12 md:px-6 md:py-16 space-y-10">
          {/* Calm Strategy block */}
          <div
            className="flex flex-col md:justify-center md:items-end gap-8 rounded-3xl bg-black p-6 md:p-8 bg-[url('/images/calm-strategy-mobile.png')] md:bg-[url('/images/calm-strategy.png')] md:bg-size-[300px] bg-size-[300px] bg-no-repeat bg-[right_bottom] md:bg-left overflow-hidden"
          >
            <div className="md:flex flex-col justify-center items-start md:items-end w-full space-y-4">
              <div className="flex flex-col text-[32px] leading-tight font-bold justify-start w-full md:w-auto md:justify-end text-left md:text-right md:text-[52px] text-white gap-[16px] md:mb-[50px]">
                <p className=" tracking-[0.18em] leading-tighter">
                  Calm Strategy <br /> Beats Loud <br /> Advice
                </p>
                <p className="text-[16px] md:text-[22.38px] font-normal tracking-normal">We believe wealth is built through:</p>
              </div>
              <div className="flex md:w-[80%] flex-col md:flex-row md:items-start justify-between mt-4  gap-4 text-xs text-white">
                {calmStrategy.map((strategy) => <div key={strategy.id} className="flex flex-col items-start justify-center gap-[16px] w-[161.35px] h-[131.45px] font-semibold md:text-[26.11px]">
                  {strategy.icon}
                  {strategy.body}
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Support */}
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="mb-15 text-center text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-7 md:leading-12">
            Structured Support <br /> At Every Level
          </h2>

          <div className="grid gap-[100px] grid-cols-2">
            <div className="bg-[#FFFFFF] flex flex-col items-start justify-center rounded-[30px]">
              <div>
                <p>FACAP</p>
                <p>Comprehensive financial planning</p>
              </div>
            </div>
            <div>
              <div>
                <p>FACAP</p>
                <p>Comprehensive financial planning</p>
              </div>
            </div>
          </div>
          <div className="grid gap-[100px] grid-cols-2">
            <div>
              <div>
                <p>FACAP</p>
                <p>Comprehensive financial planning</p>
              </div>
            </div>
            <div>
              <div>
                <p>FACAP</p>
                <p>Comprehensive financial planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Highlight */}
      <section className="bg-white">
        <div className="px-4 py-10 md:px-0 md:py-14">
          <div className=" mb-[34px] md:mb-[60px] mx-auto lg:max-w-7xl px-4 md:px-6"><h2 className="mb-1 text-left text-[24px] leading-7 md:leading-[1.1] font-extrabold md:mb-3 md:text-[56px]">
            Leadership <br /> Highlight
          </h2>
            <p className="text-[#808080] text-[16px] leading-6 font-normal md:text-[24px]">Led by experience, integrity, and vision:</p>
          </div>
          <div className="grid gap-[29px] grid-cols-1 md:grid-cols-2 md:gap-[10px] lg:gap-[35px] md:pl-6 lg:mx-auto lg:max-w-6xl">
            {/* Image first on small screens, second on md+ */}
            <div className="order-1 md:order-2">
              <Image
                src="/images/seyi-abiodun.png"
                alt="Fundora leadership portrait"
                width={672}
                height={554}
                className="w-full h-full object-cover rounded-[80px]"
              />
            </div>
            <div className="flex flex-col md:mx-auto items-start justify-center gap-[24px] md:gap-[60px] md:py-20 order-2 md:order-1">
              <div>
                <h3 className="text-[16px] font-bold md:text-[32px] tracking-[12%] mb-1 md:mb-0.5">DR. Seyi Abiodun</h3>
                <p className="text-[16px] md:text-[20px] text-[#696F8C] font-normal text-[#696F8C]">Founder &amp; Chief Wealth Strategist</p>
              </div>
              <p className="hidden md:block text-[24px] font-semibold">Fundora is led by Dr. Seyi Abiodun, <br /> a seasoned financial professional <br /> committed to helping Africans build <br /> and protect wealth responsibly. <br /> You’re guided, not sold to.
              </p>
              <p className="block md:hidden text-[16px] font-semibold">Fundora is led by Dr. Seyi Abiodun, a <br /> seasoned financial professionalcommitted <br />  to helping Africans build and protect wealth <br /> responsibly. You’re guided, not sold to.
              </p>
              <button className="bg-black text-[12px] rounded-[36px] px-4 py-2 text-[16px] font-bold py-[12px] px-[32px]">
                <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Meet Our Leadership</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
