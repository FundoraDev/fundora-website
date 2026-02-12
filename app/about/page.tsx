import Link from "next/link";
import Image from "next/image";
import { ChoosePWAIcon, ClarityFirstIcon, GoldBrushSwipe2, GoodAdviceIcon, LongTermIcon, LongTermPerspectiveIcon, LongTermThinkingIcon, MultiGenerationalIcon, ProtectionMattersIcon, StructureAlwaysIcon, WealthIsBuiltIcon, WorldClassIcon } from "../components/svg";

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
      icon: <MultiGenerationalIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10" />
    },

  ];

  const ourPhilosophy = [
    {
      id: "wealth-is-built",
      icon: <WealthIsBuiltIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />,
      text: <p className="font-semibold text-[18px] md:text-[24px]">Wealth is built intentionally, <br /> not accidentally</p>
    },
    {
      id: "good-advice",
      icon: <GoodAdviceIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />,
      text: <p className="font-semibold text-[18px] md:text-[24px]">Good advice should reduce anxiety,<br /> not increase it</p>
    },
    {
      id: "long-term",
      icon: <LongTermIcon className="w-10 h-10 sm:w-10 sm:h-15 md:w-15 md:h-10 lg:w-20 lg:h-20" />,
      text: <p className="font-semibold text-[18px] md:text-[24px]">Long-term thinking always <br /> outperforms quick wins</p>
    },
  ]

  const howWeWork = [
    {
      id: "clarity-first",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Clarity First</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        We simplify complexity before <br /> recommending action.
      </p>,
      icon: <ClarityFirstIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "structure-always",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Structure Always</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        Every plan is system-based, not <br /> emotional.
      </p>,
      icon: <StructureAlwaysIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "protection-matters",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Protection Matters</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        We plan for uncertainty, not <br /> just growth.
      </p>,
      icon: <ProtectionMattersIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    },
    {
      id: "long-term",
      title: <p className="text-black text-[16px] md:text-[28px] font-extrabold font-satoshi">Long-Term Thinking</p>,
      body: <p className="text-[#474D66] text-normal text-[14px] md:text-[22px]">
        We focus on sustainability, not <br /> speculation.
      </p>,
      icon: <LongTermThinkingIcon className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20" />
    }
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <style dangerouslySetInnerHTML={{
        __html: `
        .home-hero-bg {
          background-image: url('/images/about-hero-mb.avif');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .home-hero-bg {
            background-image: url('/images/about-hero-dk.avif');
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
              Fundora Is Building
              <br />
              Africa's Next Generation
              <br />
              Of Wealthy Families.
            </h1>
            <h1 className="font-satoshi block md:hidden text-[40px] leading-tight sm:text-[40px] md:text-[48px] lg:text-[54px] font-extrabold">
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
                href="#"
                className="sm:w-auto text-center w-full rounded-[36px] bg-[#F9FAFC] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Start Your Wealth Journey
              </Link>
              <Link
                href="https://calendly.com/seyi-fundorahq/30min"
                target="_blank"
                className="sm:w-auto w-full text-center rounded-[36px] bg-gradient-to-r from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F] px-6 py-3 text-sm font-semibold text-black shadow-md hover:brightness-110 transition"
              >
                Book a Consultation
              </Link>
            </div>
            <p className="text-center md:text-left max-w-xl text-[11px] md:text-[16px] font-extralight md:font-light text-gray-200">We guide Africans at home and abroad on investing, <br /> protecting their wealth, setting up trust funds, and <br /> creating long-term financial legacies.</p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section
        className="bg-[#FFFFFF] text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full text-center leading-tight tracking-[5px] font-bold font text-[16px] md:text-[28px]"><h2>OUR PHILOSOPHY</h2></div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <div className="order-1 md:order-none">
              <h3 className="font-satoshi text-[24px] md:text-[56px] leading-tight tracking-tight font-extrabold capitalize mb-[12px] md:mb-[16px]">
                Wealth should <br /> feel calm, not <br /> chaotic
              </h3>
              <p className="text-[16px] md:text-[24px] font-normal mb-[12px] md:mb-[19px] text-[#808080]">
                We believe:
              </p>
            </div>
            <div className="order-2 md:order-none flex flex-row justify-center items-center md:justify-center">
              <Image
                alt="FACAP"
                src="/images/our-philosophy-vault.avif"
                width={345}
                height={321}
                className="h-auto w-auto"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[20px] md:gap-[20px]">
            {
              ourPhilosophy.map((philosophy) => (
                <div key={philosophy.id} className="flex flex-col items-start justify-center gap-[22px]">
                  {philosophy.icon}
                  {philosophy.text}
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-8xl px-4 py-12 md:px-6 md:py-16 space-y-10 text-center">
          <h2 className="text-black font-bold text-[16px] md:text-[28px] uppercase tracking-[5px]">Our Mission</h2>
          {/* Africa's next generation */}
          <div
            className="flex flex-col md:justify-center md:items-start gap-8 rounded-[20px] md:rounded-[60px] bg-black p-6 md:p-8 md:bg-left overflow-hidden bg-[url('/images/our-mission-africa-mb.avif')] bg-cover bg-no-repeat !bg-[length:190px] !bg-[position:right_60%] md:bg-[url('/images/our-mission-africa.avif')] md:!bg-[length:300px] md:!bg-[position:top_15%_right_10%]"
          >
            <div className="md:flex flex-col justify-center items-start md:items-start w-full space-y-4">
              <div className="flex flex-col text-[32px] leading-tight tracking-tight font-bold justify-center items-start w-full md:w-auto md:justify-start text-left md:text-left md:text-[52px] text-white gap-[16px] mb-[50px]">
                <p className="font-satoshi leading-tighter font-extrabold capitalize">
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

      {/* Our Vision */}
      <section
        className="bg-[#FFFFFF] text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full text-center font-bold font text-[16px] md:text-[28px] tracking-[5px]">
            <h2>
              Our Vision
            </h2>
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <h3 className="font-satoshi text-[32px] md:text-[40px] lg:text-[60px] leading-tight tracking-tight font-extrabold mb-[12px] text-center md:mb-[16px] capitalize">
              To become the trusted <br className="hidden md:block" />{" "}
              <span className="relative z-10 isolate inline-flex items-center justify-center px-4 py-1">
                <span className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
                  <GoldBrushSwipe2 className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-auto max-w-full" />
                </span>
                <span className="relative z-10 text-black">wealth partner</span>
              </span>{" "}
              behind <br className="hidden md:block" /> Africa’s first million-dollar, <br className="hidden md:block" /> globally connected, <br className="hidden md:block" /> financially independent <br className="hidden md:block" /> families
            </h3>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section
        className="bg-[#F5F5F5] text-black"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-col md:items-center justify-center md:gap-12 md:px-6 lg:pb-20 lg:pt-14">
          <div className="w-full text-center font-extrabold font text-[24px] md:text-[48px]">
            <h2>
              How We Work
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-[10px] md:gap-[24px] gap-[23px] md:gap-[117px]">
            <div className="order-2 md:order-2 h-full w-full text-left">
              <p className="font-satoshi text-[20px] md:text-[32px] leading-tight tracking-tight font-bold mb-[12px] md:mb-[16px] uppercase">
                Our advisory <br /> approach
              </p>
              <p className="text-[16px] md:text-[24px] font-normal mb-[12px] md:mb-[19px] text-[#808080]">
                Every Fundora  relationship is <br className="md:hidden block" /> guided <br className="hidden md:block" /> by four principles:
              </p>
              <div className="flex flex-col justify-center items-start mt-[40px] md:mt-[60px]">
                {howWeWork.map(
                  (work, index) => (
                    <div
                      key={work.id}
                      className={`flex flex-row justify-start w-full items-start gap-[19px] md:gap-[30px] ${index !== howWeWork.length - 1 ? "border-b border-[#BFBFBF] pb-[19px] pb-[24px] mb-[24px] md:pb-[40px] md:mb-[40px]" : ""}`}
                    >
                      {work.icon}
                      <div className="flex flex-col gap-[5px] md:gap-[8px]">{work.title}{work.body}</div>
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

      {/* Leadership You Can Trust */}
      <section className="bg-white">
        <div className="px-4 py-10 md:px-0 md:py-14">
          <div className=" mb-[34px] md:mb-[60px] mx-auto lg:max-w-7xl px-4 md:px-6">
            <h2 className="font-satoshi mb-1 text-left text-[24px] leading-7 md:leading-[1.1] font-extrabold md:mb-3 md:text-[56px] capitalize">
              Leadership You <br /> Can trust
            </h2>
            <div>
              <p className="text-[#808080] text-[16px] leading-6 font-normal md:text-[24px]">
                Led by experience, <br className="md:hidden block" /> integrity, and vision:
              </p>
            </div>
          </div>
          <div className="grid gap-[29px] grid-cols-1 md:grid-cols-2 md:gap-[10px] lg:gap-[35px] md:pl-6 lg:mx-auto lg:max-w-6xl">
            {/* Image first on small screens, second on md+ */}
            <div className="order-1 md:order-2">
              <Image
                src="/images/seyi-abiodun.avif"
                alt="Fundora leadership portrait"
                width={672}
                height={554}
                className="w-full h-full object-cover rounded-[80px]"
              />
            </div>
            <div className="flex flex-col md:mx-auto items-start justify-center gap-[24px] md:gap-[60px] md:py-20 order-2 md:order-1">
              <div>
                <h3 className="font-satoshi text-[16px] font-bold md:text-[32px] tracking-[12%] mb-1 md:mb-0.5">DR. Seyi Abiodun</h3>
                <p className="text-[16px] md:text-[20px] text-[#696F8C] font-normal text-[#696F8C]">Founder &amp; Chief Wealth Strategist</p>
              </div>
              <div className="flex flex-col gap-[20px] md:gap-[40px]">
              <p className="text-[16px] md:text-[24px] font-semibold">
                Dr. Seyi Abiodun is a financial strategist <br className="hidden md:block"/> with deep experience advising individuals, <br className="hidden md:block"/> families, and businesses on wealth <br className="hidden md:block"/> building, protection, and long-term <br className="hidden md:block"/> planning.
              </p>
              <p className="text-[16px] md:text-[24px] font-semibold">
                He is known for his calm, structured <br className="hidden md:block"/> approach to finance, helping clients think <br className="hidden md:block"/> clearly, act wisely, and plan responsibly. At <br className="hidden md:block"/> Fundora, advice is never rushed. Clients are <br className="hidden md:block"/> guided, not pressured.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
