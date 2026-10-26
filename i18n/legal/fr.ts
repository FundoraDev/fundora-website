import type { LegalDocuments } from "./en";

// French translation of the legal documents. The English text prevails; the
// page says so above every translated document.   is the narrow no-break
// space French typography puts before : ; ? ! and inside « ».
const fr: LegalDocuments = {
  privacy: {
    title: "Politique de confidentialité",
    metaTitle: "Politique de confidentialité | Fundora",
    description:
      "Comment Fundora Technologies Ltd collecte, utilise, conserve, protège et communique les informations personnelles.",
    contactLabel: "Nous contacter",
    intro: [
      { p: "Fundora Technologies Ltd (« Fundora », « nous », « notre ») respecte votre vie privée et s’engage à protéger vos informations personnelles." },
      { p: "La présente Politique de confidentialité explique comment nous collectons, utilisons, conservons, protégeons et communiquons les informations personnelles lorsque vous utilisez notre plateforme, notre site web, notre application mobile et les services associés." },
    ],
    sections: [
      {
        id: "information-collected",
        title: "1. Informations que nous collectons",
        blocks: [
          { p: "Nous pouvons collecter les catégories d’informations suivantes :" },
          { h: "Informations personnelles" },
          { p: "Notamment :" },
          { ol: ["nom complet ;", "date de naissance ;", "informations d’identification ;", "informations de résidence ;", "coordonnées ;", "informations de vérification du client."], type: "a" },
          { h: "Informations relatives au compte" },
          { p: "Notamment :" },
          { ol: ["nom d’utilisateur ;", "identifiants de connexion ;", "préférences du compte ;", "coordonnées du Compte virtuel ;", "historique des transactions."], type: "a" },
          { h: "Informations techniques" },
          { p: "Notamment :" },
          { ol: ["informations sur l’appareil ;", "adresse IP ;", "journaux d’accès ;", "informations d’utilisation ;", "données de sécurité."], type: "a" },
          { h: "Informations biométriques" },
          { p: "Lorsque cette fonction est activée, Fundora peut traiter des identifiants biométriques, tels que des données d’authentification par empreinte digitale, aux fins de vérification d’identité et de sécurité du compte." },
        ],
      },
      {
        id: "how-we-collect",
        title: "2. Comment nous collectons les informations",
        blocks: [
          { p: "Nous collectons des informations par le biais :" },
          { ol: ["de l’inscription des clients ;", "des processus d’intégration ;", "des échanges avec les clients ;", "de l’utilisation de la Plateforme ;", "des systèmes de sécurité et de vérification."], type: "a" },
        ],
      },
      {
        id: "purposes",
        title: "3. Finalités du traitement des informations",
        blocks: [
          { p: "Fundora traite les informations des clients à des fins notamment de :" },
          {
            ol: [
              "création et gestion des comptes clients ;",
              "fourniture des services de la Plateforme ;",
              "facilitation de l’accès aux investissements ;",
              "tenue des Comptes virtuels ;",
              "vérification de l’identité ;",
              "prévention de la fraude ;",
              "respect des obligations légales ;",
              "amélioration de l’expérience client.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "data-security",
        title: "4. Sécurité des données",
        blocks: [
          { p: "Fundora applique des mesures techniques et organisationnelles destinées à protéger les informations des clients." },
          { p: "Les mesures de sécurité comprennent :" },
          {
            ol: [
              "l’authentification à deux facteurs ;",
              "des contrôles d’authentification biométrique ;",
              "des technologies de chiffrement ;",
              "le stockage sécurisé des données ;",
              "des contrôles d’accès restreint ;",
              "une surveillance et des examens de sécurité.",
            ],
            type: "a",
          },
          { p: "Les informations des clients sont chiffrées au moyen de systèmes de chiffrement sécurisés, notamment la technologie Tremble Vault." },
        ],
      },
      {
        id: "data-sharing",
        title: "5. Partage des données",
        blocks: [
          { p: "Fundora peut partager des informations avec :" },
          {
            ol: [
              "des partenaires d’investissement ;",
              "des prestataires de services de paiement ;",
              "des prestataires de vérification ;",
              "des prestataires de services technologiques ;",
              "des autorités de régulation ou des autorités publiques lorsque la loi l’exige.",
            ],
            type: "a",
          },
          { p: "Fundora ne vend pas les informations personnelles de ses clients." },
        ],
      },
      {
        id: "data-retention",
        title: "6. Conservation des données",
        blocks: [
          { p: "Fundora ne conserve les informations personnelles que le temps nécessaire pour :" },
          { ol: ["fournir ses services ;", "respecter ses obligations légales ;", "résoudre les litiges ;", "faire appliquer les accords ;", "tenir les registres de sécurité."], type: "a" },
        ],
      },
      {
        id: "customer-rights",
        title: "7. Droits des clients",
        blocks: [
          { p: "Sous réserve de la législation applicable, les clients peuvent disposer du droit de :" },
          {
            ol: [
              "accéder à leurs informations personnelles ;",
              "demander la rectification d’informations inexactes ;",
              "demander leur suppression le cas échéant ;",
              "s’opposer à certains traitements ;",
              "retirer leur consentement lorsque le traitement repose sur celui-ci.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "account-deletion",
        title: "8. Supprimer votre compte",
        blocks: [
          { h: "Comment supprimer votre compte" },
          { p: "La suppression du compte est disponible dans l’application pour les utilisateurs connectés :" },
          {
            ol: [
              "Ouvrez l’application Fundora et accédez à **Settings → Delete Account** (Paramètres → Supprimer le compte).",
              "Lisez l’écran d’avertissement, qui explique que la suppression est définitive, que vous perdrez l’accès à votre portefeuille, à vos investissements et à l’historique de votre portefeuille, et que vous devez d’abord retirer le solde de votre portefeuille et sortir de vos investissements. Appuyez sur **Continue** (Continuer).",
              "Nous envoyons un code de vérification à 6 chiffres à l’adresse e-mail associée à votre compte. Saisissez ce code, tapez **DELETE** dans le champ de confirmation, puis appuyez sur **Delete my account** (Supprimer mon compte). Si vous ne recevez pas de code, vous pouvez en demander un nouveau au bout de 30 secondes.",
            ],
            type: "1",
          },
          { p: "La validation du code supprime immédiatement votre compte. Il n’existe aucun délai de grâce ni aucun moyen de le restaurer ensuite. Vous serez automatiquement déconnecté." },
          { h: "Avant de supprimer votre compte" },
          { p: "La suppression de votre compte ne retire pas le solde de votre portefeuille et ne vous fait pas sortir de vos investissements à votre place. Veuillez retirer tout solde de votre portefeuille et sortir de vos investissements en cours avant de supprimer votre compte." },
          { h: "Ce qui est supprimé" },
          { p: "La suppression de votre compte efface votre profil, vos informations personnelles et KYC, votre portefeuille ainsi que l’historique de vos investissements et de votre portefeuille, et vous perdez immédiatement l’accès à ces éléments." },
          { h: "Ce que nous conservons, et pourquoi" },
          { p: "Nous sommes tenus de conserver certains registres de transactions, de KYC et de lutte contre le blanchiment de capitaux afin de respecter la réglementation applicable aux services financiers et à la lutte contre le blanchiment. Ces registres sont conservés pendant **[TODO: insert statutory retention period and governing regulation]**, puis supprimés ou anonymisés." },
          { h: "Délais" },
          { p: "La suppression de votre compte et de l’accès à celui-ci est immédiate et irréversible. Les registres réglementés que nous sommes tenus de conserver suivent la durée de conservation décrite ci-dessus." },
          { h: "Vous ne pouvez pas accéder à l’application ?" },
          { p: "Si vous ne pouvez pas accéder à l’application, vous pouvez demander la suppression de votre compte en écrivant à **[TODO: insert support/privacy email address]**." },
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies et technologies similaires",
        blocks: [
          { p: "Fundora peut utiliser des cookies et des technologies similaires pour :" },
          { ol: ["améliorer le fonctionnement de la Plateforme ;", "analyser l’utilisation ;", "renforcer la sécurité ;", "personnaliser l’expérience utilisateur."], type: "a" },
        ],
      },
      {
        id: "international-transfers",
        title: "10. Transferts internationaux de données",
        blocks: [
          { p: "Lorsque des informations de clients sont transférées entre différentes juridictions, Fundora prend des mesures raisonnables pour garantir l’application de mesures de protection appropriées." },
        ],
      },
      {
        id: "childrens-privacy",
        title: "11. Protection des données des mineurs",
        blocks: [
          { p: "La Plateforme n’est pas destinée aux personnes juridiquement incapables de conclure des accords contraignants." },
          { p: "Fundora ne collecte pas sciemment d’informations auprès de personnes qui ne remplissent pas les conditions d’âge applicables." },
        ],
      },
      {
        id: "changes",
        title: "12. Modifications de la présente Politique de confidentialité",
        blocks: [
          { p: "Fundora peut mettre à jour périodiquement la présente Politique de confidentialité." },
          { p: "Les modifications seront communiquées par les canaux appropriés." },
        ],
      },
      {
        id: "contact",
        title: "13. Nous contacter",
        blocks: [{ p: "Pour toute question relative à la confidentialité :" }],
      },
    ],
  },

  terms: {
    title: "Conditions générales",
    metaTitle: "Conditions générales | Fundora",
    description: "Conditions générales régissant l’accès à la plateforme et aux services de Fundora Technologies Ltd et leur utilisation.",
    contactLabel: "Coordonnées",
    intro: [
      { p: "Les présentes Conditions générales (les « Conditions ») régissent l’accès à la plateforme de Fundora Technologies Ltd (la « Plateforme »), à son site web, à son application mobile, à ses produits et aux services associés (les « Services »), ainsi que leur utilisation." },
      { p: "Fundora Technologies Ltd (« Fundora », « nous » ou « notre ») est une entreprise technologique qui fournit une plateforme numérique permettant aux clients (les « Utilisateurs », les « Clients » ou « vous ») d’accéder à des opportunités d’investissement proposées par des fournisseurs d’investissement tiers et/ou des partenaires d’investissement." },
      { p: "En vous inscrivant, en accédant à la Plateforme ou en l’utilisant, vous acceptez d’être lié par les présentes Conditions." },
    ],
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptation des Conditions",
        blocks: [
          { p: "En créant un compte, en accédant à la Plateforme ou en utilisant l’un des Services, vous confirmez que :" },
          {
            ol: [
              "vous avez lu et compris les présentes Conditions ;",
              "vous acceptez de respecter l’ensemble des lois et réglementations applicables ;",
              "toutes les informations que vous avez fournies sont exactes, complètes et à jour ; et",
              "vous assumez la responsabilité de votre utilisation de la Plateforme.",
            ],
            type: "a",
          },
          { p: "Si vous n’acceptez pas les présentes Conditions, vous devez cesser d’utiliser la Plateforme." },
        ],
      },
      {
        id: "about-fundora",
        title: "2. À propos de Fundora",
        blocks: [
          { p: "Fundora fournit une plateforme technologique qui met les clients en relation avec des opportunités d’investissement et facilite l’accès à des produits d’investissement proposés par des partenaires d’investissement agréés." },
          { p: "Fundora agit en tant qu’intermédiaire et facilitateur technologique. Fundora ne :" },
          {
            ol: [
              "garantit pas la performance des investissements ;",
              "fournit pas de conseil personnalisé en matière d’investissement, juridique, fiscale ou financière, sauf mention expresse ;",
              "promet ni n’assure aucun rendement ;",
              "se substitue pas à un conseil professionnel indépendant.",
            ],
            type: "a",
          },
          { p: "Toutes les décisions d’investissement relèvent exclusivement du Client." },
        ],
      },
      {
        id: "registration",
        title: "3. Inscription et intégration",
        blocks: [
          { p: "Pour accéder à la Plateforme, les Clients doivent suivre le processus d’intégration de Fundora." },
          { p: "Lors de l’intégration, les Clients peuvent être invités à fournir :" },
          {
            ol: [
              "des informations d’identification personnelle ;",
              "des coordonnées ;",
              "des documents justificatifs ;",
              "des informations financières si nécessaire ;",
              "toute autre information requise à des fins de conformité.",
            ],
            type: "a",
          },
          { p: "Fundora se réserve le droit de vérifier les informations des Clients par l’intermédiaire de prestataires de vérification agréés." },
          { p: "La fourniture d’informations inexactes peut entraîner la suspension ou la résiliation de l’accès." },
        ],
      },
      {
        id: "virtual-account",
        title: "4. Compte virtuel personnalisé",
        blocks: [
          { p: "Une fois l’intégration réussie, Fundora peut, par l’intermédiaire de l’une des banques commerciales du Nigeria, créer un compte virtuel personnalisé (le « Compte virtuel ») pour chaque Client." },
          { p: "Le Compte virtuel est fourni pour :" },
          {
            ol: [
              "faciliter les choix d’investissement du Client ;",
              "enregistrer les transactions ;",
              "permettre le traitement des paiements et des investissements ;",
              "améliorer l’expérience du Client sur la Plateforme.",
            ],
            type: "a",
          },
          { p: "Le Compte virtuel ne constitue pas nécessairement un compte bancaire traditionnel, sauf mention expresse." },
          { p: "Les Clients reconnaissent que l’utilisation du Compte virtuel est soumise à la réglementation financière applicable et aux conditions des partenaires financiers concernés." },
        ],
      },
      {
        id: "investment-services",
        title: "5. Services d’investissement",
        blocks: [
          { p: "Les Clients peuvent accéder aux opportunités d’investissement disponibles par l’intermédiaire de la Plateforme." },
          { p: "Les Clients reconnaissent que :" },
          {
            ol: [
              "tout investissement comporte des risques ;",
              "les performances passées ne préjugent pas des résultats futurs ;",
              "les décisions d’investissement sont prises volontairement ;",
              "les rendements ne sont pas garantis.",
            ],
            type: "a",
          },
          { p: "Il incombe aux Clients d’examiner toutes les informations disponibles sur un investissement avant de prendre une décision." },
        ],
      },
      {
        id: "customer-responsibilities",
        title: "6. Responsabilités du Client",
        blocks: [
          { p: "Les Clients doivent :" },
          {
            ol: [
              "préserver la confidentialité de leurs identifiants de connexion ;",
              "fournir des informations exactes ;",
              "mettre à jour rapidement leurs informations si nécessaire ;",
              "respecter les exigences de sécurité ;",
              "éviter tout accès non autorisé ou toute utilisation abusive de la Plateforme.",
            ],
            type: "a",
          },
          { p: "Les Clients doivent informer immédiatement Fundora de tout accès non autorisé présumé." },
        ],
      },
      {
        id: "security-measures",
        title: "7. Mesures de sécurité",
        blocks: [
          { p: "Fundora met en œuvre des mesures de sécurité destinées à protéger les comptes et les informations des Clients, notamment :" },
          {
            ol: [
              "l’authentification à deux facteurs ;",
              "la vérification biométrique, y compris l’authentification par empreinte digitale lorsqu’elle est prise en charge ;",
              "des mesures de chiffrement et de stockage sécurisé ;",
              "des contrôles d’accès ;",
              "des systèmes de surveillance.",
            ],
            type: "a",
          },
          { p: "Les Clients reconnaissent qu’aucun système numérique ne peut garantir une sécurité absolue." },
        ],
      },
      {
        id: "fees",
        title: "8. Frais",
        blocks: [
          { p: "Fundora peut facturer des frais pour certains Services." },
          { p: "Les frais applicables seront communiqués avant la finalisation de toute transaction." },
          { p: "Fundora se réserve le droit de modifier ses frais moyennant un préavis raisonnable." },
        ],
      },
      {
        id: "prohibited-use",
        title: "9. Utilisations interdites",
        blocks: [
          { p: "Les Clients s’interdisent de :" },
          {
            ol: [
              "utiliser la Plateforme de manière illicite ;",
              "tenter de compromettre la sécurité de la Plateforme ;",
              "usurper l’identité d’une autre personne ;",
              "fournir de fausses informations ;",
              "perturber le fonctionnement de la Plateforme.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "suspension",
        title: "10. Suspension et résiliation",
        blocks: [
          { p: "Fundora peut suspendre ou résilier l’accès lorsque :" },
          {
            ol: [
              "les présentes Conditions ne sont pas respectées ;",
              "une activité frauduleuse est suspectée ;",
              "la loi l’exige ;",
              "des risques de sécurité apparaissent ;",
              "des exigences réglementaires imposent une telle mesure.",
            ],
            type: "a",
          },
          { p: "Vous pouvez également supprimer vous-même votre compte à tout moment depuis l’application. Consultez la section [Supprimer votre compte](/privacy#account-deletion) de notre Politique de confidentialité pour savoir comment procéder et ce qu’il advient de vos données." },
        ],
      },
      {
        id: "third-party",
        title: "11. Services tiers",
        blocks: [
          { p: "La Plateforme peut intégrer des services tiers, notamment des prestataires de paiement, des partenaires d’investissement et des prestataires de vérification." },
          { p: "Fundora n’est pas responsable des actes, omissions, produits ou services indépendants de tiers." },
        ],
      },
      {
        id: "intellectual-property",
        title: "12. Propriété intellectuelle",
        blocks: [
          { p: "Tous les droits de propriété intellectuelle relatifs à la Plateforme, y compris les logiciels, le design, les marques, les contenus et les systèmes, appartiennent à Fundora ou à ses concédants de licence." },
          { p: "Les Utilisateurs bénéficient d’une licence limitée et non transférable d’utilisation de la Plateforme." },
        ],
      },
      {
        id: "limitation-of-liability",
        title: "13. Limitation de responsabilité",
        blocks: [
          { p: "Dans toute la mesure permise par la loi, Fundora ne saurait être tenue responsable :" },
          {
            ol: [
              "des pertes sur investissement ;",
              "des fluctuations du marché ;",
              "des défaillances de tiers ;",
              "des pertes indirectes ou consécutives ;",
              "des accès non autorisés résultant d’une négligence du Client.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "indemnity",
        title: "14. Indemnisation",
        blocks: [
          { p: "Les Clients s’engagent à indemniser Fundora contre toute réclamation, perte, responsabilité ou dépense découlant :" },
          { ol: ["d’une violation des présentes Conditions ;", "d’une utilisation abusive de la Plateforme ;", "d’une violation de la législation applicable."], type: "a" },
        ],
      },
      {
        id: "changes",
        title: "15. Modifications des présentes Conditions",
        blocks: [
          { p: "Fundora peut modifier les présentes Conditions à tout moment." },
          { p: "Les Conditions mises à jour seront publiées par les canaux appropriés." },
          { p: "La poursuite de l’utilisation de la Plateforme vaut acceptation des Conditions mises à jour." },
        ],
      },
      {
        id: "governing-law",
        title: "16. Droit applicable",
        blocks: [{ p: "Les présentes Conditions sont régies et interprétées conformément aux lois de la République fédérale du Nigeria." }],
      },
      {
        id: "contact",
        title: "17. Coordonnées",
        blocks: [{ p: "Pour toute question concernant les présentes Conditions :" }],
      },
    ],
  },

  policy: {
    title: "Politique de sécurité de l’information",
    metaTitle: "Politique de sécurité de l’information | Fundora",
    description:
      "Le cadre utilisé par Fundora Technologies Ltd pour protéger ses systèmes, ses applications, les informations de ses clients et son infrastructure technologique.",
    contactLabel: "",
    intro: [],
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        blocks: [
          { p: "Fundora Technologies Ltd considère la sécurité de l’information comme une composante essentielle de ses activités. La présente Politique de sécurité de l’information établit le cadre de protection des systèmes, des applications, des informations clients, des données d’entreprise et de l’infrastructure technologique de Fundora." },
        ],
      },
      {
        id: "objectives",
        title: "2. Objectifs",
        blocks: [
          { p: "La présente Politique vise à garantir :" },
          {
            ol: [
              "la confidentialité des informations ;",
              "l’intégrité des systèmes et des données ;",
              "la disponibilité des services ;",
              "la prévention des accès non autorisés ;",
              "une réponse efficace aux incidents de sécurité.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "governance",
        title: "3. Gouvernance de la sécurité de l’information",
        blocks: [
          { p: "Fundora maintient une structure de gouvernance de la sécurité de l’information composée :" },
          { h: "Du conseil d’administration" },
          { p: "Responsable de :" },
          { ul: ["la supervision ;", "l’approbation de la stratégie de sécurité ;", "la surveillance des risques."] },
          { h: "De la direction" },
          { p: "Responsable de :" },
          { ul: ["la mise en œuvre ;", "l’allocation des ressources ;", "l’application des règles."] },
          { h: "De l’équipe technologie/sécurité" },
          { p: "Responsable de :" },
          { ul: ["la protection des systèmes ;", "la surveillance ;", "la réponse aux incidents."] },
        ],
      },
      {
        id: "classification",
        title: "4. Classification des informations",
        blocks: [
          { p: "Fundora classe les informations comme suit :" },
          { h: "Confidentielles" },
          { p: "Exemples :" },
          { ul: ["données d’identité des clients ;", "informations financières ;", "données d’authentification."] },
          { h: "Internes" },
          { p: "Exemples :" },
          { ul: ["procédures internes ;", "documents opérationnels."] },
          { h: "Publiques" },
          { p: "Exemples :" },
          { ul: ["informations publiées."] },
        ],
      },
      {
        id: "access-control",
        title: "5. Politique de contrôle d’accès",
        blocks: [
          { p: "Fundora applique :" },
          { ol: ["des comptes utilisateurs uniques ;", "une authentification forte ;", "le principe du moindre privilège ;", "des autorisations fondées sur les rôles ;", "des revues d’accès périodiques."], type: "a" },
        ],
      },
      {
        id: "authentication",
        title: "6. Authentification et sécurité des comptes",
        blocks: [
          { p: "Les contrôles de sécurité comprennent :" },
          { ol: ["l’authentification à deux facteurs ;", "la vérification biométrique ;", "des exigences de mots de passe sécurisés ;", "des contrôles de session ;", "la surveillance des connexions."], type: "a" },
        ],
      },
      {
        id: "encryption",
        title: "7. Politique de chiffrement",
        blocks: [
          { p: "Fundora chiffre les informations sensibles :" },
          { ul: ["lors de leur transmission ;", "lors de leur stockage ;", "lors de leur traitement, le cas échéant."] },
          { p: "Les contrôles de chiffrement incluent des technologies de chiffrement sécurisées, notamment Tremble Vault." },
        ],
      },
      {
        id: "system-security",
        title: "8. Sécurité des systèmes",
        blocks: [
          { p: "Fundora maintient :" },
          {
            ol: [
              "des pratiques de développement logiciel sécurisées ;",
              "une gestion des vulnérabilités ;",
              "une surveillance des systèmes ;",
              "des tests de sécurité ;",
              "une gestion des correctifs.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "application-security",
        title: "9. Sécurité des applications",
        blocks: [
          { p: "Les applications Fundora sont développées et maintenues avec :" },
          { ul: ["des pratiques de codage sécurisé ;", "des contrôles d’accès ;", "des exigences d’authentification ;", "des tests de sécurité."] },
        ],
      },
      {
        id: "network-security",
        title: "10. Sécurité du réseau",
        blocks: [
          { p: "Fundora met en œuvre :" },
          { ol: ["une surveillance du réseau ;", "des contrôles par pare-feu ;", "des mesures de détection des intrusions ;", "des protocoles de communication sécurisés."], type: "a" },
        ],
      },
      {
        id: "third-party",
        title: "11. Sécurité des tiers",
        blocks: [
          { p: "Les tiers font l’objet d’une évaluation avant tout accès aux systèmes de Fundora." },
          { p: "Les exigences peuvent inclure :" },
          { ul: ["des examens de sécurité ;", "des accords de confidentialité ;", "des obligations de conformité ;", "des restrictions d’accès."] },
        ],
      },
      {
        id: "incident-response",
        title: "12. Réponse aux incidents",
        blocks: [
          { p: "Fundora maintient un processus de réponse aux incidents." },
          { p: "Les incidents de sécurité sont :" },
          { ol: ["détectés ;", "contenus ;", "analysés ;", "résolus ;", "documentés."], type: "a" },
        ],
      },
      {
        id: "business-continuity",
        title: "13. Continuité d’activité et reprise après sinistre",
        blocks: [
          { p: "Fundora maintient des mesures comprenant notamment :" },
          { ul: ["des sauvegardes ;", "des procédures de reprise ;", "une planification de la continuité ;", "des processus de restauration des systèmes."] },
        ],
      },
      {
        id: "employee-awareness",
        title: "14. Sensibilisation des employés à la sécurité",
        blocks: [
          { p: "Les employés reçoivent une formation portant sur :" },
          { ul: ["la sensibilisation à la cybersécurité ;", "la prévention de l’hameçonnage ;", "la protection des mots de passe ;", "le traitement des données."] },
        ],
      },
      {
        id: "monitoring-audit",
        title: "15. Surveillance et audit",
        blocks: [
          { p: "Fundora peut réaliser :" },
          { ul: ["des évaluations de sécurité ;", "des audits de systèmes ;", "des revues d’accès ;", "des évaluations de vulnérabilités."] },
        ],
      },
      {
        id: "policy-breaches",
        title: "16. Manquements à la Politique",
        blocks: [
          { p: "Toute violation de la présente Politique peut entraîner :" },
          { ul: ["des restrictions d’accès ;", "des mesures disciplinaires ;", "un licenciement ;", "un signalement aux autorités de régulation."] },
        ],
      },
      {
        id: "review",
        title: "17. Révision",
        blocks: [{ p: "La présente Politique est révisée périodiquement afin d’en garantir l’efficacité." }],
      },
    ],
  },

  disclosures: {
    title: "Informations réglementaires",
    metaTitle: "Informations réglementaires | Fundora",
    description: "Informations importantes concernant les services proposés par Fundora Technologies Ltd.",
    contactLabel: "Contact",
    intro: [
      { p: "La présente Déclaration d’informations fournit des renseignements importants sur les services proposés par Fundora Technologies Ltd (« Fundora »). En utilisant la plateforme Fundora (la « Plateforme »), vous reconnaissez avoir lu, compris et accepté ces informations." },
    ],
    sections: [
      {
        id: "nature-of-services",
        title: "1. Nature des services de Fundora",
        blocks: [
          { p: "Fundora Technologies Ltd exploite une plateforme technologique conçue pour faciliter l’accès à des opportunités d’investissement en mettant les clients en relation avec des fournisseurs d’investissement et d’autres partenaires de services financiers." },
          { p: "Fundora agit en tant qu’intermédiaire technologique et exploitant de plateforme. Fundora ne garantit pas elle-même les opportunités d’investissement, les rendements, les bénéfices ni la préservation du capital." },
        ],
      },
      {
        id: "investment-risk",
        title: "2. Avertissement sur les risques d’investissement",
        blocks: [
          { p: "Tout investissement comporte des risques." },
          { p: "Les clients reconnaissent que :" },
          {
            ol: [
              "la valeur des investissements peut augmenter ou diminuer ;",
              "les clients peuvent perdre tout ou partie des fonds investis ;",
              "les performances passées ne garantissent pas les résultats futurs ;",
              "les décisions d’investissement doivent être prises après un examen attentif de la situation financière personnelle ;",
              "les clients peuvent solliciter un conseil financier indépendant avant d’investir.",
            ],
            type: "a",
          },
          { p: "Fundora ne garantit aucun résultat particulier des investissements accessibles par l’intermédiaire de la Plateforme." },
        ],
      },
      {
        id: "no-investment-advice",
        title: "3. Absence de conseil en investissement",
        blocks: [
          { p: "Sauf mention expresse contraire, Fundora ne fournit pas :" },
          { ol: ["de recommandations d’investissement ;", "de services de planification financière ;", "de conseil en investissement personnalisé ;", "de conseil fiscal ou juridique."], type: "a" },
          { p: "Les informations affichées sur la Plateforme sont fournies à titre d’information générale et ne doivent pas être considérées comme un conseil professionnel." },
        ],
      },
      {
        id: "customer-responsibility",
        title: "4. Responsabilité du client",
        blocks: [
          { p: "Il incombe aux clients :" },
          {
            ol: [
              "d’évaluer les opportunités d’investissement ;",
              "de comprendre les risques associés ;",
              "de déterminer si un investissement correspond à leurs objectifs ;",
              "de suivre leurs investissements.",
            ],
            type: "a",
          },
          { p: "Les clients reconnaissent prendre leurs décisions d’investissement de manière indépendante." },
        ],
      },
      {
        id: "third-party-providers",
        title: "5. Fournisseurs d’investissement tiers",
        blocks: [
          { p: "Les produits ou opportunités d’investissement disponibles par l’intermédiaire de la Plateforme sont fournis par des établissements tiers." },
          { p: "Ces tiers peuvent avoir leurs propres :" },
          { ol: ["conditions générales ;", "avertissements sur les risques ;", "obligations réglementaires ;", "documents d’investissement."], type: "a" },
          { p: "Fundora ne contrôle ni les activités ni la performance des fournisseurs tiers." },
        ],
      },
      {
        id: "virtual-account",
        title: "6. Informations sur le compte virtuel",
        blocks: [
          { p: "Fundora peut fournir à chaque client intégré un compte virtuel personnalisé afin de faciliter les transactions et les activités d’investissement." },
          { p: "Le compte virtuel :" },
          {
            ol: [
              "permet le fonctionnement de la plateforme ;",
              "contribue au suivi des transactions ;",
              "facilite les choix d’investissement ;",
              "améliore l’expérience client.",
            ],
            type: "a",
          },
          { p: "Le compte virtuel ne doit pas être interprété comme un compte de dépôt, sauf s’il est expressément fourni par un établissement financier agréé." },
        ],
      },
      {
        id: "security",
        title: "7. Informations sur la sécurité",
        blocks: [
          { p: "Fundora applique des mesures de sécurité comprenant notamment :" },
          {
            ol: [
              "l’authentification à deux facteurs ;",
              "la vérification par empreinte digitale/biométrique lorsqu’elle est disponible ;",
              "le chiffrement des données clients au moyen d’une technologie de chiffrement sécurisée, notamment Tremble Vault ;",
              "des contrôles de gestion des accès ;",
              "une surveillance de la sécurité.",
            ],
            type: "a",
          },
          { p: "Les clients reconnaissent l’existence de risques de cybersécurité et s’engagent à préserver la sécurité de leurs identifiants d’accès." },
        ],
      },
      {
        id: "data-privacy",
        title: "8. Données et confidentialité",
        blocks: [
          { p: "Fundora collecte et traite les informations des clients conformément à sa Politique de confidentialité et à la législation applicable en matière de protection des données." },
          { p: "Les informations des clients peuvent être utilisées pour :" },
          { ol: ["la création de compte ;", "la vérification d’identité ;", "la conformité réglementaire ;", "l’amélioration des services ;", "des raisons de sécurité."], type: "a" },
        ],
      },
      {
        id: "fraud-compliance",
        title: "9. Fraude et conformité",
        blocks: [
          { p: "Fundora peut procéder à des vérifications d’identité, à une surveillance de la fraude, au filtrage des sanctions et à d’autres contrôles de conformité." },
          { p: "Fundora peut restreindre, suspendre ou clôturer des comptes lorsqu’une activité suspecte ou illicite est détectée." },
        ],
      },
      {
        id: "availability",
        title: "10. Disponibilité des services",
        blocks: [
          { p: "La Plateforme peut être occasionnellement indisponible en raison :" },
          { ol: ["d’opérations de maintenance ;", "de problèmes techniques ;", "d’interruptions de services tiers ;", "de mesures de sécurité."], type: "a" },
          { p: "Fundora prend des mesures raisonnables pour maintenir la disponibilité du service, mais ne garantit pas un accès ininterrompu." },
        ],
      },
      {
        id: "acknowledgement",
        title: "11. Reconnaissance",
        blocks: [
          { p: "En utilisant la Plateforme, vous reconnaissez que :" },
          {
            ol: [
              "les investissements comportent des risques ;",
              "Fundora n’est pas responsable des pertes de marché ;",
              "les décisions d’investissement relèvent de votre responsabilité ;",
              "vous avez examiné toutes les informations pertinentes avant de poursuivre.",
            ],
            type: "a",
          },
        ],
      },
    ],
  },
};

export default fr;
