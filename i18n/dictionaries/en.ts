// The source dictionary. Every other locale must match its shape exactly
// (same keys, same number of list items); TypeScript enforces this through the
// Dictionary type below.
//
// Text conventions:
// - **bold** marks emphasis inside a sentence.
// - {name} is replaced at render time.
// - "before / highlight / after" splits a heading around the gold brush stroke.
const en = {
  meta: {
    siteName: "Fundora",
    siteDescription: "Build. Grow. Protect. Transfer Wealth With Clarity.",
    home: { title: "Fundora", description: "Build. Grow. Protect. Transfer Wealth With Clarity." },
    about: { title: "About | Fundora", description: "Fundora is building Africa's next generation of wealthy families." },
    invest: { title: "Invest | Fundora", description: "Invest your wealth with Fundora." },
    protect: { title: "Protect | Fundora", description: "Protect your wealth with Fundora." },
    insurance: { title: "Insurance | Fundora", description: "Elevated protection, delivered with confidence." },
    programs: { title: "Programs | Fundora", description: "Explore our programs and find the right one for you." },
    download: {
      title: "Download the App | Fundora",
      description: "Get the Fundora app to open your account, invest and manage your insurance from your phone.",
    },
    contact: { title: "Contact Us | Fundora", description: "Contact us for more information." },
    faq: { title: "FAQ | Fundora", description: "Answers to common questions about Fundora, the app, investing, insurance, our programs and account security." },
    notFound: { title: "404 | Not Found", description: "This page could not be found." },
  },

  common: {
    startJourney: "Start Your Wealth Journey",
    bookConsultation: "Book a Consultation",
    speakWithAdvisor: "Speak With an Advisor",
    getTheApp: "Get the App",
    logIn: "Log in",
    newTab: "opens in a new tab",
  },

  nav: {
    home: "Fundora home",
    main: "Main",
    about: "About",
    invest: "Invest",
    insurance: "Insurance",
    programs: "Programs",
    contact: "Contact Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    changeLanguage: "Change language. Current language: {language}",
  },

  footer: {
    ctaTitle: "Let's Build Your Financial Future",
    ctaHighlight: { before: "The", highlight: "Right Way", after: "" },
    ctaBody: "Whether you're starting out or refining an existing strategy, Fundora helps you move forward with confidence.",
    customerSummaries: "Customer Relationship Summaries",
    brokerCheck: "FINRA's BrokerCheck",
    followUs: "Follow us on",
    productTitle: "Product",
    product: {
      mutualFunds: "Mutual Funds",
      stocks: "Stocks",
      fixedIncome: "Fixed Income",
      alternatives: "Alternative Investments",
      retirement: "Retirement",
      life: "Life Insurance",
      incomeProtection: "Income Protection",
      assetCoverage: "Asset & Business Coverage",
    },
    companyTitle: "Company",
    company: {
      about: "About us",
      faq: "FAQ",
      blog: "Blog",
      partner: "Partner With Us",
      affiliates: "Affiliates",
      press: "Press",
      careers: "Careers",
    },
    legalTitle: "Legal & Regulatory",
    legal: {
      policy: "Information Security Policy",
      terms: "Terms & Conditions",
      disclosures: "Disclosures",
      privacy: "Privacy Policy",
    },
    getTheApp: "Get the Fundora app",
    about:
      "Fundora is a technology-led digital investment marketplace designed for Nigerians at home and in the diaspora. We help users discover, compare, and access licensed financial products such as investments and insurance through regulated partner institutions. Fundora powers digital onboarding, wallet orchestration (ledger-only), transaction routing, and consolidated portfolio reporting, while all client funds are securely held and managed by approved custodians and providers. Fundora does not act as an asset manager, broker, or custodian.",
    followOn: "Fundora on {network}",
  },

  appDownload: {
    title: "Get the Fundora app",
    description: "Open your account, invest and manage your insurance, all from your phone.",
    close: "Close",
    qrAlt: "QR code linking to the Fundora app on Google Play",
    qrTitle: "On your computer?",
    qrBody: "Scan with your Android phone's camera to get the app on Google Play.",
    googlePlayEyebrow: "Get it on",
    appStoreEyebrow: "Download on the",
    available: "Available",
    comingSoon: "Coming Soon",
    platformApp: "{platform} app",
    unavailable: "The {platform} app isn't available to download yet.",
    unavailableSr: "the {platform} app isn't available to download yet",
    linkSr: "{platform} app, opens in a new tab",
    bannerLabel: "Get the Fundora app",
    bannerSubtitle: "Invest and insure from your phone",
    bannerCta: "Get the app",
    bannerCtaSr: "on {store}, opens in a new tab",
    bannerDismiss: "Dismiss app banner",
  },

  home: {
    heroTitle: "Build, Grow, Protect, Transfer Wealth With Clarity.",
    heroSubtitle: "Fundora is building Africa's next generation of wealthy families.",
    heroNote:
      "We guide Africans at home and abroad on investing, protecting their wealth, setting up trust funds, and creating long-term financial legacies.",
    valuesTitle: { before: "Helping Africans Everywhere Build", highlight: "Lasting Wealth", after: "" },
    values: ["Disciplined", "Ethical", "Future-focused"],
    audienceTitle: "Built For Africans Serious About Wealth",
    audienceSubtitle: "Fundora supports:",
    audience: [
      "Professionals building long-term financial security",
      "Families planning for protection and legacy",
      "Diaspora Africans navigating cross-border finances",
    ],
    frameworkTitle: "A Complete Wealth Framework",
    frameworkTabs: "Wealth framework",
    framework: [
      {
        title: "Invest",
        description: "Grow your capital through structured, research-driven investment solutions.",
        items: ["Mutual Funds", "Stocks & Fixed Income Instruments", "Alternative Investments"],
        cta: "Explore Investing",
        imageAlt: "A rising green investment chart",
      },
      {
        title: "Protect",
        description: "Safeguard your income, assets, and future.",
        items: ["Life & Health Insurance", "Income Protection", "Asset & Business Coverage"],
        cta: "Explore Protection",
        imageAlt: "A protective shield",
      },
      {
        title: "Advisory",
        description: "Get personalized guidance for complex financial decisions.",
        items: ["Financial Consultation", "Private Wealth Advisory", "Business & Strategy Support"],
        cta: "Speak With an Advisor",
        imageAlt: "An advisor's desk",
      },
    ],
    calmTitle: "Calm Strategy Beats Loud Advice",
    calmSubtitle: "We believe wealth is built through:",
    calm: ["Disciplined execution", "Long-term perspective", "Risk awareness", "Clear thinking"],
    supportTitle: "Structured Support At Every Level",
    support: [
      { title: "FACAP", body: "Comprehensive financial planning" },
      { title: "Private Wealth Advisory", body: "Bespoke strategy for high-net-worth clients" },
      { title: "Consultations", body: "Focused clarity for key decisions" },
      { title: "Business Consulting", body: "Financial structure for growth" },
    ],
    leadershipTitle: "Leadership Highlight",
    leadershipSubtitle: "Led by experience, integrity, and vision:",
    leaderName: "Dr. Seyi Abiodun",
    leaderRole: "Founder & Chief Wealth Strategist",
    leaderBody:
      "Fundora is led by Dr. Seyi Abiodun, a seasoned financial professional committed to helping Africans build and protect wealth responsibly. You’re guided, not sold to.",
    leaderCta: "Meet Our Leadership",
    leaderAlt: "Dr. Seyi Abiodun, Founder of Fundora",
  },

  about: {
    heroTitle: "Fundora Is Building Africa's Next Generation Of Wealthy Families.",
    heroSubtitle:
      "Fundora is a professional wealth advisory firm helping Africans build, grow, protect, and transfer wealth with discipline and long-term thinking.",
    heroNote:
      "We guide Africans at home and abroad on investing, protecting their wealth, setting up trust funds, and creating long-term financial legacies.",
    philosophyEyebrow: "Our Philosophy",
    philosophyTitle: "Wealth Should Feel Calm, Not Chaotic",
    philosophySubtitle: "We believe:",
    philosophyAlt: "A vault holding a gold Naira coin",
    philosophy: [
      "Wealth is built intentionally, not accidentally",
      "Good advice should reduce anxiety, not increase it",
      "Long-term thinking always outperforms quick wins",
    ],
    missionEyebrow: "Our Mission",
    missionTitle: "To Create Africa’s Next Generation Of Wealthy Families.",
    missionSubtitle: "Fundora exists to turn African income into enduring wealth through:",
    mission: [
      "World-class financial education",
      "Strategic investment guidance",
      "Robust wealth and risk protection",
      "Multi-generational wealth planning",
    ],
    visionEyebrow: "Our Vision",
    visionTitle: {
      before: "To Become The Trusted",
      highlight: "Wealth Partner",
      after: "Behind Africa’s First Million-Dollar, Globally Connected, Financially Independent Families",
    },
    howTitle: "How We Work",
    howEyebrow: "Our Advisory Approach",
    howSubtitle: "Every Fundora relationship is guided by four principles:",
    howAlt: "A Fundora advisor reviewing a client plan",
    principles: [
      { title: "Clarity First", body: "We simplify complexity before recommending action." },
      { title: "Structure Always", body: "Every plan is system-based, not emotional." },
      { title: "Protection Matters", body: "We plan for uncertainty, not just growth." },
      { title: "Long-Term Thinking", body: "We focus on sustainability, not speculation." },
    ],
    leadershipTitle: "Leadership You Can Trust",
    leadershipSubtitle: "Led by experience, integrity, and vision:",
    followLeader: "Follow Dr. Seyi Abiodun",
    leaderOn: "Dr. Seyi Abiodun on {network}",
    leaderBio: [
      "Dr. Seyi Abiodun is a financial strategist with deep experience advising individuals, families, and businesses on wealth building, protection, and long-term planning.",
      "He is known for his calm, structured approach to finance, helping clients think clearly, act wisely, and plan responsibly. At Fundora, advice is never rushed. Clients are guided, not pressured.",
    ],
  },

  invest: {
    heroTitle: "Invest With Clarity, Not Guesswork",
    heroSubtitle: "Grow your money using structured, long-term investment strategies.",
    heroNote:
      "At Fundora, investing is not about chasing trends or timing markets. It’s about building wealth deliberately, using vehicles that match your goals, timeline, and risk tolerance.",
    productsTitle: "Stocks & Market Investments",
    productsCta: "Start Investing",
    products: [
      { title: "US Stocks", body: "Buy shares in U.S. companies." },
      { title: "Nigerian Stocks", body: "Buy shares in local companies." },
      { title: "Treasury Bills", body: "Invest in government Treasury Bills." },
      { title: "Naira Savings", body: "Earn up to 16% per annum." },
      { title: "Fixed Returns", body: "Earn up to 6% dollar returns." },
      { title: "Managed Portfolio", body: "Let an expert manage your funds." },
    ],
  },

  protect: {
    heroTitle: "Wealth grows faster when it is properly protected",
    heroSubtitle: "Protecting your income, family, and assets gives your wealth plan strength and resilience.",
    heroNote: "At Fundora, protection is not about fear. It’s about responsibility, foresight, and peace of mind.",
  },

  insurance: {
    heroTitle: "Elevated Protection, Delivered with Confidence.",
    heroSubtitle:
      "At Fundora Insure Partnering Insuretech Limited, we redefine insurance as a seamless, intelligent experience, designed around you.",
    heroCta: "Choose an Insurance Plan",
    redefiningTitle: "Redefining Insurance",
    redefining: [
      "With the strength of our trusted partnership, accessing reliable, high-quality coverage becomes faster, clearer, and entirely effortless.",
      "Whether it’s safeguarding your vehicle, securing your future, or ensuring peace of mind while you travel, our solutions are tailored to protect what matters most, with flexibility and precision.",
    ],
    offeringsTitle: "Discover our suite of offerings:",
    offerings: [
      { title: "Motor Insurance", body: "Drive with confidence. We've got you covered.", imageAlt: "Motor insurance coverage" },
      { title: "Life Insurance", body: "Protect the people who matter most.", imageAlt: "Life insurance planning" },
      { title: "Travel Insurance", body: "Travel confidently with reliable protection.", imageAlt: "Travel insurance protection" },
      { title: "And More...", body: "Discover coverage for every need.", imageAlt: "Additional insurance offerings" },
    ],
    carouselLabel: "Insurance offerings",
    showSlide: "Show {item}",
  },

  programs: {
    heroTitle: "Structured Guidance For Every Stage Of Wealth",
    heroSubtitle:
      "Different seasons require different levels of support. Fundora offers clearly defined programs designed to meet you exactly where you are and guide you forward with structure and clarity.",
    heroNote: "Whether you’re starting, growing, or refining your financial life, there is a program built for you.",
    facapTitle: "FACAP",
    facap: [
      "Finance and Career Accountability Program (FACAP) is a comprehensive financial planning experience for individuals and families who want full visibility and control over their financial lives.",
      "This program brings all key areas together (income, investing, protection, and long-term planning) into one clear structure.",
    ],
    facapAlt: "A FACAP session with participants reviewing their plans",
    idealTitle: "FACAP is Ideal if You Want:",
    ideal: [
      "A clear understanding of financial planning",
      "To understand how to invest in stocks and fixed income instruments as a beginner",
    ],
    idealCta: "Register for the next FACAP cohort",
    frameworkTitle: "Our FACAP Wealth Framework",
    offerings: [
      {
        title: "Consultation",
        body: "Not every situation requires a long-term program. Sometimes, you need one clear conversation to make the right next move.",
        items: [
          "Investment decisions",
          "Insurance or protection questions",
          "Cross-border financial concerns",
          "Career, income, or transition planning",
        ],
        cta: "Book a Consultation",
        imageAlt: "A consultation between an advisor and a client",
      },
      {
        title: "Private Wealth Advisory",
        body: "Private Wealth Advisory is designed for clients with complex financial lives who need custom strategy, discretion, and long-term oversight.",
        items: [
          "Personalized investment strategy",
          "Asset allocation and diversification planning",
          "Risk and protection integration",
          "Wealth preservation and legacy planning",
        ],
        cta: "Request Private Advisory",
        imageAlt: "A private wealth advisor in a meeting",
      },
      {
        title: "Business Consulting",
        body: "Financial clarity for founders and business owners.",
        items: [
          "Financial structure and planning",
          "Cash-flow clarity",
          "Risk and continuity thinking",
          "Strategic decision support",
        ],
        cta: "Book a Business Consultation",
        imageAlt: "Two business owners reviewing figures together",
      },
    ],
    chooseEyebrow: "How to Choose the Right Program",
    chooseTitle: "Start with clarity",
    chooseSubtitle: "If you’re unsure where to begin:",
    choose: [
      "Choose **Consultation** for immediate clarity",
      "Choose **FACAP** for full personal financial structure",
      "Choose **Private Wealth Advisory** for bespoke, long-term guidance",
      "Choose **Business Consulting** for enterprise-focused support",
    ],
  },

  download: {
    title: "Your wealth, in your pocket.",
    body: "Get the Fundora app to open your account, invest and manage your insurance from your phone.",
    highlights: [
      "Invest in mutual funds, stocks and fixed income",
      "Buy and manage your insurance cover",
      "Track your whole portfolio in one place",
    ],
    chooseStore: "Choose your store",
  },

  contact: {
    title: "Contact Us",
    subtitle: "Have a question about investing, insurance or our programs? Speak with an advisor, or get started in the Fundora app.",
    consultTitle: "Speak with an advisor",
    consultBody: "Book a 30-minute consultation at a time that suits you.",
    appTitle: "Get started in the app",
    appBody: "Open your account, invest and manage your insurance from your phone.",
    faqPrompt: "Looking for a quick answer?",
    faqLink: "Read our FAQ",
  },

  notFound: {
    message: "This page could not be found.",
    home: "Go Home",
  },

  legal: {
    company: "Fundora Technologies Ltd",
    effectiveDate: "Effective Date:",
    version: "Version:",
    contents: "Contents",
    sections: "{title} sections",
    email: "Email:",
    address: "Address:",
    phone: "Phone number:",
    approvedBy: "Approved by",
    board: "Board of Directors",
    // Shown above translated legal documents only.
    translationNotice:
      "This translation is provided for convenience. If it differs from the English version, the English version prevails.",
    readEnglish: "Read the English version",
  },
} as const;

export default en;

// Turns the literal types of the English source into plain strings while
// keeping object keys and tuple lengths, so translations can say anything but
// must cover everything.
type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof en>;
