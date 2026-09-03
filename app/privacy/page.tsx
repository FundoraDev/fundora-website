import { Metadata } from "next";
import LegalPageLayout, { LegalContactFooter, LegalSection } from "../components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Fundora - Privacy Policy",
  description:
    "Fundora Technologies Ltd Privacy Policy — how we collect, use, store, protect and disclose personal information.",
};

const sections: LegalSection[] = [
  {
    id: "information-collected",
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-black">Personal Information</h3>
            <p className="mt-2">Including:</p>
            <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
              <li>full name;</li>
              <li>date of birth;</li>
              <li>identification information;</li>
              <li>residential information;</li>
              <li>contact details;</li>
              <li>customer verification information.</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-black">Account Information</h3>
            <p className="mt-2">Including:</p>
            <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
              <li>username;</li>
              <li>login credentials;</li>
              <li>account preferences;</li>
              <li>Virtual Account details;</li>
              <li>transaction records.</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-black">Technical Information</h3>
            <p className="mt-2">Including:</p>
            <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
              <li>device information;</li>
              <li>IP address;</li>
              <li>access logs;</li>
              <li>usage information;</li>
              <li>security data.</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-black">Biometric Information</h3>
            <p className="mt-2">
              Where enabled, Fundora may process biometric identifiers such as fingerprint
              authentication data for identity verification and account security.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-we-collect",
    title: "2. How We Collect Information",
    content: (
      <>
        <p>We collect information through:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>customer registration;</li>
          <li>onboarding processes;</li>
          <li>customer interactions;</li>
          <li>use of the Platform;</li>
          <li>security and verification systems.</li>
        </ol>
      </>
    ),
  },
  {
    id: "purposes",
    title: "3. Purposes of Processing Information",
    content: (
      <>
        <p>Fundora processes customer information for purposes including:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>creating and managing customer accounts;</li>
          <li>providing Platform services;</li>
          <li>facilitating investment access;</li>
          <li>maintaining Virtual Accounts;</li>
          <li>verifying identity;</li>
          <li>preventing fraud;</li>
          <li>complying with legal obligations;</li>
          <li>improving customer experience.</li>
        </ol>
      </>
    ),
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: (
      <>
        <p>
          Fundora applies technical and organizational safeguards designed to protect customer
          information.
        </p>
        <p className="mt-4">Security measures include:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>two-factor authentication;</li>
          <li>biometric authentication controls;</li>
          <li>encryption technologies;</li>
          <li>secure data storage;</li>
          <li>restricted access controls;</li>
          <li>monitoring and security reviews.</li>
        </ol>
        <p className="mt-4">
          Customer information is encrypted using secure encryption systems, including Tremble Vault
          technology.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "5. Data Sharing",
    content: (
      <>
        <p>Fundora may share information with:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>investment partners;</li>
          <li>payment service providers;</li>
          <li>verification providers;</li>
          <li>technology service providers;</li>
          <li>regulators or government authorities where legally required.</li>
        </ol>
        <p className="mt-4">Fundora does not sell customer personal information.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p>Fundora retains personal information only for as long as necessary to:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>provide services;</li>
          <li>satisfy legal obligations;</li>
          <li>resolve disputes;</li>
          <li>enforce agreements;</li>
          <li>maintain security records.</li>
        </ol>
      </>
    ),
  },
  {
    id: "customer-rights",
    title: "7. Customer Rights",
    content: (
      <>
        <p>Subject to applicable laws, customers may have rights to:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>access their personal information;</li>
          <li>request correction of inaccurate information;</li>
          <li>request deletion where applicable;</li>
          <li>object to certain processing;</li>
          <li>withdraw consent where processing is based on consent.</li>
        </ol>
      </>
    ),
  },
  {
    id: "account-deletion",
    title: "8. Deleting Your Account",
    content: (
      <>
        <h3 className="font-semibold text-black">How to delete your account</h3>
        <p className="mt-2">Account deletion is available in-app to signed-in users:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Open the Fundora app and go to <strong>Settings → Delete Account</strong>.
          </li>
          <li>
            Review the warning screen, which explains that deletion is permanent, that you will
            lose access to your wallet, investments and portfolio history, and that you should
            withdraw your wallet balance and exit your investments first. Tap{" "}
            <strong>Continue</strong>.
          </li>
          <li>
            We email a 6-digit verification code to the address on your account. Enter the code,
            type <strong>DELETE</strong> into the confirmation field, and tap{" "}
            <strong>Delete my account</strong>. If you do not receive a code, you can request a
            new one after 30 seconds.
          </li>
        </ol>
        <p className="mt-4">
          Verifying the code deletes your account immediately — there is no grace period and no
          way to restore it afterwards. You will be signed out automatically.
        </p>

        <h3 className="mt-6 font-semibold text-black">Before you delete</h3>
        <p className="mt-2">
          Deleting your account does not withdraw your wallet balance or exit your investments for
          you. Please withdraw any wallet balance and exit your active investments before you
          delete your account.
        </p>

        <h3 className="mt-6 font-semibold text-black">What is deleted</h3>
        <p className="mt-2">
          Deleting your account removes your profile, personal and KYC information, wallet, and
          investment and portfolio history, and you lose access to these immediately.
        </p>

        <h3 className="mt-6 font-semibold text-black">What we retain, and why</h3>
        <p className="mt-2">
          We are required to retain certain transaction, KYC and anti-money-laundering records to
          comply with applicable financial services and AML regulations. These records are
          retained for{" "}
          <strong>[TODO: insert statutory retention period and governing regulation]</strong>,
          after which they are deleted or anonymised.
        </p>

        <h3 className="mt-6 font-semibold text-black">Timing</h3>
        <p className="mt-2">
          Deletion of your account and access to it is immediate and irreversible. Regulated
          records we are required to keep follow the retention period described above.
        </p>

        <h3 className="mt-6 font-semibold text-black">Can&apos;t access the app?</h3>
        <p className="mt-2">
          If you cannot access the app, you can request account deletion by emailing{" "}
          <strong>[TODO: insert support/privacy email address]</strong>.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies and Technologies",
    content: (
      <>
        <p>Fundora may use cookies and similar technologies to:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>improve Platform functionality;</li>
          <li>analyze usage;</li>
          <li>enhance security;</li>
          <li>personalize user experience.</li>
        </ol>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "10. International Data Transfers",
    content: (
      <p>
        Where customer information is transferred across jurisdictions, Fundora will take reasonable
        steps to ensure appropriate protection measures are applied.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "11. Children's Privacy",
    content: (
      <>
        <p>
          The Platform is not intended for persons who are legally unable to enter into binding
          agreements.
        </p>
        <p className="mt-4">
          Fundora does not knowingly collect information from individuals who do not meet applicable
          age requirements.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Privacy Policy",
    content: (
      <>
        <p>Fundora may update this Privacy Policy periodically.</p>
        <p className="mt-4">Changes will be communicated through appropriate channels.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: <p>For privacy-related enquiries:</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={
        <>
          <p>
            Fundora Technologies Ltd (&ldquo;Fundora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal
            information.
          </p>
          <p className="mt-4">
            This Privacy Policy explains how we collect, use, store, protect and disclose personal
            information when you use our platform, website, mobile application and related services.
          </p>
        </>
      }
      sections={sections}
      footer={<LegalContactFooter label="Contact Us" />}
    />
  );
}
