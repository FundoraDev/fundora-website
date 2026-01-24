import Link from "next/link";
import { Metadata } from "next";
import { NairaSavingsIcon, NGNStocksIcon, TreasuryBillsIcon, USStocksIcon, FixedReturnsIcon, ManagedPortfolioIcon } from "../components/svg";

export const metadata: Metadata = {
  title: "Fundora - Invest",
  description: "Invest your wealth with Fundora.",
};

export default function Invest() {

  const stocks = [
    { id: "US Stocks", icon: <USStocksIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">US Stocks</h3>, description: "Buy U.S. Company" },
    {
      id: "NGN Stocks", icon: <NGNStocksIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">Nigerian Stocks</h3>, description: "Buy local companies."
    },
    {
      id: "Treasury Bills", icon: <TreasuryBillsIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">Treasury Bills</h3>, description: "Treasury Bills"
    },
    {
      id: "Naira Savings", icon: <NairaSavingsIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">Naira Savings</h3>, description: "Earn up to 16% per annum"
    },
    {
      id: "Fixed Returns", icon: <FixedReturnsIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">Fixed Returns</h3>, description: "Earn up to 6% dollar returns."
    },
    { id: "Managed Portfolio", icon: <ManagedPortfolioIcon className="w-12 h-12" />, title: <h3 className="text-[12px] md:text-[24px] font-bold">Managed Portfolio</h3>, description: "Allow an expert manage your funds" },
  ]

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


      {/* Stocks & Market Section */}
      <section
        className="bg-white text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <h2 className="text-[16px] md:text-[28px] tracking-[12%] lg:text-[48px] font-bold leading-7 md:leading-12 text-center">STOCKS & MARKET INVESTMENTS</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[10px] md:gap-[24px]">
            {stocks.map((stock) => (
              <div
                key={stock.id}
                className="flex flex-col justify-between md:items-start bg-white text-black gap-[39px] md:gap-[114px] border border-[#E6E8F0] rounded-[17px] px-[16px] py-[20px] md:p-[24px] md:rounded-[20px] h-auto md:h-[360px] lg:h-[400px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex flex-col items-start justify-center gap-[10px] md:gap-[24px] flex-1 w-full">
                  {stock.icon}
                  <div className="flex flex-col gap-[4px] md:gap-[8px] w-full">
                    {stock.title}
                    <p className="text-[12px] md:text-[24px] font-normal break-words">{stock.description}</p>
                  </div>
                </div>
                <button className="bg-black rounded-[36px] px-4 py-2 text-[11px] md:text-[16px] font-bold py-[7.5px] md:py-[12px] px-[23.5px] md:px-[32px] ">
                  <span className="bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] bg-clip-text text-transparent">Explore Investing</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
