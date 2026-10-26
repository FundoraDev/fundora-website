// The legal documents as data. Wording here is the authoritative English text;
// translations must keep the same sections (and ids, which other pages and the
// app stores link to, e.g. /privacy#account-deletion) and the same blocks.
//
// Blocks: { p } paragraph, { h } subheading, { ol } ordered list (type "a" for
// a., b., c. or "1"), { ul } bulleted list. **bold** and [text](/path) work
// inside any string.

const privacy = {
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | Fundora",
  description:
    "How Fundora Technologies Ltd collects, uses, stores, protects and discloses personal information.",
  contactLabel: "Contact Us",
  intro: [
    { p: "Fundora Technologies Ltd (“Fundora”, “we”, “us”, “our”) respects your privacy and is committed to protecting your personal information." },
    { p: "This Privacy Policy explains how we collect, use, store, protect and disclose personal information when you use our platform, website, mobile application and related services." },
  ],
  sections: [
    {
      id: "information-collected",
      title: "1. Information We Collect",
      blocks: [
        { p: "We may collect the following categories of information:" },
        { h: "Personal Information" },
        { p: "Including:" },
        { ol: ["full name;", "date of birth;", "identification information;", "residential information;", "contact details;", "customer verification information."], type: "a" },
        { h: "Account Information" },
        { p: "Including:" },
        { ol: ["username;", "login credentials;", "account preferences;", "Virtual Account details;", "transaction records."], type: "a" },
        { h: "Technical Information" },
        { p: "Including:" },
        { ol: ["device information;", "IP address;", "access logs;", "usage information;", "security data."], type: "a" },
        { h: "Biometric Information" },
        { p: "Where enabled, Fundora may process biometric identifiers such as fingerprint authentication data for identity verification and account security." },
      ],
    },
    {
      id: "how-we-collect",
      title: "2. How We Collect Information",
      blocks: [
        { p: "We collect information through:" },
        { ol: ["customer registration;", "onboarding processes;", "customer interactions;", "use of the Platform;", "security and verification systems."], type: "a" },
      ],
    },
    {
      id: "purposes",
      title: "3. Purposes of Processing Information",
      blocks: [
        { p: "Fundora processes customer information for purposes including:" },
        {
          ol: [
            "creating and managing customer accounts;",
            "providing Platform services;",
            "facilitating investment access;",
            "maintaining Virtual Accounts;",
            "verifying identity;",
            "preventing fraud;",
            "complying with legal obligations;",
            "improving customer experience.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security",
      blocks: [
        { p: "Fundora applies technical and organizational safeguards designed to protect customer information." },
        { p: "Security measures include:" },
        {
          ol: [
            "two-factor authentication;",
            "biometric authentication controls;",
            "encryption technologies;",
            "secure data storage;",
            "restricted access controls;",
            "monitoring and security reviews.",
          ],
          type: "a",
        },
        { p: "Customer information is encrypted using secure encryption systems, including Tremble Vault technology." },
      ],
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing",
      blocks: [
        { p: "Fundora may share information with:" },
        {
          ol: [
            "investment partners;",
            "payment service providers;",
            "verification providers;",
            "technology service providers;",
            "regulators or government authorities where legally required.",
          ],
          type: "a",
        },
        { p: "Fundora does not sell customer personal information." },
      ],
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      blocks: [
        { p: "Fundora retains personal information only for as long as necessary to:" },
        { ol: ["provide services;", "satisfy legal obligations;", "resolve disputes;", "enforce agreements;", "maintain security records."], type: "a" },
      ],
    },
    {
      id: "customer-rights",
      title: "7. Customer Rights",
      blocks: [
        { p: "Subject to applicable laws, customers may have rights to:" },
        {
          ol: [
            "access their personal information;",
            "request correction of inaccurate information;",
            "request deletion where applicable;",
            "object to certain processing;",
            "withdraw consent where processing is based on consent.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "account-deletion",
      title: "8. Deleting Your Account",
      blocks: [
        { h: "How to delete your account" },
        { p: "Account deletion is available in-app to signed-in users:" },
        {
          ol: [
            "Open the Fundora app and go to **Settings → Delete Account**.",
            "Review the warning screen, which explains that deletion is permanent, that you will lose access to your wallet, investments and portfolio history, and that you should withdraw your wallet balance and exit your investments first. Tap **Continue**.",
            "We email a 6-digit verification code to the address on your account. Enter the code, type **DELETE** into the confirmation field, and tap **Delete my account**. If you do not receive a code, you can request a new one after 30 seconds.",
          ],
          type: "1",
        },
        { p: "Verifying the code deletes your account immediately. There is no grace period and no way to restore it afterwards. You will be signed out automatically." },
        { h: "Before you delete" },
        { p: "Deleting your account does not withdraw your wallet balance or exit your investments for you. Please withdraw any wallet balance and exit your active investments before you delete your account." },
        { h: "What is deleted" },
        { p: "Deleting your account removes your profile, personal and KYC information, wallet, and investment and portfolio history, and you lose access to these immediately." },
        { h: "What we retain, and why" },
        { p: "We are required to retain certain transaction, KYC and anti-money-laundering records to comply with applicable financial services and AML regulations. These records are retained for **[TODO: insert statutory retention period and governing regulation]**, after which they are deleted or anonymized." },
        { h: "Timing" },
        { p: "Deletion of your account and access to it is immediate and irreversible. Regulated records we are required to keep follow the retention period described above." },
        { h: "Can't access the app?" },
        { p: "If you cannot access the app, you can request account deletion by emailing **[TODO: insert support/privacy email address]**." },
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies and Technologies",
      blocks: [
        { p: "Fundora may use cookies and similar technologies to:" },
        { ol: ["improve Platform functionality;", "analyze usage;", "enhance security;", "personalize user experience."], type: "a" },
      ],
    },
    {
      id: "international-transfers",
      title: "10. International Data Transfers",
      blocks: [
        { p: "Where customer information is transferred across jurisdictions, Fundora will take reasonable steps to ensure appropriate protection measures are applied." },
      ],
    },
    {
      id: "childrens-privacy",
      title: "11. Children's Privacy",
      blocks: [
        { p: "The Platform is not intended for persons who are legally unable to enter into binding agreements." },
        { p: "Fundora does not knowingly collect information from individuals who do not meet applicable age requirements." },
      ],
    },
    {
      id: "changes",
      title: "12. Changes to This Privacy Policy",
      blocks: [
        { p: "Fundora may update this Privacy Policy periodically." },
        { p: "Changes will be communicated through appropriate channels." },
      ],
    },
    {
      id: "contact",
      title: "13. Contact Us",
      blocks: [{ p: "For privacy-related enquiries:" }],
    },
  ],
} as const;

const terms = {
  title: "Terms and Conditions",
  metaTitle: "Terms and Conditions | Fundora",
  description: "Terms and Conditions governing access and use of the Fundora Technologies Ltd platform and services.",
  contactLabel: "Contact Information",
  intro: [
    { p: "These Terms and Conditions (“Terms”) govern the access and use of the Fundora Technologies Ltd platform (“Platform”), website, mobile application, products and related services (“Services”)." },
    { p: "Fundora Technologies Ltd (“Fundora”, “we”, “us” or “our”) is a technology company that provides a digital platform enabling customers (“Users”, “Customers” or “you”) to access investment opportunities offered through third-party investment providers and/or investment partners." },
    { p: "By registering, accessing or using the Platform, you agree to be bound by these Terms." },
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      blocks: [
        { p: "By creating an account, accessing the Platform, or using any Services, you confirm that:" },
        {
          ol: [
            "you have read and understood these Terms;",
            "you agree to comply with all applicable laws and regulations;",
            "all information provided by you is accurate, complete and current; and",
            "you accept responsibility for your use of the Platform.",
          ],
          type: "a",
        },
        { p: "If you do not agree to these Terms, you must discontinue use of the Platform." },
      ],
    },
    {
      id: "about-fundora",
      title: "2. About Fundora",
      blocks: [
        { p: "Fundora provides a technology-enabled platform that connects customers with investment opportunities and facilitates access to investment products made available through approved investment partners." },
        { p: "Fundora acts as an intermediary and technology facilitator. Fundora does not:" },
        {
          ol: [
            "guarantee investment performance;",
            "provide personal investment, legal, tax or financial advice unless expressly stated;",
            "promise or assure any returns;",
            "act as a substitute for independent professional advice.",
          ],
          type: "a",
        },
        { p: "All investment decisions remain solely with the Customer." },
      ],
    },
    {
      id: "registration",
      title: "3. Account Registration and Onboarding",
      blocks: [
        { p: "To access the Platform, Customers must complete Fundora's onboarding process." },
        { p: "During onboarding, Customers may be required to provide:" },
        {
          ol: [
            "personal identification details;",
            "contact information;",
            "verification documents;",
            "financial information where required;",
            "any other information necessary for compliance purposes.",
          ],
          type: "a",
        },
        { p: "Fundora reserves the right to verify Customer information through approved verification providers." },
        { p: "Failure to provide accurate information may result in suspension or termination of access." },
      ],
    },
    {
      id: "virtual-account",
      title: "4. Personalized Virtual Account",
      blocks: [
        { p: "Upon successful onboarding, Fundora may through one of the commercial banks in Nigeria create a personalized virtual account (“Virtual Account”) for each Customer." },
        { p: "The Virtual Account is provided to:" },
        {
          ol: [
            "facilitate Customer investment selections;",
            "record transactions;",
            "enable payment and investment processing;",
            "improve Customer experience on the Platform.",
          ],
          type: "a",
        },
        { p: "The Virtual Account does not necessarily constitute a traditional bank account unless expressly stated." },
        { p: "Customers acknowledge that use of the Virtual Account is subject to applicable financial regulations and the terms of relevant financial partners." },
      ],
    },
    {
      id: "investment-services",
      title: "5. Investment Services",
      blocks: [
        { p: "Customers may access available investment opportunities through the Platform." },
        { p: "Customers acknowledge that:" },
        {
          ol: [
            "all investments carry risks;",
            "past performance does not guarantee future results;",
            "investment decisions are made voluntarily;",
            "returns are not guaranteed.",
          ],
          type: "a",
        },
        { p: "Customers are responsible for reviewing all available investment information before making any investment decision." },
      ],
    },
    {
      id: "customer-responsibilities",
      title: "6. Customer Responsibilities",
      blocks: [
        { p: "Customers must:" },
        {
          ol: [
            "maintain confidentiality of login credentials;",
            "provide accurate information;",
            "promptly update information where necessary;",
            "comply with security requirements;",
            "avoid unauthorized access or misuse of the Platform.",
          ],
          type: "a",
        },
        { p: "Customers must immediately notify Fundora of suspected unauthorized access." },
      ],
    },
    {
      id: "security-measures",
      title: "7. Security Measures",
      blocks: [
        { p: "Fundora implements security measures designed to protect Customer accounts and information, including:" },
        {
          ol: [
            "two-factor authentication;",
            "biometric verification, including fingerprint authentication where supported;",
            "encryption and secure storage measures;",
            "access controls;",
            "monitoring systems.",
          ],
          type: "a",
        },
        { p: "Customers acknowledge that no digital system can guarantee absolute security." },
      ],
    },
    {
      id: "fees",
      title: "8. Fees and Charges",
      blocks: [
        { p: "Fundora may charge fees for certain Services." },
        { p: "Applicable fees will be communicated before the completion of any transaction." },
        { p: "Fundora reserves the right to modify fees upon reasonable notice." },
      ],
    },
    {
      id: "prohibited-use",
      title: "9. Prohibited Use",
      blocks: [
        { p: "Customers shall not:" },
        {
          ol: [
            "use the Platform unlawfully;",
            "attempt to compromise Platform security;",
            "impersonate another person;",
            "provide false information;",
            "interfere with Platform operations.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "suspension",
      title: "10. Suspension and Termination",
      blocks: [
        { p: "Fundora may suspend or terminate access where:" },
        {
          ol: [
            "these Terms are breached;",
            "fraudulent activity is suspected;",
            "required by law;",
            "security risks arise;",
            "regulatory requirements demand such action.",
          ],
          type: "a",
        },
        { p: "You may also delete your own account at any time from within the app. See [Deleting Your Account](/privacy#account-deletion) in our Privacy Policy for how this works and what happens to your data." },
      ],
    },
    {
      id: "third-party",
      title: "11. Third-Party Services",
      blocks: [
        { p: "The Platform may integrate third-party services, including payment providers, investment partners and verification providers." },
        { p: "Fundora is not responsible for the independent acts, omissions, products or services of third parties." },
      ],
    },
    {
      id: "intellectual-property",
      title: "12. Intellectual Property",
      blocks: [
        { p: "All intellectual property rights relating to the Platform, including software, design, trademarks, content and systems, belong to Fundora or its licensors." },
        { p: "Users receive a limited, non-transferable license to use the Platform." },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "13. Limitation of Liability",
      blocks: [
        { p: "To the fullest extent permitted by law, Fundora shall not be liable for:" },
        {
          ol: [
            "investment losses;",
            "market fluctuations;",
            "third-party failures;",
            "indirect or consequential losses;",
            "unauthorized access caused by Customer negligence.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "indemnity",
      title: "14. Indemnity",
      blocks: [
        { p: "Customers agree to indemnify Fundora against claims, losses, liabilities or expenses arising from:" },
        { ol: ["breach of these Terms;", "misuse of the Platform;", "violation of applicable laws."], type: "a" },
      ],
    },
    {
      id: "changes",
      title: "15. Changes to These Terms",
      blocks: [
        { p: "Fundora may amend these Terms from time to time." },
        { p: "Updated Terms will be published through appropriate channels." },
        { p: "Continued use of the Platform constitutes acceptance of updated Terms." },
      ],
    },
    {
      id: "governing-law",
      title: "16. Governing Law",
      blocks: [{ p: "These Terms shall be governed by and interpreted according to the laws of the Federal Republic of Nigeria." }],
    },
    {
      id: "contact",
      title: "17. Contact Information",
      blocks: [{ p: "For questions regarding these Terms:" }],
    },
  ],
} as const;

const policy = {
  title: "Information Security Policy",
  metaTitle: "Information Security Policy | Fundora",
  description:
    "The framework Fundora Technologies Ltd uses to protect its systems, applications, customer information and technology infrastructure.",
  contactLabel: "",
  intro: [],
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        { p: "Fundora Technologies Ltd recognizes information security as a critical component of its operations. This Information Security Policy establishes the framework for protecting Fundora's systems, applications, customer information, business data and technology infrastructure." },
      ],
    },
    {
      id: "objectives",
      title: "2. Objectives",
      blocks: [
        { p: "The objectives of this Policy are to ensure:" },
        {
          ol: [
            "confidentiality of information;",
            "integrity of systems and data;",
            "availability of services;",
            "prevention of unauthorized access;",
            "effective response to security incidents.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "governance",
      title: "3. Information Security Governance",
      blocks: [
        { p: "Fundora shall maintain an information security governance structure consisting of:" },
        { h: "Board of Directors" },
        { p: "Responsible for:" },
        { ul: ["oversight;", "approval of security strategy;", "risk supervision."] },
        { h: "Management" },
        { p: "Responsible for:" },
        { ul: ["implementation;", "resource allocation;", "enforcement."] },
        { h: "Technology/Security Team" },
        { p: "Responsible for:" },
        { ul: ["system protection;", "monitoring;", "incident response."] },
      ],
    },
    {
      id: "classification",
      title: "4. Information Classification",
      blocks: [
        { p: "Fundora classifies information as:" },
        { h: "Confidential" },
        { p: "Examples:" },
        { ul: ["customer identity data;", "financial information;", "authentication data."] },
        { h: "Internal" },
        { p: "Examples:" },
        { ul: ["internal procedures;", "operational documents."] },
        { h: "Public" },
        { p: "Examples:" },
        { ul: ["published information."] },
      ],
    },
    {
      id: "access-control",
      title: "5. Access Control Policy",
      blocks: [
        { p: "Fundora shall enforce:" },
        { ol: ["unique user accounts;", "strong authentication;", "least-privilege access;", "role-based permissions;", "periodic access reviews."], type: "a" },
      ],
    },
    {
      id: "authentication",
      title: "6. Authentication and Account Security",
      blocks: [
        { p: "Security controls include:" },
        { ol: ["two-factor authentication;", "biometric verification;", "secure password requirements;", "session controls;", "login monitoring."], type: "a" },
      ],
    },
    {
      id: "encryption",
      title: "7. Encryption Policy",
      blocks: [
        { p: "Fundora shall encrypt sensitive information:" },
        { ul: ["during transmission;", "during storage;", "during processing where appropriate."] },
        { p: "Encryption controls include secure encryption technologies including Tremble Vault." },
      ],
    },
    {
      id: "system-security",
      title: "8. System Security",
      blocks: [
        { p: "Fundora shall maintain:" },
        {
          ol: [
            "secure software development practices;",
            "vulnerability management;",
            "system monitoring;",
            "security testing;",
            "patch management.",
          ],
          type: "a",
        },
      ],
    },
    {
      id: "application-security",
      title: "9. Application Security",
      blocks: [
        { p: "Fundora applications shall be developed and maintained with:" },
        { ul: ["secure coding practices;", "access controls;", "authentication requirements;", "security testing."] },
      ],
    },
    {
      id: "network-security",
      title: "10. Network Security",
      blocks: [
        { p: "Fundora shall implement:" },
        { ol: ["network monitoring;", "firewall controls;", "intrusion detection measures;", "secure communications protocols."], type: "a" },
      ],
    },
    {
      id: "third-party",
      title: "11. Third-Party Security",
      blocks: [
        { p: "Third parties shall be assessed before access to Fundora systems." },
        { p: "Requirements may include:" },
        { ul: ["security reviews;", "confidentiality agreements;", "compliance obligations;", "access restrictions."] },
      ],
    },
    {
      id: "incident-response",
      title: "12. Incident Response",
      blocks: [
        { p: "Fundora shall maintain an incident response process." },
        { p: "Security incidents shall be:" },
        { ol: ["detected;", "contained;", "investigated;", "resolved;", "documented."], type: "a" },
      ],
    },
    {
      id: "business-continuity",
      title: "13. Business Continuity and Disaster Recovery",
      blocks: [
        { p: "Fundora shall maintain measures including:" },
        { ul: ["backups;", "recovery procedures;", "continuity planning;", "system restoration processes."] },
      ],
    },
    {
      id: "employee-awareness",
      title: "14. Employee Security Awareness",
      blocks: [
        { p: "Employees shall receive training on:" },
        { ul: ["cybersecurity awareness;", "phishing prevention;", "password protection;", "data handling."] },
      ],
    },
    {
      id: "monitoring-audit",
      title: "15. Monitoring and Audit",
      blocks: [
        { p: "Fundora may conduct:" },
        { ul: ["security assessments;", "system audits;", "access reviews;", "vulnerability assessments."] },
      ],
    },
    {
      id: "policy-breaches",
      title: "16. Policy Breaches",
      blocks: [
        { p: "Violation of this Policy may result in:" },
        { ul: ["access restrictions;", "disciplinary action;", "termination;", "regulatory reporting."] },
      ],
    },
    {
      id: "review",
      title: "17. Review",
      blocks: [{ p: "This Policy shall be reviewed periodically to ensure effectiveness." }],
    },
  ],
} as const;

const disclosures = {
  title: "Disclosures",
  metaTitle: "Disclosures | Fundora",
  description: "Important disclosures regarding the services offered by Fundora Technologies Ltd.",
  contactLabel: "Contact",
  intro: [
    { p: "This Disclosure Statement provides important information regarding the services offered by Fundora Technologies Ltd (“Fundora”). By using the Fundora platform (“Platform”), you acknowledge that you have read, understood and accepted these disclosures." },
  ],
  sections: [
    {
      id: "nature-of-services",
      title: "1. Nature of Fundora's Services",
      blocks: [
        { p: "Fundora Technologies Ltd operates a technology platform designed to facilitate access to investment opportunities by connecting customers with investment providers and other financial service partners." },
        { p: "Fundora acts as a technology intermediary and platform operator. Fundora does not itself guarantee investment opportunities, returns, profits or preservation of capital." },
      ],
    },
    {
      id: "investment-risk",
      title: "2. Investment Risk Disclosure",
      blocks: [
        { p: "All investments involve risk." },
        { p: "Customers acknowledge that:" },
        {
          ol: [
            "the value of investments may increase or decrease;",
            "customers may lose part or all of their invested funds;",
            "historical performance is not a guarantee of future results;",
            "investment decisions should be made after careful consideration of personal financial circumstances;",
            "customers may seek independent financial advice before investing.",
          ],
          type: "a",
        },
        { p: "Fundora does not guarantee any specific outcome from investments accessed through the Platform." },
      ],
    },
    {
      id: "no-investment-advice",
      title: "3. No Investment Advice",
      blocks: [
        { p: "Unless expressly stated otherwise, Fundora does not provide:" },
        { ol: ["investment recommendations;", "financial planning services;", "personalized investment advice;", "tax or legal advice."], type: "a" },
        { p: "Information displayed on the Platform is provided for general informational purposes and should not be considered professional advice." },
      ],
    },
    {
      id: "customer-responsibility",
      title: "4. Customer Responsibility",
      blocks: [
        { p: "Customers are responsible for:" },
        {
          ol: [
            "evaluating investment opportunities;",
            "understanding associated risks;",
            "determining whether an investment aligns with their objectives;",
            "monitoring their investments.",
          ],
          type: "a",
        },
        { p: "Customers acknowledge that they make investment decisions independently." },
      ],
    },
    {
      id: "third-party-providers",
      title: "5. Third-Party Investment Providers",
      blocks: [
        { p: "Investment products or opportunities available through the Platform are provided by third-party institutions." },
        { p: "Such third parties may have separate:" },
        { ol: ["terms and conditions;", "risk disclosures;", "regulatory obligations;", "investment documentation."], type: "a" },
        { p: "Fundora does not control the operations or performance of third-party providers." },
      ],
    },
    {
      id: "virtual-account",
      title: "6. Virtual Account Disclosure",
      blocks: [
        { p: "Fundora may provide each onboarded customer with a personalized virtual account to facilitate transactions and investment activities." },
        { p: "The virtual account:" },
        {
          ol: [
            "enables platform functionality;",
            "assists in transaction tracking;",
            "supports investment selections;",
            "improves customer experience.",
          ],
          type: "a",
        },
        { p: "The virtual account should not be interpreted as a deposit account unless expressly provided by a licensed financial institution." },
      ],
    },
    {
      id: "security",
      title: "7. Security Disclosure",
      blocks: [
        { p: "Fundora applies security measures including:" },
        {
          ol: [
            "two-factor authentication;",
            "fingerprint/biometric verification where available;",
            "encryption of customer data through secure encryption technology including Tremble Vault;",
            "access management controls;",
            "security monitoring.",
          ],
          type: "a",
        },
        { p: "Customers acknowledge that cybersecurity risks exist and agree to maintain secure access credentials." },
      ],
    },
    {
      id: "data-privacy",
      title: "8. Data and Privacy",
      blocks: [
        { p: "Fundora collects and processes customer information in accordance with its Privacy Policy and applicable data protection laws." },
        { p: "Customer information may be used for:" },
        { ol: ["account creation;", "identity verification;", "regulatory compliance;", "service improvement;", "security purposes."], type: "a" },
      ],
    },
    {
      id: "fraud-compliance",
      title: "9. Fraud and Compliance Disclosure",
      blocks: [
        { p: "Fundora may conduct identity verification, fraud monitoring, sanctions screening and other compliance checks." },
        { p: "Fundora may restrict, suspend or close accounts where suspicious or unlawful activity is identified." },
      ],
    },
    {
      id: "availability",
      title: "10. Availability of Services",
      blocks: [
        { p: "The Platform may occasionally be unavailable due to:" },
        { ol: ["maintenance;", "technical issues;", "third-party service interruptions;", "security measures."], type: "a" },
        { p: "Fundora will take reasonable steps to maintain service availability but does not guarantee uninterrupted access." },
      ],
    },
    {
      id: "acknowledgement",
      title: "11. Acknowledgement",
      blocks: [
        { p: "By using the Platform, you acknowledge that:" },
        {
          ol: [
            "investments carry risks;",
            "Fundora is not responsible for market losses;",
            "investment decisions are your responsibility;",
            "you have reviewed all relevant information before proceeding.",
          ],
          type: "a",
        },
      ],
    },
  ],
} as const;

const legal = { privacy, terms, policy, disclosures } as const;
export default legal;

type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type LegalDocuments = Widen<typeof legal>;
export type LegalDocumentKey = keyof LegalDocuments;
export type LegalDocument = LegalDocuments[LegalDocumentKey];
