import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <p className="max-w-xl text-[14px] md:text-[24px] font-medium text-gray-200">
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
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 lg:pb-20 lg:pt-14 bg-black flex flex-col items-center justify-center flex-wrap gap-6 pt-4 text-xs text-gray-300 text-center">
          <h3 className="text-white text-center md:text-left text-[20px] md:text-[24px] lg:text-[32px] font-semibold md:text-2xl font-semibold">Helping Africans Everywhere Build Lasting Wealth</h3>
        </div>
      </section>


      {/* Built For People Serious About Wealth */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="mb-6 text-center text-xl font-semibold md:mb-8 md:text-2xl">
            Built For People Serious About Wealth
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Clarity",
                body: "Understand exactly where you stand today and what it takes to get where you want to go.",
              },
              {
                title: "Control",
                body: "Structure your cash flow, savings, and investing so every dollar has a clear purpose.",
              },
              {
                title: "Confidence",
                body: "Move forward with a strategy that adapts as your life and goals evolve.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-black/5 bg-gradient-to-b from-[#111111] via-[#272727] to-black px-5 py-6 text-white shadow-sm"
              >
                <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-[#C3A346] via-[#FEEF9C] to-[#C7AB4F]" />
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-200">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Dynamic Wealth Framework */}
      <section className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="mb-8 text-center text-xl font-semibold md:text-2xl">
            A Dynamic Wealth Framework
          </h2>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            {/* Invest */}
            <div className="rounded-3xl bg-white p-6 shadow-sm md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                Invest
              </div>
              <h3 className="mb-3 text-lg font-semibold">Grow What You&apos;ve Built</h3>
              <p className="mb-5 text-sm text-zinc-700">
                Sophisticated, yet accessible investing built around risk, time horizon, and what you
                actually need your money to do.
              </p>
              <button className="rounded-[999px] border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition">
                Explore Investing
              </button>
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-black p-6">
              <div className="relative h-[220px] w-full max-w-[260px] overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-500 to-emerald-900">
                {/* Placeholder graph; can be replaced with provided image later */}
              </div>
            </div>

            {/* Protect */}
            <div className="order-2 flex items-center justify-center rounded-3xl bg-black p-6 lg:order-1">
              <div className="relative h-[220px] w-full max-w-[260px] overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-500 to-emerald-900">
                {/* Placeholder shield / check; hook up SVG later */}
              </div>
            </div>
            <div className="order-1 rounded-3xl bg-white p-6 shadow-sm md:p-7 lg:order-2">
              <div className="mb-4 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                Protect
              </div>
              <h3 className="mb-3 text-lg font-semibold">Protect What Matters Most</h3>
              <p className="mb-5 text-sm text-zinc-700">
                Insurance and risk strategies designed to shield your income, family, and assets from
                what you can&apos;t predict.
              </p>
              <button className="rounded-[999px] border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition">
                Explore Protection
              </button>
            </div>

            {/* Accomplish */}
            <div className="rounded-3xl bg-white p-6 shadow-sm md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                Accomplish
              </div>
              <h3 className="mb-3 text-lg font-semibold">Align Money With Your Life</h3>
              <p className="mb-5 text-sm text-zinc-700">
                A planning approach that turns vague goals into clear milestones, with a roadmap and
                accountability to get there.
              </p>
              <button className="rounded-[999px] border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition">
                Explore Planning
              </button>
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-black p-6">
              <div className="relative h-[220px] w-full max-w-[260px] overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-500 to-emerald-900">
                {/* Placeholder hands / partnership image to be wired later */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calm Strategy, Structured Support, Leadership Highlights */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 space-y-10">
          {/* Calm Strategy block */}
          <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-[#111111] via-[#050505] to-black p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEEF9C]">
                Calm Strategy
              </p>
              <h3 className="text-xl font-semibold md:text-2xl">
                A Partner Focused On Every Side Of Your Wealth
              </h3>
              <p className="text-sm text-gray-200">
                From everyday decisions to multi-decade planning, Fundora brings structure to your
                investing, protection, and planning—so you can move with confidence instead of noise.
              </p>
              <div className="mt-4 grid gap-4 text-xs sm:grid-cols-3">
                <div>
                  <p className="font-semibold text-white">Dedicated advisory</p>
                  <p className="text-gray-300">One-on-one relationships, not call centers.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Institutional research</p>
                  <p className="text-gray-300">Sophisticated thinking for individual investors.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Holistic perspective</p>
                  <p className="text-gray-300">Investments, insurance, and cash flow in one view.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[200px] w-[200px] rounded-full bg-gradient-to-b from-[#FEEF9C] via-[#C3A346] to-[#7b5b12]" />
            </div>
          </div>

          {/* Structured Support */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl bg-white p-6 text-black md:p-7">
              <h3 className="text-lg font-semibold">Structured Support At Every Level</h3>
              <div className="grid gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-2xl border border-black/5 bg-[#0b0b0b] p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEEF9C]">
                    Everyday
                  </p>
                  <p className="mt-2 font-semibold">Guided Cash Management</p>
                  <p className="mt-1 text-xs text-gray-200">
                    Organize income, bills, and saving so your month has a clear structure.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-[#0b0b0b] p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEEF9C]">
                    Advisory
                  </p>
                  <p className="mt-2 font-semibold">Private Wealth Advisory</p>
                  <p className="mt-1 text-xs text-gray-200">
                    Deeper planning, portfolio design, and coordinated execution.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-[#0b0b0b] p-4 text-white sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FEEF9C]">
                    Strategy
                  </p>
                  <p className="mt-2 font-semibold">Executive &amp; Business Solutions</p>
                  <p className="mt-1 text-xs text-gray-200">
                    Support for equity comp, business owners, and complex balance sheets.
                  </p>
                </div>
              </div>
              <Link
                href="/programs"
                className="inline-flex rounded-[999px] bg-black px-5 py-2 text-xs font-semibold text-white hover:bg-zinc-900 transition"
              >
                View Programs
              </Link>
            </div>

            {/* Leadership highlight */}
            <div className="rounded-3xl bg-white p-6 text-black md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Leadership Highlight
              </p>
              <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Meet Your Wealth Partner</h3>
                  <p className="text-sm text-zinc-700">
                    Experienced leadership that has guided clients through bull markets, bear markets,
                    and everything in between—focused on building durable, real-world plans.
                  </p>
                  <p className="pt-3 text-sm font-semibold">[Advisor Name]</p>
                  <p className="text-xs text-zinc-600">
                    Founder &amp; Lead Wealth Strategist, Fundora
                  </p>
                </div>
                <div className="relative h-[220px] overflow-hidden rounded-3xl bg-zinc-100">
                  <Image
                    src="/images/home-leadership.jpg"
                    alt="Fundora leadership portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
