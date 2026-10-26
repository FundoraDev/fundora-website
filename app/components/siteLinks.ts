// Destinations for footer links that point off the site. A link without a URL
// isn't shown, so the footer never sends anyone nowhere; add the URL and the
// link appears in every language.

// Fundora HQ's official profiles, shown in the footer.
export const SOCIAL_LINKS: Record<"X" | "Instagram" | "LinkedIn" | "TikTok" | "YouTube", string | null> = {
  X: "https://x.com/Fundora_HQ",
  Instagram: "https://www.instagram.com/fundora_hq/",
  LinkedIn: "https://www.linkedin.com/company/fundora-hq/",
  TikTok: null,
  YouTube: null,
};

// Dr. Seyi Abiodun's own profiles, shown with his bio on the About page.
export const LEADER_LINKS: Record<"Instagram" | "LinkedIn", string> = {
  Instagram: "https://www.instagram.com/seyideassistant/",
  LinkedIn: "https://www.linkedin.com/in/oluwaseyiabiodun/",
};

export const COMPANY_LINKS: Record<"blog" | "partner" | "affiliates" | "press" | "careers", string | null> = {
  blog: null,
  partner: null,
  affiliates: null,
  press: null,
  careers: null,
};

export const REGULATORY_LINKS: Record<"customerSummaries" | "brokerCheck", string | null> = {
  customerSummaries: null,
  brokerCheck: null,
};

// Fundora's customer contact details, used on the Contact page and in the
// legal documents.
export const CONTACT = {
  email: "customersuccess@fundorahq.com",
  phone: "0809 518 7945",
  // The same number in international format, for tap-to-call links.
  phoneE164: "+2348095187945",
  address: "2nd Floor, Nzube Shopping Complex, Nzube Estate, Lokogoma, Abuja FCT",
};
