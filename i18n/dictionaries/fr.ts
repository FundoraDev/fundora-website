import type { Dictionary } from "./en";

// French typography: a narrow no-break space (U+202F) goes before : ; ? ! and
// inside « » so punctuation never wraps onto its own line.
const fr: Dictionary = {
  meta: {
    siteName: "Fundora",
    siteDescription: "Bâtir. Faire fructifier. Protéger. Transmettre son patrimoine en toute clarté.",
    home: { title: "Fundora", description: "Bâtir. Faire fructifier. Protéger. Transmettre son patrimoine en toute clarté." },
    about: { title: "À propos | Fundora", description: "Fundora forme la prochaine génération de familles prospères en Afrique." },
    invest: { title: "Investir | Fundora", description: "Investissez votre patrimoine avec Fundora." },
    protect: { title: "Protéger | Fundora", description: "Protégez votre patrimoine avec Fundora." },
    insurance: { title: "Assurance | Fundora", description: "Une protection d’exception, en toute confiance." },
    programs: { title: "Programmes | Fundora", description: "Découvrez nos programmes et trouvez celui qui vous convient." },
    download: {
      title: "Télécharger l’application | Fundora",
      description: "Téléchargez l’application Fundora pour ouvrir votre compte, investir et gérer vos assurances depuis votre téléphone.",
    },
    contact: { title: "Contact | Fundora", description: "Contactez-nous pour en savoir plus." },
    faq: { title: "Questions fréquentes | Fundora", description: "Les réponses aux questions courantes sur Fundora, l’application, l’investissement, l’assurance, nos programmes et la sécurité de votre compte." },
    notFound: { title: "404 | Page introuvable", description: "Cette page est introuvable." },
  },

  common: {
    startJourney: "Commencez à bâtir votre patrimoine",
    bookConsultation: "Réserver une consultation",
    speakWithAdvisor: "Parler à un conseiller",
    getTheApp: "Télécharger l’app",
    logIn: "Se connecter",
    newTab: "s’ouvre dans un nouvel onglet",
  },

  nav: {
    home: "Accueil Fundora",
    main: "Principal",
    about: "À propos",
    invest: "Investir",
    insurance: "Assurance",
    programs: "Programmes",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    changeLanguage: "Changer de langue. Langue actuelle : {language}",
  },

  footer: {
    ctaTitle: "Bâtissons votre avenir financier",
    ctaHighlight: { before: "", highlight: "en toute sérénité", after: "" },
    ctaBody: "Que vous débutiez ou que vous affiniez une stratégie existante, Fundora vous aide à avancer en toute confiance.",
    customerSummaries: "Synthèses de la relation client",
    brokerCheck: "BrokerCheck de la FINRA",
    followUs: "Suivez-nous sur",
    productTitle: "Produits",
    product: {
      mutualFunds: "Fonds communs de placement",
      stocks: "Actions",
      fixedIncome: "Revenu fixe",
      alternatives: "Investissements alternatifs",
      retirement: "Retraite",
      life: "Assurance vie",
      incomeProtection: "Protection du revenu",
      assetCoverage: "Couverture des biens et des entreprises",
    },
    companyTitle: "Entreprise",
    company: {
      about: "À propos",
      faq: "Questions fréquentes",
      blog: "Blog",
      partner: "Devenir partenaire",
      affiliates: "Affiliés",
      press: "Presse",
      careers: "Carrières",
    },
    legalTitle: "Mentions légales et réglementaires",
    legal: {
      policy: "Politique de sécurité de l’information",
      terms: "Conditions générales",
      disclosures: "Informations réglementaires",
      privacy: "Politique de confidentialité",
    },
    getTheApp: "Téléchargez l’application Fundora",
    about:
      "Fundora est une place de marché d’investissement numérique axée sur la technologie, conçue pour les Nigérians au Nigeria et dans la diaspora. Nous aidons les utilisateurs à découvrir, comparer et accéder à des produits financiers agréés, tels que des investissements et des assurances, par l’intermédiaire d’établissements partenaires réglementés. Fundora assure l’intégration numérique, l’orchestration des portefeuilles (registre comptable uniquement), l’acheminement des transactions et le reporting consolidé des portefeuilles, tandis que tous les fonds des clients sont détenus et gérés en toute sécurité par des dépositaires et prestataires agréés. Fundora n’agit pas en tant que gestionnaire d’actifs, courtier ou dépositaire.",
    followOn: "Fundora sur {network}",
  },

  appDownload: {
    title: "Téléchargez l’application Fundora",
    description: "Ouvrez votre compte, investissez et gérez vos assurances, le tout depuis votre téléphone.",
    close: "Fermer",
    qrAlt: "Code QR menant à l’application Fundora sur Google Play",
    qrTitle: "Vous êtes sur ordinateur ?",
    qrBody: "Scannez ce code avec l’appareil photo de votre téléphone Android pour obtenir l’application sur Google Play.",
    googlePlayEyebrow: "Disponible sur",
    appStoreEyebrow: "Télécharger dans l’",
    available: "Disponible",
    comingSoon: "Bientôt disponible",
    platformApp: "Application {platform}",
    unavailable: "L’application {platform} n’est pas encore disponible au téléchargement.",
    unavailableSr: "l’application {platform} n’est pas encore disponible au téléchargement",
    linkSr: "application {platform}, s’ouvre dans un nouvel onglet",
    bannerLabel: "Téléchargez l’application Fundora",
    bannerSubtitle: "Investissez et assurez-vous depuis votre téléphone",
    bannerCta: "Télécharger",
    bannerCtaSr: "sur {store}, s’ouvre dans un nouvel onglet",
    bannerDismiss: "Fermer la bannière de l’application",
  },

  home: {
    heroTitle: "Bâtir, faire fructifier, protéger et transmettre son patrimoine en toute clarté.",
    heroSubtitle: "Fundora forme la prochaine génération de familles prospères en Afrique.",
    heroNote:
      "Nous accompagnons les Africains, au pays comme à l’étranger, dans leurs investissements, la protection de leur patrimoine, la création de fiducies et la constitution d’héritages financiers durables.",
    valuesTitle: { before: "Aider les Africains du monde entier à bâtir", highlight: "un patrimoine durable", after: "" },
    values: ["Discipline", "Éthique", "Vision d’avenir"],
    audienceTitle: "Conçu pour les Africains qui prennent leur patrimoine au sérieux",
    audienceSubtitle: "Fundora accompagne :",
    audience: [
      "Les professionnels qui construisent leur sécurité financière à long terme",
      "Les familles qui préparent leur protection et leur héritage",
      "Les Africains de la diaspora qui gèrent leurs finances par-delà les frontières",
    ],
    frameworkTitle: "Une approche patrimoniale complète",
    frameworkTabs: "Approche patrimoniale",
    framework: [
      {
        title: "Investir",
        description: "Faites fructifier votre capital grâce à des solutions d’investissement structurées et fondées sur la recherche.",
        items: ["Fonds communs de placement", "Actions et titres à revenu fixe", "Investissements alternatifs"],
        cta: "Découvrir l’investissement",
        imageAlt: "Une courbe d’investissement verte en hausse",
      },
      {
        title: "Protéger",
        description: "Protégez vos revenus, vos biens et votre avenir.",
        items: ["Assurance vie et santé", "Protection du revenu", "Couverture des biens et des entreprises"],
        cta: "Découvrir la protection",
        imageAlt: "Un bouclier protecteur",
      },
      {
        title: "Conseil",
        description: "Bénéficiez d’un accompagnement personnalisé pour vos décisions financières complexes.",
        items: ["Consultation financière", "Gestion de patrimoine privée", "Accompagnement stratégique des entreprises"],
        cta: "Parler à un conseiller",
        imageAlt: "Le bureau d’un conseiller",
      },
    ],
    calmTitle: "La sérénité stratégique l’emporte sur les conseils bruyants",
    calmSubtitle: "Nous croyons que le patrimoine se construit grâce à :",
    calm: ["Une exécution disciplinée", "Une vision à long terme", "La conscience du risque", "Une pensée claire"],
    supportTitle: "Un accompagnement structuré à chaque étape",
    support: [
      { title: "FACAP", body: "Planification financière complète" },
      { title: "Gestion de patrimoine privée", body: "Une stratégie sur mesure pour les clients fortunés" },
      { title: "Consultations", body: "De la clarté pour les décisions clés" },
      { title: "Conseil aux entreprises", body: "Une structure financière au service de la croissance" },
    ],
    leadershipTitle: "Notre direction",
    leadershipSubtitle: "Guidés par l’expérience, l’intégrité et la vision :",
    leaderName: "Dr Seyi Abiodun",
    leaderRole: "Fondateur et stratège patrimonial en chef",
    leaderBody:
      "Fundora est dirigée par le Dr Seyi Abiodun, un professionnel de la finance chevronné, engagé à aider les Africains à bâtir et protéger leur patrimoine de manière responsable. Ici, on vous conseille, on ne vous vend rien.",
    leaderCta: "Découvrir notre direction",
    leaderAlt: "Dr Seyi Abiodun, fondateur de Fundora",
  },

  about: {
    heroTitle: "Fundora forme la prochaine génération de familles prospères en Afrique.",
    heroSubtitle:
      "Fundora est un cabinet de conseil en gestion de patrimoine qui aide les Africains à bâtir, faire fructifier, protéger et transmettre leur patrimoine avec discipline et une vision à long terme.",
    heroNote:
      "Nous accompagnons les Africains, au pays comme à l’étranger, dans leurs investissements, la protection de leur patrimoine, la création de fiducies et la constitution d’héritages financiers durables.",
    philosophyEyebrow: "Notre philosophie",
    philosophyTitle: "Le patrimoine doit inspirer la sérénité, pas le chaos",
    philosophySubtitle: "Nous croyons que :",
    philosophyAlt: "Un coffre-fort contenant une pièce de naira en or",
    philosophy: [
      "Le patrimoine se construit intentionnellement, pas par hasard",
      "Un bon conseil doit apaiser l’inquiétude, pas l’aggraver",
      "La réflexion à long terme l’emporte toujours sur les gains rapides",
    ],
    missionEyebrow: "Notre mission",
    missionTitle: "Former la prochaine génération de familles prospères en Afrique.",
    missionSubtitle: "Fundora existe pour transformer les revenus africains en un patrimoine durable grâce à :",
    mission: [
      "Une éducation financière de premier plan",
      "Un accompagnement stratégique en investissement",
      "Une protection solide du patrimoine et contre les risques",
      "Une planification patrimoniale sur plusieurs générations",
    ],
    visionEyebrow: "Notre vision",
    visionTitle: {
      before: "Devenir le",
      highlight: "partenaire patrimonial",
      after: "de confiance des premières familles africaines millionnaires, connectées au monde et financièrement indépendantes",
    },
    howTitle: "Notre méthode",
    howEyebrow: "Notre approche du conseil",
    howSubtitle: "Chaque relation avec Fundora repose sur quatre principes :",
    howAlt: "Une conseillère Fundora examinant le plan d’un client",
    principles: [
      { title: "La clarté d’abord", body: "Nous simplifions la complexité avant de recommander toute action." },
      { title: "Toujours structuré", body: "Chaque plan repose sur une méthode, pas sur l’émotion." },
      { title: "La protection compte", body: "Nous anticipons l’incertitude, pas seulement la croissance." },
      { title: "La vision à long terme", body: "Nous privilégions la durabilité, pas la spéculation." },
    ],
    leadershipTitle: "Une direction digne de confiance",
    leadershipSubtitle: "Guidés par l’expérience, l’intégrité et la vision :",
    followLeader: "Suivre le Dr Seyi Abiodun",
    leaderOn: "Dr Seyi Abiodun sur {network}",
    leaderBio: [
      "Le Dr Seyi Abiodun est un stratège financier doté d’une solide expérience dans le conseil aux particuliers, aux familles et aux entreprises en matière de création et de protection de patrimoine et de planification à long terme.",
      "Il est reconnu pour son approche sereine et structurée de la finance, qui aide ses clients à réfléchir clairement, à agir avec discernement et à planifier de manière responsable. Chez Fundora, le conseil n’est jamais précipité. Les clients sont accompagnés, jamais mis sous pression.",
    ],
  },

  invest: {
    heroTitle: "Investissez avec clarté, sans conjectures",
    heroSubtitle: "Faites fructifier votre argent grâce à des stratégies d’investissement structurées et à long terme.",
    heroNote:
      "Chez Fundora, investir ne consiste pas à suivre les modes ou à anticiper les marchés. Il s’agit de bâtir un patrimoine de façon réfléchie, avec des placements adaptés à vos objectifs, à votre horizon et à votre tolérance au risque.",
    productsTitle: "Actions et placements sur les marchés",
    productsCta: "Commencer à investir",
    products: [
      { title: "Actions américaines", body: "Achetez des actions d’entreprises américaines." },
      { title: "Actions nigérianes", body: "Achetez des actions d’entreprises locales." },
      { title: "Bons du Trésor", body: "Investissez dans des bons du Trésor de l’État." },
      { title: "Épargne en nairas", body: "Jusqu’à 16 % par an." },
      { title: "Rendements fixes", body: "Jusqu’à 6 % de rendement en dollars." },
      { title: "Portefeuille géré", body: "Confiez la gestion de vos fonds à un expert." },
    ],
  },

  protect: {
    heroTitle: "Le patrimoine croît plus vite lorsqu’il est bien protégé",
    heroSubtitle: "Protéger vos revenus, votre famille et vos biens donne à votre plan patrimonial force et résilience.",
    heroNote: "Chez Fundora, la protection n’est pas une affaire de peur. C’est une affaire de responsabilité, d’anticipation et de tranquillité d’esprit.",
  },

  insurance: {
    heroTitle: "Une protection d’exception, en toute confiance.",
    heroSubtitle:
      "Chez Fundora Insure Partnering Insuretech Limited, nous réinventons l’assurance pour en faire une expérience fluide et intelligente, pensée pour vous.",
    heroCta: "Choisir une formule d’assurance",
    redefiningTitle: "Réinventer l’assurance",
    redefining: [
      "Grâce à la solidité de notre partenariat de confiance, accéder à une couverture fiable et de qualité devient plus rapide, plus clair et parfaitement simple.",
      "Qu’il s’agisse de protéger votre véhicule, d’assurer votre avenir ou de voyager l’esprit tranquille, nos solutions sont conçues pour protéger ce qui compte le plus, avec souplesse et précision.",
    ],
    offeringsTitle: "Découvrez notre gamme de solutions :",
    offerings: [
      { title: "Assurance auto", body: "Roulez en toute confiance. Nous vous couvrons.", imageAlt: "Couverture d’assurance auto" },
      { title: "Assurance vie", body: "Protégez les personnes qui comptent le plus.", imageAlt: "Planification de l’assurance vie" },
      { title: "Assurance voyage", body: "Voyagez sereinement grâce à une protection fiable.", imageAlt: "Protection de l’assurance voyage" },
      { title: "Et plus encore…", body: "Une couverture pour chaque besoin.", imageAlt: "Autres solutions d’assurance" },
    ],
    carouselLabel: "Solutions d’assurance",
    showSlide: "Afficher : {item}",
  },

  programs: {
    heroTitle: "Un accompagnement structuré à chaque étape de votre patrimoine",
    heroSubtitle:
      "Chaque période de la vie appelle un niveau d’accompagnement différent. Fundora propose des programmes clairement définis, conçus pour vous rejoindre là où vous en êtes et vous guider avec structure et clarté.",
    heroNote: "Que vous débutiez, que vous vous développiez ou que vous affiniez votre vie financière, il existe un programme fait pour vous.",
    facapTitle: "FACAP",
    facap: [
      "Le Finance and Career Accountability Program (FACAP) est un parcours complet de planification financière destiné aux particuliers et aux familles qui souhaitent une vision et une maîtrise totales de leur vie financière.",
      "Ce programme réunit tous les domaines clés (revenus, investissements, protection et planification à long terme) dans une structure claire.",
    ],
    facapAlt: "Une séance FACAP où les participants examinent leurs plans",
    idealTitle: "FACAP est idéal si vous souhaitez :",
    ideal: [
      "Comprendre clairement la planification financière",
      "Apprendre à investir dans des actions et des titres à revenu fixe en tant que débutant",
    ],
    idealCta: "S’inscrire à la prochaine promotion FACAP",
    frameworkTitle: "Notre approche patrimoniale FACAP",
    offerings: [
      {
        title: "Consultation",
        body: "Toutes les situations ne nécessitent pas un programme sur le long terme. Parfois, une conversation claire suffit pour faire le bon choix.",
        items: [
          "Décisions d’investissement",
          "Questions d’assurance ou de protection",
          "Enjeux financiers transfrontaliers",
          "Planification de carrière, de revenus ou de transition",
        ],
        cta: "Réserver une consultation",
        imageAlt: "Une consultation entre un conseiller et un client",
      },
      {
        title: "Gestion de patrimoine privée",
        body: "La gestion de patrimoine privée s’adresse aux clients dont la vie financière est complexe et qui ont besoin d’une stratégie sur mesure, de discrétion et d’un suivi à long terme.",
        items: [
          "Stratégie d’investissement personnalisée",
          "Allocation d’actifs et diversification",
          "Intégration des risques et de la protection",
          "Préservation du patrimoine et préparation de la transmission",
        ],
        cta: "Demander un accompagnement privé",
        imageAlt: "Un conseiller en gestion de patrimoine en rendez-vous",
      },
      {
        title: "Conseil aux entreprises",
        body: "De la clarté financière pour les fondateurs et les chefs d’entreprise.",
        items: [
          "Structure et planification financières",
          "Visibilité sur la trésorerie",
          "Gestion des risques et continuité d’activité",
          "Aide à la décision stratégique",
        ],
        cta: "Réserver un conseil aux entreprises",
        imageAlt: "Deux chefs d’entreprise examinant des chiffres ensemble",
      },
    ],
    chooseEyebrow: "Comment choisir le bon programme",
    chooseTitle: "Commencez par la clarté",
    chooseSubtitle: "Si vous ne savez pas par où commencer :",
    choose: [
      "Choisissez la **Consultation** pour une clarté immédiate",
      "Choisissez **FACAP** pour une structure financière personnelle complète",
      "Choisissez la **Gestion de patrimoine privée** pour un accompagnement sur mesure à long terme",
      "Choisissez le **Conseil aux entreprises** pour un soutien centré sur votre entreprise",
    ],
  },

  download: {
    title: "Votre patrimoine, dans votre poche.",
    body: "Téléchargez l’application Fundora pour ouvrir votre compte, investir et gérer vos assurances depuis votre téléphone.",
    highlights: [
      "Investissez dans des fonds, des actions et des titres à revenu fixe",
      "Souscrivez et gérez vos assurances",
      "Suivez tout votre portefeuille au même endroit",
    ],
    chooseStore: "Choisissez votre boutique",
  },

  contact: {
    title: "Contact",
    subtitle: "Une question sur l’investissement, l’assurance ou nos programmes ? Parlez à un conseiller ou lancez-vous dans l’application Fundora.",
    consultTitle: "Parler à un conseiller",
    consultBody: "Réservez une consultation de 30 minutes au moment qui vous convient.",
    appTitle: "Commencez dans l’application",
    appBody: "Ouvrez votre compte, investissez et gérez vos assurances depuis votre téléphone.",
    directTitle: "Nous joindre directement",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    officeLabel: "Bureau",
    faqPrompt: "Vous cherchez une réponse rapide ?",
    faqLink: "Consultez nos questions fréquentes",
  },

  notFound: {
    message: "Cette page est introuvable.",
    home: "Retour à l’accueil",
  },

  legal: {
    company: "Fundora Technologies Ltd",
    effectiveDate: "Date d’entrée en vigueur :",
    version: "Version :",
    contents: "Sommaire",
    sections: "Sections : {title}",
    email: "E-mail :",
    address: "Adresse :",
    phone: "Téléphone :",
    approvedBy: "Approuvé par",
    board: "Le conseil d’administration",
    translationNotice:
      "Cette traduction est fournie à titre indicatif. En cas de divergence avec la version anglaise, la version anglaise prévaut.",
    readEnglish: "Lire la version anglaise",
  },
};

export default fr;
