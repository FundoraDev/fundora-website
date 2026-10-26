import type { Faq } from "./en";

//   is the narrow no-break space French typography puts before ? ! : ;
const fr: Faq = {
  title: "Questions fréquentes",
  intro: "Des réponses rapides sur Fundora, l’application, l’investissement, l’assurance, nos programmes et la sécurité de votre compte.",
  jumpTo: "Aller à un thème",
  stillTitle: "Vous avez encore une question ?",
  stillBody: "Parlez à un conseiller ou lancez-vous dans l’application Fundora.",
  groups: [
    {
      id: "about",
      title: "À propos de Fundora",
      items: [
        {
          q: "Qu’est-ce que Fundora ?",
          a: [
            "Fundora est une place de marché d’investissement numérique axée sur la technologie, conçue pour les Nigérians au Nigeria et dans la diaspora. Nous vous aidons à découvrir, comparer et accéder à des produits financiers agréés, comme des investissements et des assurances, par l’intermédiaire d’établissements partenaires réglementés.",
            "En plus de l’application, Fundora vous accompagne grâce à des consultations, à notre programme FACAP, à la gestion de patrimoine privée et au conseil aux entreprises.",
          ],
        },
        {
          q: "À qui s’adresse Fundora ?",
          a: [
            "Fundora est conçue pour les Africains qui prennent leur patrimoine au sérieux : les professionnels qui construisent leur sécurité financière à long terme, les familles qui préparent leur protection et leur héritage, et les Africains de la diaspora qui gèrent leurs finances par-delà les frontières.",
          ],
        },
        {
          q: "Fundora détient-elle mon argent ?",
          a: [
            "Non. Fundora n’agit pas en tant que gestionnaire d’actifs, courtier ou dépositaire. Tous les fonds des clients sont détenus et gérés par des dépositaires et prestataires agréés.",
            "Fundora fournit la technologie qui les entoure : l’intégration numérique, l’orchestration des portefeuilles (registre comptable uniquement), l’acheminement des transactions et le reporting consolidé des portefeuilles.",
          ],
        },
        {
          q: "Qui dirige Fundora ?",
          a: [
            "Fundora est dirigée par le Dr Seyi Abiodun, notre fondateur et stratège patrimonial en chef. Découvrez son parcours sur notre [page À propos](/about#leadership).",
          ],
        },
      ],
    },
    {
      id: "app",
      title: "Bien démarrer avec l’application",
      items: [
        {
          q: "Comment ouvrir un compte ?",
          a: [
            "Téléchargez l’application Fundora et suivez le processus d’intégration. Il pourra vous être demandé des informations d’identification personnelle, vos coordonnées, des documents justificatifs et, si nécessaire, des informations financières.",
            "Fundora vérifie ces informations par l’intermédiaire de prestataires de vérification agréés. Veillez donc à ce que tout ce que vous fournissez soit exact.",
          ],
        },
        {
          q: "L’application Fundora est-elle disponible sur iPhone ?",
          a: [
            "L’application Android est disponible dès maintenant sur **Google Play**. L’application iPhone arrivera bientôt sur l’App Store. Vous les trouverez toutes les deux sur notre [page de téléchargement](/download).",
          ],
        },
        {
          q: "Qu’est-ce que le compte virtuel Fundora ?",
          a: [
            "Une fois votre intégration terminée, Fundora peut créer pour vous un compte virtuel personnalisé auprès de l’une des banques commerciales du Nigeria. Il sert à financer vos choix d’investissement, à enregistrer vos transactions et à traiter vos paiements.",
            "Le compte virtuel n’est pas nécessairement un compte bancaire traditionnel, sauf mention expresse.",
          ],
        },
        {
          q: "Fundora facture-t-elle des frais ?",
          a: [
            "Fundora peut facturer des frais pour certains services. Les frais applicables vous sont toujours présentés avant que vous finalisiez une transaction, pour que vous connaissiez le coût avant de vous engager.",
          ],
        },
      ],
    },
    {
      id: "investing",
      title: "Investissement",
      items: [
        {
          q: "Dans quoi puis-je investir ?",
          a: [
            "L’application vous donne accès aux actions américaines, aux actions nigérianes, aux bons du Trésor, à l’épargne en nairas, à des produits à rendement fixe et à des portefeuilles gérés, ainsi qu’à des fonds communs de placement et à des investissements alternatifs. Pour en savoir plus, consultez notre [page Investir](/invest).",
          ],
        },
        {
          q: "Les rendements sont-ils garantis ?",
          a: [
            "Non. Tout investissement comporte des risques. La valeur d’un investissement peut baisser comme monter, et vous pouvez perdre tout ou partie des sommes investies. Les performances passées ne préjugent pas des résultats futurs.",
            "Les mentions comme « jusqu’à 16 % par an » indiquent ce qu’un produit peut rapporter, pas une promesse. Prenez connaissance des informations de chaque produit avant d’investir.",
          ],
        },
        {
          q: "Qui propose les produits d’investissement ?",
          a: [
            "Les produits d’investissement de la plateforme sont proposés par des établissements tiers et des partenaires d’investissement agréés. Ils peuvent avoir leurs propres conditions générales, avertissements sur les risques et documents d’investissement, à lire avant d’investir.",
          ],
        },
        {
          q: "Fundora donne-t-elle des conseils en investissement ?",
          a: [
            "Les informations de l’application sont générales et ne constituent pas un conseil personnalisé. Vos décisions d’investissement vous appartiennent.",
            "Si vous souhaitez un accompagnement personnalisé, vous pouvez [réserver une consultation](/contact-us) avec un conseiller ou découvrir nos [programmes](/programs).",
          ],
        },
      ],
    },
    {
      id: "insurance",
      title: "Assurance",
      items: [
        {
          q: "Quelles assurances puis-je souscrire avec Fundora ?",
          a: [
            "Fundora propose l’assurance auto, l’assurance vie et l’assurance voyage, et bien plus encore. Nos assurances sont proposées par Fundora Insure Partnering Insuretech Limited. Consultez notre [page Assurance](/insurance).",
          ],
        },
        {
          q: "Comment souscrire ou gérer mon assurance ?",
          a: ["Vous pouvez choisir une formule, souscrire et gérer votre assurance dans l’application Fundora."],
        },
      ],
    },
    {
      id: "programs",
      title: "Programmes et conseil",
      items: [
        {
          q: "Qu’est-ce que FACAP ?",
          a: [
            "Le Finance and Career Accountability Program (FACAP) est un parcours complet de planification financière destiné aux particuliers et aux familles qui souhaitent une vision et une maîtrise totales de leur vie financière. Il réunit les revenus, l’investissement, la protection et la planification à long terme dans une structure claire.",
          ],
        },
        {
          q: "Comment rejoindre la prochaine promotion FACAP ?",
          a: ["Vous pouvez vous inscrire à la prochaine promotion depuis notre [page Programmes](/programs)."],
        },
        {
          q: "Quel programme me convient ?",
          a: [
            "Choisissez la **Consultation** pour une clarté immédiate sur une décision précise, **FACAP** pour une structure financière personnelle complète, la **Gestion de patrimoine privée** pour un accompagnement sur mesure à long terme, et le **Conseil aux entreprises** pour un soutien centré sur votre entreprise.",
            "En cas de doute, une consultation est un bon point de départ.",
          ],
        },
        {
          q: "Comment réserver une consultation ?",
          a: [
            "Vous pouvez réserver en ligne une consultation de 30 minutes au moment qui vous convient. Utilisez l’un des boutons **Réserver une consultation** du site ou rendez-vous sur notre [page Contact](/contact-us).",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Sécurité et confidentialité",
      items: [
        {
          q: "Comment mon compte est-il protégé ?",
          a: [
            "Fundora protège votre compte grâce à l’authentification à deux facteurs, à la vérification biométrique comme l’empreinte digitale lorsque votre appareil le permet, au chiffrement (notamment la technologie Tremble Vault), à des contrôles d’accès et à une surveillance de la sécurité.",
            "Gardez vos identifiants confidentiels et prévenez-nous immédiatement si vous pensez qu’une autre personne a accédé à votre compte.",
          ],
        },
        {
          q: "Fundora vend-elle mes données ?",
          a: [
            "Non. Fundora ne vend pas les informations personnelles de ses clients. Nous ne les partageons qu’avec les partenaires qui nous aident à fournir le service, comme les prestataires d’investissement, de paiement et de vérification, ou avec les autorités de régulation lorsque la loi l’exige. Notre [Politique de confidentialité](/privacy) l’explique en détail.",
          ],
        },
        {
          q: "Comment supprimer mon compte ?",
          a: [
            "Vous pouvez supprimer votre compte dans l’application Fundora, dans **Settings → Delete Account** (Paramètres → Supprimer le compte). Retirez d’abord le solde de votre portefeuille et sortez de vos investissements, car la suppression est immédiate et définitive.",
            "Notre Politique de confidentialité détaille [chaque étape et ce qu’il advient de vos données](/privacy#account-deletion).",
          ],
        },
      ],
    },
  ],
};

export default fr;
