import { Metadata } from "next";
import LegalPageLayout, { LegalContactFooter, LegalSection } from "../components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Fundora - Disclosures",
  description:
    "Important disclosures regarding the services offered by Fundora Technologies Ltd.",
};

const sections: LegalSection[] = [
  {
    id: "nature-of-services",
    title: "1. Nature of Fundora's Services",
    content: (
      <>
        <p>
          Fundora Technologies Ltd operates a technology platform designed to facilitate access to
          investment opportunities by connecting customers with investment providers and other
          financial service partners.
        </p>
        <p>
          Fundora acts as a technology intermediary and platform operator. Fundora does not itself
          guarantee investment opportunities, returns, profits or preservation of capital.
        </p>
      </>
    ),
  },
  {
    id: "investment-risk",
    title: "2. Investment Risk Disclosure",
    content: (
      <>
        <p>All investments involve risk.</p>
        <p className="mt-4">Customers acknowledge that:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>the value of investments may increase or decrease;</li>
          <li>customers may lose part or all of their invested funds;</li>
          <li>historical performance is not a guarantee of future results;</li>
          <li>
            investment decisions should be made after careful consideration of personal financial
            circumstances;
          </li>
          <li>customers may seek independent financial advice before investing.</li>
        </ol>
        <p className="mt-4">
          Fundora does not guarantee any specific outcome from investments accessed through the
          Platform.
        </p>
      </>
    ),
  },
  {
    id: "no-investment-advice",
    title: "3. No Investment Advice",
    content: (
      <>
        <p>Unless expressly stated otherwise, Fundora does not provide:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>investment recommendations;</li>
          <li>financial planning services;</li>
          <li>personalized investment advice;</li>
          <li>tax or legal advice.</li>
        </ol>
        <p className="mt-4">
          Information displayed on the Platform is provided for general informational purposes and
          should not be considered professional advice.
        </p>
      </>
    ),
  },
  {
    id: "customer-responsibility",
    title: "4. Customer Responsibility",
    content: (
      <>
        <p>Customers are responsible for:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>evaluating investment opportunities;</li>
          <li>understanding associated risks;</li>
          <li>determining whether an investment aligns with their objectives;</li>
          <li>monitoring their investments.</li>
        </ol>
        <p className="mt-4">
          Customers acknowledge that they make investment decisions independently.
        </p>
      </>
    ),
  },
  {
    id: "third-party-providers",
    title: "5. Third-Party Investment Providers",
    content: (
      <>
        <p>
          Investment products or opportunities available through the Platform are provided by
          third-party institutions.
        </p>
        <p className="mt-4">Such third parties may have separate:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>terms and conditions;</li>
          <li>risk disclosures;</li>
          <li>regulatory obligations;</li>
          <li>investment documentation.</li>
        </ol>
        <p className="mt-4">
          Fundora does not control the operations or performance of third-party providers.
        </p>
      </>
    ),
  },
  {
    id: "virtual-account",
    title: "6. Virtual Account Disclosure",
    content: (
      <>
        <p>
          Fundora may provide each onboarded customer with a personalized virtual account to
          facilitate transactions and investment activities.
        </p>
        <p className="mt-4">The virtual account:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>enables platform functionality;</li>
          <li>assists in transaction tracking;</li>
          <li>supports investment selections;</li>
          <li>improves customer experience.</li>
        </ol>
        <p className="mt-4">
          The virtual account should not be interpreted as a deposit account unless expressly
          provided by a licensed financial institution.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Security Disclosure",
    content: (
      <>
        <p>Fundora applies security measures including:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>two-factor authentication;</li>
          <li>fingerprint/biometric verification where available;</li>
          <li>
            encryption of customer data through secure encryption technology including Tremble Vault;
          </li>
          <li>access management controls;</li>
          <li>security monitoring.</li>
        </ol>
        <p className="mt-4">
          Customers acknowledge that cybersecurity risks exist and agree to maintain secure access
          credentials.
        </p>
      </>
    ),
  },
  {
    id: "data-privacy",
    title: "8. Data and Privacy",
    content: (
      <>
        <p>
          Fundora collects and processes customer information in accordance with its Privacy Policy
          and applicable data protection laws.
        </p>
        <p className="mt-4">Customer information may be used for:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>account creation;</li>
          <li>identity verification;</li>
          <li>regulatory compliance;</li>
          <li>service improvement;</li>
          <li>security purposes.</li>
        </ol>
      </>
    ),
  },
  {
    id: "fraud-compliance",
    title: "9. Fraud and Compliance Disclosure",
    content: (
      <>
        <p>
          Fundora may conduct identity verification, fraud monitoring, sanctions screening and
          other compliance checks.
        </p>
        <p className="mt-4">
          Fundora may restrict, suspend or close accounts where suspicious or unlawful activity is
          identified.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "10. Availability of Services",
    content: (
      <>
        <p>The Platform may occasionally be unavailable due to:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>maintenance;</li>
          <li>technical issues;</li>
          <li>third-party service interruptions;</li>
          <li>security measures.</li>
        </ol>
        <p className="mt-4">
          Fundora will take reasonable steps to maintain service availability but does not guarantee
          uninterrupted access.
        </p>
      </>
    ),
  },
  {
    id: "acknowledgement",
    title: "11. Acknowledgement",
    content: (
      <>
        <p>By using the Platform, you acknowledge that:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>investments carry risks;</li>
          <li>Fundora is not responsible for market losses;</li>
          <li>investment decisions are your responsibility;</li>
          <li>you have reviewed all relevant information before proceeding.</li>
        </ol>
      </>
    ),
  },
];

export default function DisclosuresPage() {
  return (
    <LegalPageLayout
      title="Disclosures"
      intro={
        <p>
          This Disclosure Statement provides important information regarding the services offered by
          Fundora Technologies Ltd (&ldquo;Fundora&rdquo;). By using the Fundora platform
          (&ldquo;Platform&rdquo;), you acknowledge that you have read, understood and accepted
          these disclosures.
        </p>
      }
      sections={sections}
      footer={<LegalContactFooter />}
    />
  );
}
