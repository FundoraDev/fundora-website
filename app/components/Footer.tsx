import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { GoldBrushSwipe } from "./svg";

export default function Footer() {
  return (
    <footer className="text-black">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 overflow-hidden" style={{ backgroundImage: "url('/images/footer-top.avif')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

        {/* Hero Content */}
        <div
          className="relative z-10 max-w-4xl mx-auto text-center px-2 sm:px-0 bg-no-repeat bg-top bg-cover"

        >
          <h2 className="font-satoshi text-[28px] md:text-[38px] lg:text-[48px] font-extrabold mb-0">
            Let&apos;s Build Your Financial Future
          </h2>

          <div className="font-satoshi flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {/* <div className="h-[3px] md:h-[6px] w-5 sm:w-10 bg-white"></div> */}
            <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-extrabold">
              The{" "}
              <span className="relative inline-flex items-center justify-center px-2 py-1">
                <span className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none">
                  <GoldBrushSwipe className="w-[210px] sm:w-[260px] md:w-[280px] lg:w-[320px] h-auto max-w-full" />
                </span>
                <span className="relative text-black">Right Way</span>
              </span>
            </h2>
          </div>

          <p className="text-[#AEB1BC] text-[20px] font-light md:text-[24px] mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Whether you&apos;re starting out or refining an existing strategy,
            Fundora helps you move forward with confidence
          </p>

          <Link
            href="#"
            className="bg-linear-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100%bg-[#D4C5A9] rounded-[36px] inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 transition-colors text-[16px]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Top Section with Links and Social Media */}
      <div className="bg-gradient-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100% bg-[#D4C5A9] border-b border-black/10 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm md:text-[16px] items-center">
          {/* Left Links */}
          <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 text-black justify-center md:justify-start items-center">
            <Link
              href="#"
              className="hover:text-black transition-colors underline text-center md:text-left"
            >
              Customer Relationship Summaries
            </Link>
            <div className="h-[36px] bg-[#808080] border border-[#808080] hidden md:block"></div>
            <Link
              href="#"
              className="hover:text-black transition-colors underline text-center md:text-left"
            >
              FINRA&apos;s BrokerCheck
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:justify-start justify-center text-gray-700 text-black">
            <span className="text-sm md:text-[16px] mb-1 md:mb-0 md:mr-2">Follow us on</span>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="X"
              >
                <FaXTwitter className="h-5 w-5 text-black" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-black" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 text-black" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5 text-black" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-linear-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100%bg-[#D4C5A9] px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 mb-8 sm:mb-10 md:mb-12 text-sm md:text-[16px]">
            {/* Product Column */}
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Product</h3>
              <ul className="space-y-1.5 sm:space-y-2 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Stocks
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Fixed Income
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Alternative Investments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Retirement
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Income Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Asset & Business Coverage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Regulatory Column */}
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Legal & Regulatory</h3>
              <ul className="space-y-1.5 sm:space-y-2 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline transition-colors"
                  >
                    Disclosures
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer Text */}
          <div className="text-sm md:text-[16px] leading-relaxed space-y-2.5 sm:space-y-3 font-light text-black">
            <p className="font-bold">
              All investing involves risk.
            </p>
            <p>
              <span className="font-bold">Brokerage services</span> are offered through Fundora Financial LLC, a registered broker
              dealer (member <span className="underline">SIPC</span>
              ), and clearing services through Fundora Securities, LLC, a
              registered broker dealer (member <span className="underline">SIPC</span>
              ). While there is no additional cost to use Robinhood
              Legend, there are other fees associated with your brokerage account. Please see the <span className="underline">fee
                schedule</span> for more information.
            </p>
            <p>
              <span className="font-bold">Futures and cleared swaps trading</span> is offered by Fundora Derivatives, LLC, a
              registered futures commission merchant with the Commodity Futures Trading Commission
              (CFTC) and a Member of the National Futures Association (NFA). {/*RHD is not FDIC insured or
              SIPC protected.*/}
            </p>
            <p>
              Funds held in your Fundora Cash Wallet account at Sutton Bank are eligible for FDIC
              insurance up to $250,000 and will not accrue or pay any interest. The availability of FDIC
              insurance is contingent upon Fundora maintaining records acceptable to the FDIC, as
              receiver, if Sutton Bank should fail. FDIC insurance limits apply collectively to all of your
              deposits held at Sutton Bank.
            </p>
            <p>
              Options trading entails significant risk and is not appropriate for all customers. Customers
              must read and understand the <span className="underline">Characteristics and Risks of Standardized Options</span> before
              engaging in any options trading strategies. Options transactions are often complex and may
              involve the potential of losing the entire investment in a relatively short period of time. Certain
              complex options strategies carry additional risk, including the potential for losses that may
              exceed the original investment amount.
            </p>
            <p className="mt-4">47840659</p>
            <p>
              Fundora, 85 Willow Road, Menlo Park, CA 94025. © 2025 Fundora.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Large Logo at Bottom */}
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100% bg-[#D4C5A9] px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#63510C] text-5xl sm:text-6xl md:text-[135.74px] lg:text-[235.74px] 2xl:text-[335.74px] font-bold font-sans">
            fundora
          </h2>
        </div>
      </div>
    </footer>
  );
}
