import Link from "next/link";
import { ChoosePWAIcon, LongTermPerspectiveIcon, MultiGenerationalIcon, WorldClassIcon } from "../components/svg";

export default function About() {

  const ourMission = [
    {
      id: "world-class",
      body: <p>World-class financial <br className="md:hidden block" /> <br className="hidden md:block" /> education</p>,
      icon: <WorldClassIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "strategic-investment",
      body: <p>Strategic investment <br className="md:hidden block" /> <br className="hidden md:block" /> guidance</p>,
      icon: <LongTermPerspectiveIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "robust-wealth",
      body: <p>Robust wealth and <br className="md:hidden block" /> <br className="hidden md:block" /> risk protection</p>,
      icon: <ChoosePWAIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
    },
    {
      id: "business",
      body: <p>Multi-generational <br className="md:hidden block" /> <br className="hidden md:block" /> wealth planning</p>,
      icon: <MultiGenerationalIcon className="w-20 h-10 sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-20 lg:h-10" />
    },

  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/about-hero-mb.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/about-hero-dk.png');
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
              Fundora Is Building
              <br />
              Africa's Next Generation
              <br />
              Of Wealthy Families.
            </h1>
            <h1 className="block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold">
              Fundora Is
              <br />
              Building Africa's
              <br />
              Next Generation <br />
              Of Wealthy <br />
              Families.
            </h1>
            <p className="hidden md:block max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Fundora is a professional wealth advisory firm helping <br /> Africans build, grow, protect, and transfer wealth with <br /> discipline and long-term thinking.
            </p>
            <p className="block md:hidden max-w-xl text-[14px] md:text-[24px] font-normal text-gray-200">
              Fundora is a professional wealth advisory <br /> firm helping Africans build, grow, protect, <br /> and transfer wealth with discipline and long- <br />term thinking.
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
      </section>

      {/* Our Mission */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-8xl px-4 py-12 md:px-6 md:py-16 space-y-10 text-center">
          <h2 className="text-black font-bold text-[16px] md:text-[28px] uppercase">Our Mission</h2>
          {/* Africa's next generation */}
          <div
            className="flex flex-col md:justify-center md:items-start gap-8 rounded-[20px] md:rounded-[60px] bg-black p-6 md:p-8 md:bg-left overflow-hidden bg-[url('/images/our-mission-africa-mb.png')] bg-cover bg-no-repeat !bg-[length:190px] !bg-[position:right_60%] md:bg-[url('/images/our-mission-africa.png')] md:!bg-[length:300px] md:!bg-[position:top_15%_right_10%]"
          >
            <div className="md:flex flex-col justify-center items-start md:items-start w-full space-y-4">
              <div className="flex flex-col text-[32px] leading-tight tracking-tight font-bold justify-center items-start w-full md:w-auto md:justify-start text-left md:text-left md:text-[52px] text-white gap-[16px] mb-[50px]">
                <p className="leading-tighter">
                  To create Africa’s <br className="md:hidden block" /> next <br className="hidden md:block" /> generation <br className="md:hidden block" /> of wealthy <br className="md:hidden block" /> <br className="hidden md:block" /> families.
                </p>
                <p className="text-[16px] md:text-[22.38px] font-normal tracking-normal">
                  Fundora exists to turn African income <br className="md:hidden block" /> into enduring <br className="hidden md:block" /> wealth through:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full mt-4 gap-4 md:gap-6 lg:gap-8 text-xs text-white">
                {ourMission.map((strategy) => (
                  <div
                    key={strategy.id}
                    className="flex flex-col items-start text-left md:text-left justify-center gap-3 md:gap-4 min-h-[131px] md:min-h-0 font-semibold text-[14px] md:text-[20px] lg:text-[24px]"
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
