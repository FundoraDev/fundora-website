import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-black">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 md:py-32 px-6 overflow-hidden">
        {/* Blurred Background Effect */}
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
          {/* Abstract blurred shapes to simulate people silhouettes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gray-600 rounded-full blur-3xl opacity-25"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-gray-700 rounded-full blur-3xl opacity-25"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build Your Financial Future
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-yellow-400"></div>
            <p className="text-lg md:text-xl">
              <span className="bg-yellow-400 text-black px-2 py-1">
                The Right Way
              </span>
            </p>
          </div>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re starting out or refining an existing strategy,
            Fundora helps you move forward with confidence
          </p>

          <Link
            href="/consultation"
            className="bg-linear-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100%bg-[#D4C5A9] rounded-[36px] inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 transition-colors text-[16px] py-[12px] px-[32px]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Top Section with Links and Social Media */}
      <div className="bg-gradient-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100% bg-[#D4C5A9] border-b border-black/10 px-6 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-sm items-center">
          {/* Left Links */}
          <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 text-gray-700 justify-center md:justify-start items-center">
            <Link
              href="/customer-relationship-summaries"
              className="hover:text-black transition-colors"
            >
              Customer Relationship Summaries
            </Link>
            <Link
              href="/finra-brokercheck"
              className="hover:text-black transition-colors"
            >
              FINRA&apos;s BrokerCheck
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:justify-start justify-center text-gray-700">
            <span className="text-sm mb-1 md:mb-0 md:mr-2">Follow us on</span>
            <div className="flex items-center gap-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="X"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-linear-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100%bg-[#D4C5A9] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/mutual-funds"
                    className="hover:underline transition-colors"
                  >
                    Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stocks"
                    className="hover:underline transition-colors"
                  >
                    Stocks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fixed-income"
                    className="hover:underline transition-colors"
                  >
                    Fixed Income
                  </Link>
                </li>
                <li>
                  <Link
                    href="/alternative-investments"
                    className="hover:underline transition-colors"
                  >
                    Alternative Investments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/retirement"
                    className="hover:underline transition-colors"
                  >
                    Retirement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/life-insurance"
                    className="hover:underline transition-colors"
                  >
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/income-protection"
                    className="hover:underline transition-colors"
                  >
                    Income Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/asset-business-coverage"
                    className="hover:underline transition-colors"
                  >
                    Asset & Business Coverage
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:underline transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner-with-us"
                    className="hover:underline transition-colors"
                  >
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliates"
                    className="hover:underline transition-colors"
                  >
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:underline transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:underline transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Regulatory Column */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal & Regulatory</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/terms-conditions"
                    className="hover:underline transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosures"
                    className="hover:underline transition-colors"
                  >
                    Disclosures
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Disclaimer Text */}
            <div className="text-xs leading-relaxed space-y-3">
              <p>
                All investing involves risk.
              </p>
              <p>
                Brokerage services are offered through Fundora Financial LLC, a
                registered broker dealer (member SIPC), and clearing services
                through Fundora Securities, LLC, a registered broker dealer
                (member SIPC).
              </p>
              <p>
                Funds held in your Fundora Cash Wallet account at Sutton Bank
                are eligible for FDIC insurance up to $250,000...
              </p>
              <p>
                Options trading entails significant risk and is not appropriate
                for all customers.
              </p>
              <p className="mt-4">47840659</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-black/10 pt-6 text-xs text-gray-700">
            <p>
              Fundora, 85 Willow Road, Menlo Park, CA 94025. © 2025 Fundora.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Large Logo at Bottom */}
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-[#C3A346] from-0% via-[#FEEF9C] via-50% to-[#C7AB4F] to-100% bg-[#D4C5A9] px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#63510C] text-6xl md:text-[135.74px] lg:text-[235.74px] 2xl:text-[335.74px] font-bold font-sans">
            fundora
          </h1>
        </div>
      </div>
    </footer>
  );
}
