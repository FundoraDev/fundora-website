import { Metadata } from "next";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Fundora - Information Security Policy",
  description:
    "Fundora Technologies Ltd Information Security Policy — framework for protecting systems, applications, customer information, and technology infrastructure.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <p>
        Fundora Technologies Ltd recognizes information security as a critical component of its
        operations. This Information Security Policy establishes the framework for protecting
        Fundora&apos;s systems, applications, customer information, business data and technology
        infrastructure.
      </p>
    ),
  },
  {
    id: "objectives",
    title: "2. Objectives",
    content: (
      <>
        <p>The objectives of this Policy are to ensure:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>confidentiality of information;</li>
          <li>integrity of systems and data;</li>
          <li>availability of services;</li>
          <li>prevention of unauthorized access;</li>
          <li>effective response to security incidents.</li>
        </ol>
      </>
    ),
  },
  {
    id: "governance",
    title: "3. Information Security Governance",
    content: (
      <>
        <p>
          Fundora shall maintain an information security governance structure consisting of:
        </p>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-black">Board of Directors</h3>
            <p className="mt-2">Responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>oversight;</li>
              <li>approval of security strategy;</li>
              <li>risk supervision.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black">Management</h3>
            <p className="mt-2">Responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>implementation;</li>
              <li>resource allocation;</li>
              <li>enforcement.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black">Technology/Security Team</h3>
            <p className="mt-2">Responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>system protection;</li>
              <li>monitoring;</li>
              <li>incident response.</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "classification",
    title: "4. Information Classification",
    content: (
      <>
        <p>Fundora classifies information as:</p>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-black">Confidential</h3>
            <p className="mt-2">Examples:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>customer identity data;</li>
              <li>financial information;</li>
              <li>authentication data.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black">Internal</h3>
            <p className="mt-2">Examples:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>internal procedures;</li>
              <li>operational documents.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-black">Public</h3>
            <p className="mt-2">Examples:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>published information.</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "access-control",
    title: "5. Access Control Policy",
    content: (
      <>
        <p>Fundora shall enforce:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>unique user accounts;</li>
          <li>strong authentication;</li>
          <li>least-privilege access;</li>
          <li>role-based permissions;</li>
          <li>periodic access reviews.</li>
        </ol>
      </>
    ),
  },
  {
    id: "authentication",
    title: "6. Authentication and Account Security",
    content: (
      <>
        <p>Security controls include:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>two-factor authentication;</li>
          <li>biometric verification;</li>
          <li>secure password requirements;</li>
          <li>session controls;</li>
          <li>login monitoring.</li>
        </ol>
      </>
    ),
  },
  {
    id: "encryption",
    title: "7. Encryption Policy",
    content: (
      <>
        <p>Fundora shall encrypt sensitive information:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>during transmission;</li>
          <li>during storage;</li>
          <li>during processing where appropriate.</li>
        </ul>
        <p className="mt-4">
          Encryption controls include secure encryption technologies including Tremble Vault.
        </p>
      </>
    ),
  },
  {
    id: "system-security",
    title: "8. System Security",
    content: (
      <>
        <p>Fundora shall maintain:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>secure software development practices;</li>
          <li>vulnerability management;</li>
          <li>system monitoring;</li>
          <li>security testing;</li>
          <li>patch management.</li>
        </ol>
      </>
    ),
  },
  {
    id: "application-security",
    title: "9. Application Security",
    content: (
      <>
        <p>Fundora applications shall be developed and maintained with:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>secure coding practices;</li>
          <li>access controls;</li>
          <li>authentication requirements;</li>
          <li>security testing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "network-security",
    title: "10. Network Security",
    content: (
      <>
        <p>Fundora shall implement:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>network monitoring;</li>
          <li>firewall controls;</li>
          <li>intrusion detection measures;</li>
          <li>secure communications protocols.</li>
        </ol>
      </>
    ),
  },
  {
    id: "third-party",
    title: "11. Third-Party Security",
    content: (
      <>
        <p>Third parties shall be assessed before access to Fundora systems.</p>
        <p className="mt-4">Requirements may include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>security reviews;</li>
          <li>confidentiality agreements;</li>
          <li>compliance obligations;</li>
          <li>access restrictions.</li>
        </ul>
      </>
    ),
  },
  {
    id: "incident-response",
    title: "12. Incident Response",
    content: (
      <>
        <p>Fundora shall maintain an incident response process.</p>
        <p className="mt-4">Security incidents shall be:</p>
        <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5">
          <li>detected;</li>
          <li>contained;</li>
          <li>investigated;</li>
          <li>resolved;</li>
          <li>documented.</li>
        </ol>
      </>
    ),
  },
  {
    id: "business-continuity",
    title: "13. Business Continuity and Disaster Recovery",
    content: (
      <>
        <p>Fundora shall maintain measures including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>backups;</li>
          <li>recovery procedures;</li>
          <li>continuity planning;</li>
          <li>system restoration processes.</li>
        </ul>
      </>
    ),
  },
  {
    id: "employee-awareness",
    title: "14. Employee Security Awareness",
    content: (
      <>
        <p>Employees shall receive training on:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>cybersecurity awareness;</li>
          <li>phishing prevention;</li>
          <li>password protection;</li>
          <li>data handling.</li>
        </ul>
      </>
    ),
  },
  {
    id: "monitoring-audit",
    title: "15. Monitoring and Audit",
    content: (
      <>
        <p>Fundora may conduct:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>security assessments;</li>
          <li>system audits;</li>
          <li>access reviews;</li>
          <li>vulnerability assessments.</li>
        </ul>
      </>
    ),
  },
  {
    id: "policy-breaches",
    title: "16. Policy Breaches",
    content: (
      <>
        <p>Violation of this Policy may result in:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>access restrictions;</li>
          <li>disciplinary action;</li>
          <li>termination;</li>
          <li>regulatory reporting.</li>
        </ul>
      </>
    ),
  },
  {
    id: "review",
    title: "17. Review",
    content: (
      <p>
        This Policy shall be reviewed periodically to ensure effectiveness.
      </p>
    ),
  },
];

export default function PolicyPage() {
  return (
    <LegalPageLayout
      title="Information Security Policy"
      sections={sections}
      showVersion
      footer={
        <div className="mt-10 rounded-[16px] border border-[#E4E7EC] bg-white p-5 md:mt-12 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#808080]">
            Approved by
          </p>
          <p className="mt-2 font-satoshi text-lg font-bold md:text-xl">
            Board of Directors
          </p>
          <p className="mt-1 text-[#474D66]">Fundora Technologies Ltd</p>
        </div>
      }
    />
  );
}
