// Frequently asked questions. Answers only state what the site and the legal
// documents already say; check with the team before adding anything new
// (fees, limits, regulators). Each answer is a list of paragraphs; **bold**
// and [text](/path) links work inside them.

const faq = {
  title: "Frequently Asked Questions",
  intro: "Quick answers about Fundora, the app, investing, insurance, our programs and keeping your account safe.",
  jumpTo: "Jump to a topic",
  stillTitle: "Still have a question?",
  stillBody: "Speak with an advisor, or get started in the Fundora app.",
  groups: [
    {
      id: "about",
      title: "About Fundora",
      items: [
        {
          q: "What is Fundora?",
          a: [
            "Fundora is a technology-led digital investment marketplace designed for Nigerians at home and in the diaspora. We help you discover, compare and access licensed financial products, such as investments and insurance, through regulated partner institutions.",
            "Alongside the app, Fundora offers guidance through consultations, our FACAP program, Private Wealth Advisory and Business Consulting.",
          ],
        },
        {
          q: "Who is Fundora for?",
          a: [
            "Fundora is built for Africans who are serious about wealth: professionals building long-term financial security, families planning for protection and legacy, and Africans in the diaspora managing their finances across borders.",
          ],
        },
        {
          q: "Does Fundora hold my money?",
          a: [
            "No. Fundora does not act as an asset manager, broker or custodian. All client funds are held and managed by approved custodians and providers.",
            "Fundora runs the technology around them: digital onboarding, wallet orchestration (ledger only), transaction routing and consolidated portfolio reporting.",
          ],
        },
        {
          q: "Who leads Fundora?",
          a: [
            "Fundora is led by Dr. Seyi Abiodun, our Founder and Chief Wealth Strategist. You can read more about him on our [About page](/about#leadership).",
          ],
        },
      ],
    },
    {
      id: "app",
      title: "Getting started with the app",
      items: [
        {
          q: "How do I open an account?",
          a: [
            "Download the Fundora app and complete the onboarding process. You may be asked for personal identification details, contact information and verification documents, and financial information where required.",
            "Fundora verifies this information through approved verification providers, so please make sure everything you provide is accurate.",
          ],
        },
        {
          q: "Is the Fundora app available on iPhone?",
          a: [
            "The Android app is available now on **Google Play**. The iPhone app is coming soon to the App Store. You can find both on our [download page](/download).",
          ],
        },
        {
          q: "What is the Fundora virtual account?",
          a: [
            "Once your onboarding is complete, Fundora may create a personalized virtual account for you through one of the commercial banks in Nigeria. It's used to fund your investment selections, record your transactions and process payments.",
            "The virtual account is not necessarily a traditional bank account unless this is expressly stated.",
          ],
        },
        {
          q: "Does Fundora charge fees?",
          a: [
            "Fundora may charge fees for certain services. Any fee that applies is shown to you before you complete a transaction, so you always know the cost before you go ahead.",
          ],
        },
      ],
    },
    {
      id: "investing",
      title: "Investing",
      items: [
        {
          q: "What can I invest in?",
          a: [
            "Through the app you can access US stocks, Nigerian stocks, Treasury Bills, Naira savings, fixed-return products and managed portfolios, as well as mutual funds and alternative investments. See our [Invest page](/invest) for more.",
          ],
        },
        {
          q: "Are returns guaranteed?",
          a: [
            "No. All investments carry risk. The value of an investment can go down as well as up, and you may lose part or all of the money you invest. Past performance does not guarantee future results.",
            "Rates such as “up to 16% per annum” describe what a product can earn, not a promise. Please review each product's information before you invest.",
          ],
        },
        {
          q: "Who provides the investment products?",
          a: [
            "Investment products on the platform are provided by third-party institutions and approved investment partners. They may have their own terms and conditions, risk disclosures and investment documents, which you should read before investing.",
          ],
        },
        {
          q: "Does Fundora give investment advice?",
          a: [
            "Information in the app is general and is not personal advice. Your investment decisions remain your own.",
            "If you'd like personal guidance, you can [book a consultation](/contact-us) with an advisor or explore our [programs](/programs).",
          ],
        },
      ],
    },
    {
      id: "insurance",
      title: "Insurance",
      items: [
        {
          q: "What insurance can I get through Fundora?",
          a: [
            "Fundora offers motor insurance, life insurance and travel insurance, with more cover available. Our insurance is offered through Fundora Insure Partnering Insuretech Limited. See our [Insurance page](/insurance).",
          ],
        },
        {
          q: "How do I buy or manage my cover?",
          a: ["You can choose a plan, buy cover and manage your insurance in the Fundora app."],
        },
      ],
    },
    {
      id: "programs",
      title: "Programs and advisory",
      items: [
        {
          q: "What is FACAP?",
          a: [
            "The Finance and Career Accountability Program (FACAP) is a comprehensive financial planning experience for individuals and families who want full visibility and control over their financial lives. It brings income, investing, protection and long-term planning together into one clear structure.",
          ],
        },
        {
          q: "How do I join the next FACAP cohort?",
          a: ["You can register for the next cohort from our [Programs page](/programs)."],
        },
        {
          q: "Which program is right for me?",
          a: [
            "Choose **Consultation** for immediate clarity on a specific decision, **FACAP** for a full personal financial structure, **Private Wealth Advisory** for bespoke, long-term guidance, and **Business Consulting** for enterprise-focused support.",
            "If you're unsure, a consultation is a good place to start.",
          ],
        },
        {
          q: "How do I book a consultation?",
          a: [
            "You can book a 30-minute consultation online at a time that suits you. Use any **Book a Consultation** button on the site, or visit our [Contact page](/contact-us).",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Security and privacy",
      items: [
        {
          q: "How is my account protected?",
          a: [
            "Fundora protects your account with two-factor authentication, biometric verification such as fingerprint authentication where your device supports it, encryption (including Tremble Vault technology), access controls and security monitoring.",
            "Please keep your login details private, and tell us immediately if you think someone else has accessed your account.",
          ],
        },
        {
          q: "Does Fundora sell my data?",
          a: [
            "No. Fundora does not sell customers' personal information. We share information only with partners that help us provide the service, such as investment, payment and verification providers, or with regulators where the law requires it. Our [Privacy Policy](/privacy) explains this in full.",
          ],
        },
        {
          q: "How do I delete my account?",
          a: [
            "You can delete your account in the Fundora app under **Settings → Delete Account**. Please withdraw your wallet balance and exit your investments first, because deletion is immediate and can't be undone.",
            "Our Privacy Policy explains [each step and what happens to your data](/privacy#account-deletion).",
          ],
        },
      ],
    },
  ],
} as const;

export default faq;

type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Faq = Widen<typeof faq>;
