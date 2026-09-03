import { Metadata } from "next";
import LegalPageLayout, { LegalContactFooter, LegalSection } from "../components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Fundora - Terms and Conditions",
  description:
    "Terms and Conditions governing access and use of the Fundora Technologies Ltd platform and services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By creating an account, accessing the Platform, or using any Services, you confirm that:
        </p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>you have read and understood these Terms;</li>
          <li>you agree to comply with all applicable laws and regulations;</li>
          <li>all information provided by you is accurate, complete and current; and</li>
          <li>you accept responsibility for your use of the Platform.</li>
        </ol>
        <p className="mt-4">
          If you do not agree to these Terms, you must discontinue use of the Platform.
        </p>
      </>
    ),
  },
  {
    id: "about-fundora",
    title: "2. About Fundora",
    content: (
      <>
        <p>
          Fundora provides a technology-enabled platform that connects customers with investment
          opportunities and facilitates access to investment products made available through approved
          investment partners.
        </p>
        <p className="mt-4">
          Fundora acts as an intermediary and technology facilitator. Fundora does not:
        </p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>guarantee investment performance;</li>
          <li>
            provide personal investment, legal, tax or financial advice unless expressly stated;
          </li>
          <li>promise or assure any returns;</li>
          <li>act as a substitute for independent professional advice.</li>
        </ol>
        <p className="mt-4">All investment decisions remain solely with the Customer.</p>
      </>
    ),
  },
  {
    id: "registration",
    title: "3. Account Registration and Onboarding",
    content: (
      <>
        <p>To access the Platform, Customers must complete Fundora&apos;s onboarding process.</p>
        <p className="mt-4">During onboarding, Customers may be required to provide:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>personal identification details;</li>
          <li>contact information;</li>
          <li>verification documents;</li>
          <li>financial information where required;</li>
          <li>any other information necessary for compliance purposes.</li>
        </ol>
        <p className="mt-4">
          Fundora reserves the right to verify Customer information through approved verification
          providers.
        </p>
        <p className="mt-4">
          Failure to provide accurate information may result in suspension or termination of access.
        </p>
      </>
    ),
  },
  {
    id: "virtual-account",
    title: "4. Personalized Virtual Account",
    content: (
      <>
        <p>
          Upon successful onboarding, Fundora may through one of the commercial banks in Nigeria
          create a personalized virtual account (&ldquo;Virtual Account&rdquo;) for each Customer.
        </p>
        <p className="mt-4">The Virtual Account is provided to:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>facilitate Customer investment selections;</li>
          <li>record transactions;</li>
          <li>enable payment and investment processing;</li>
          <li>improve Customer experience on the Platform.</li>
        </ol>
        <p className="mt-4">
          The Virtual Account does not necessarily constitute a traditional bank account unless
          expressly stated.
        </p>
        <p className="mt-4">
          Customers acknowledge that use of the Virtual Account is subject to applicable financial
          regulations and the terms of relevant financial partners.
        </p>
      </>
    ),
  },
  {
    id: "investment-services",
    title: "5. Investment Services",
    content: (
      <>
        <p>Customers may access available investment opportunities through the Platform.</p>
        <p className="mt-4">Customers acknowledge that:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>all investments carry risks;</li>
          <li>past performance does not guarantee future results;</li>
          <li>investment decisions are made voluntarily;</li>
          <li>returns are not guaranteed.</li>
        </ol>
        <p className="mt-4">
          Customers are responsible for reviewing all available investment information before making
          any investment decision.
        </p>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "6. Customer Responsibilities",
    content: (
      <>
        <p>Customers must:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>maintain confidentiality of login credentials;</li>
          <li>provide accurate information;</li>
          <li>promptly update information where necessary;</li>
          <li>comply with security requirements;</li>
          <li>avoid unauthorized access or misuse of the Platform.</li>
        </ol>
        <p className="mt-4">
          Customers must immediately notify Fundora of suspected unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: "security-measures",
    title: "7. Security Measures",
    content: (
      <>
        <p>
          Fundora implements security measures designed to protect Customer accounts and
          information, including:
        </p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>two-factor authentication;</li>
          <li>biometric verification, including fingerprint authentication where supported;</li>
          <li>encryption and secure storage measures;</li>
          <li>access controls;</li>
          <li>monitoring systems.</li>
        </ol>
        <p className="mt-4">
          Customers acknowledge that no digital system can guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "8. Fees and Charges",
    content: (
      <>
        <p>Fundora may charge fees for certain Services.</p>
        <p className="mt-4">
          Applicable fees will be communicated before the completion of any transaction.
        </p>
        <p className="mt-4">Fundora reserves the right to modify fees upon reasonable notice.</p>
      </>
    ),
  },
  {
    id: "prohibited-use",
    title: "9. Prohibited Use",
    content: (
      <>
        <p>Customers shall not:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>use the Platform unlawfully;</li>
          <li>attempt to compromise Platform security;</li>
          <li>impersonate another person;</li>
          <li>provide false information;</li>
          <li>interfere with Platform operations.</li>
        </ol>
      </>
    ),
  },
  {
    id: "suspension",
    title: "10. Suspension and Termination",
    content: (
      <>
        <p>Fundora may suspend or terminate access where:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>these Terms are breached;</li>
          <li>fraudulent activity is suspected;</li>
          <li>required by law;</li>
          <li>security risks arise;</li>
          <li>regulatory requirements demand such action.</li>
        </ol>
        <p className="mt-4">
          You may also delete your own account at any time from within the app. See{" "}
          <a href="/privacy#account-deletion" className="font-semibold text-black underline">
            Deleting Your Account
          </a>{" "}
          in our Privacy Policy for how this works and what happens to your data.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "11. Third-Party Services",
    content: (
      <>
        <p>
          The Platform may integrate third-party services, including payment providers, investment
          partners and verification providers.
        </p>
        <p className="mt-4">
          Fundora is not responsible for the independent acts, omissions, products or services of
          third parties.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "12. Intellectual Property",
    content: (
      <>
        <p>
          All intellectual property rights relating to the Platform, including software, design,
          trademarks, content and systems, belong to Fundora or its licensors.
        </p>
        <p className="mt-4">Users receive a limited, non-transferable licence to use the Platform.</p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    content: (
      <>
        <p>To the fullest extent permitted by law, Fundora shall not be liable for:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>investment losses;</li>
          <li>market fluctuations;</li>
          <li>third-party failures;</li>
          <li>indirect or consequential losses;</li>
          <li>unauthorized access caused by Customer negligence.</li>
        </ol>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "14. Indemnity",
    content: (
      <>
        <p>
          Customers agree to indemnify Fundora against claims, losses, liabilities or expenses
          arising from:
        </p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>breach of these Terms;</li>
          <li>misuse of the Platform;</li>
          <li>violation of applicable laws.</li>
        </ol>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to These Terms",
    content: (
      <>
        <p>Fundora may amend these Terms from time to time.</p>
        <p className="mt-4">Updated Terms will be published through appropriate channels.</p>
        <p className="mt-4">
          Continued use of the Platform constitutes acceptance of updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "16. Governing Law",
    content: (
      <p>
        These Terms shall be governed by and interpreted according to the laws of the Federal
        Republic of Nigeria.
      </p>
    ),
  },
  {
    id: "contact",
    title: "17. Contact Information",
    content: <p>For questions regarding these Terms:</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      intro={
        <>
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern the access and use of the Fundora
            Technologies Ltd platform (&ldquo;Platform&rdquo;), website, mobile application, products
            and related services (&ldquo;Services&rdquo;).
          </p>
          <p className="mt-4">
            Fundora Technologies Ltd (&ldquo;Fundora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
            &ldquo;our&rdquo;) is a technology company that provides a digital platform enabling
            customers (&ldquo;Users&rdquo;, &ldquo;Customers&rdquo; or &ldquo;you&rdquo;) to access
            investment opportunities offered through third-party investment providers and/or
            investment partners.
          </p>
          <p className="mt-4">
            By registering, accessing or using the Platform, you agree to be bound by these Terms.
          </p>
        </>
      }
      sections={sections}
      footer={<LegalContactFooter label="Contact Information" />}
    />
  );
}
