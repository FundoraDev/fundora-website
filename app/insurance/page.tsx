import Link from "next/link";
import Image from "next/image";
import { AndMoreInsurance, ChoosePWAIcon, GoldBrushSwipe2, GoodAdviceIcon, LifeInsurance, LongTermIcon, LongTermPerspectiveIcon, LongTermThinkingIcon, MotorInsuranceIcon, MultiGenerationalIcon, ProtectionMattersIcon, StructureAlwaysIcon, TravelInsurance, WealthIsBuiltIcon, WorldClassIcon } from "../components/svg";

export default function About() {

  const insurance = [
    {
      id: "motor-insurance",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Motor Insurance</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        Drive with confidence <br /> we've got you covered.
      </p>,
      icon: <MotorInsuranceIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "life-insurance",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Life Insurance</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        Protect the people who matter<br /> most.
      </p>,
      icon: <LifeInsurance className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "travel-insurance",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Travel Insurance</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        Travel confidently with reliable <br /> protection.
      </p>,
      icon: <TravelInsurance className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "add-more",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">And More...</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        Dicover coverage for every <br /> need.
      </p>,
      icon: <AndMoreInsurance className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    }
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/protect-hero-mb.avif');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/protect-hero-dk.avif');
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
            <h1 className="font-satoshi hidden md:block md:text-[54px] lg:text-[72px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-extrabold">
              Elevated Protection,
              <br />
              Delivered with
              <br />
              Confidence.
            </h1>
            <h1 className="font-satoshi block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-extrabold">
              Elevated Protection
              <br />
              Delivered with
              <br />
              Confidence.
            </h1>
            <p className="hidden md:block max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              At Fundora Insure Partnering Insuretech Limited, we <br /> redefine insurance as a seamless, intelligent<br /> experience, designed around you.
            </p>
            <p className="block md:hidden max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              At Fundora Insure Partnering Insuretech <br />Limited,  we redefine insurance as a <br /> seamless, intelligent experience, <br />  designed around you.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="sm:w-auto text-center w-full rounded-[36px] bg-[#F9FAFC] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Choose insurance Plan
              </Link>
              <Link
                href="https://calendly.com/seyi-fundorahq/30min"
                target="_blank"
                className="sm:w-auto w-full text-center rounded-[36px] bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Book a Consultation
              </Link>
            </div>
            {/* <p className="text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">We guide Africans at home and abroad on investing, <br /> protecting their wealth, setting up trust funds, and <br /> creating long-term financial legacies.</p> */}
          </div>
        </div>
      </section>

      {/* Redefining Insurance */}
      <section
        className="relative overflow-hidden bg-[#F5F5F5] text-black"
      >
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[170px] w-[240px] md:block lg:h-[220px] lg:w-[300px]">
          <Image
            src="/images/redefine-car.avif"
            alt=""
            fill
            aria-hidden
            className="object-contain object-left-bottom"
            sizes="(max-width: 1024px) 240px, 300px"
          />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-0 hidden h-[170px] w-[240px] md:block lg:h-[220px] lg:w-[300px]">
          <Image
            src="/images/redefine-umbrella.avif"
            alt=""
            fill
            aria-hidden
            className="object-contain object-right-top"
            sizes="(max-width: 1024px) 240px, 300px"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full text-center font-extrabold font text-[24px] md:text-[48px]"><h2>Redefining Insurance</h2></div>
          <div className="w-full items-center justify-center gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <p className="block md:hidden max-w-xl text-[14px] lg:text-[24px] font-normal text-[#474D66] text-center">With the strength of our trusted partnership, accessing reliable, high-quality coverage becomes faster, <br /> clearer, and entirely effortless. <br />
              Whether it’s safeguarding your vehicle, securing your future, or ensuring peace of mind while you <br /> travel, our solutions are tailored to protect what matters most, with flexibility and precision.</p>
            <p className="block md:block text-[14px] md:text-[24px] font-normal text-[#474D66] text-center">With the strength of our trusted partnership, accessing reliable, high-quality coverage becomes faster, <br /> clearer, and entirely effortless. <br />
              Whether it’s safeguarding your vehicle, securing your future, or ensuring peace of mind while you <br /> travel, our solutions are tailored to protect what matters most, with flexibility and precision.</p>
          </div>
        </div>
      </section>

      {/* Discover our suite of offerings: */}
      <section
        className="bg-[#FFFFFF] text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full text-center font-extrabold font text-[24px] md:text-[48px]">
            <h2>
              Discover our suite of offerings:
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <div className="order-2 md:order-2 h-full w-full text-left">
              <div className="flex flex-col justify-center items-start mt-[40px] md:mt-[60px]">
                {insurance.map(
                  (policy, index) => (
                    <div
                      key={policy.id}
                      className={`flex flex-row justify-start w-full items-start gap-[19px] md:gap-[30px] ${index !== insurance.length - 1 ? "border-b border-[#BFBFBF] pb-[19px] pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px]" : ""}`}
                    >
                      {policy.icon}
                      <div className="flex flex-col gap-[5px] md:gap-[8px]">{policy.title}{policy.body}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="order-1 md:order-1 flex flex-row justify-center items-center md:justify-end h-full w-full rounded-[16px] md:rounded-[30px] overflow-hidden">
              <div className="relative w-full h-full min-h-[480px] md:min-h-[500px]">
                <Image
                  alt="our-advisory-approach"
                  src="/images/about-hww.avif"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
