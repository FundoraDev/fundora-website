import type { LegalDocuments } from "./en";

// German translation of the legal documents. The English text prevails; the
// page says so above every translated document.
const de: LegalDocuments = {
  privacy: {
    title: "Datenschutzerklärung",
    metaTitle: "Datenschutzerklärung | Fundora",
    description:
      "Wie die Fundora Technologies Ltd personenbezogene Daten erhebt, nutzt, speichert, schützt und offenlegt.",
    contactLabel: "Kontakt",
    intro: [
      { p: "Die Fundora Technologies Ltd („Fundora“, „wir“, „uns“, „unser“) respektiert Ihre Privatsphäre und verpflichtet sich, Ihre personenbezogenen Daten zu schützen." },
      { p: "Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten erheben, nutzen, speichern, schützen und offenlegen, wenn Sie unsere Plattform, unsere Website, unsere mobile Anwendung und die zugehörigen Dienste nutzen." },
    ],
    sections: [
      {
        id: "information-collected",
        title: "1. Welche Daten wir erheben",
        blocks: [
          { p: "Wir können die folgenden Kategorien von Daten erheben:" },
          { h: "Personenbezogene Daten" },
          { p: "Dazu gehören:" },
          { ol: ["vollständiger Name;", "Geburtsdatum;", "Identifikationsdaten;", "Wohnsitzdaten;", "Kontaktdaten;", "Daten zur Kundenverifizierung."], type: "a" },
          { h: "Kontodaten" },
          { p: "Dazu gehören:" },
          { ol: ["Benutzername;", "Anmeldedaten;", "Kontoeinstellungen;", "Angaben zum virtuellen Konto;", "Transaktionsaufzeichnungen."], type: "a" },
          { h: "Technische Daten" },
          { p: "Dazu gehören:" },
          { ol: ["Geräteinformationen;", "IP-Adresse;", "Zugriffsprotokolle;", "Nutzungsdaten;", "Sicherheitsdaten."], type: "a" },
          { h: "Biometrische Daten" },
          { p: "Sofern aktiviert, kann Fundora biometrische Merkmale wie Daten zur Fingerabdruck-Authentifizierung zur Identitätsprüfung und zur Kontosicherheit verarbeiten." },
        ],
      },
      {
        id: "how-we-collect",
        title: "2. Wie wir Daten erheben",
        blocks: [
          { p: "Wir erheben Daten über:" },
          { ol: ["die Kundenregistrierung;", "Onboarding-Prozesse;", "Interaktionen mit Kunden;", "die Nutzung der Plattform;", "Sicherheits- und Verifizierungssysteme."], type: "a" },
        ],
      },
      {
        id: "purposes",
        title: "3. Zwecke der Datenverarbeitung",
        blocks: [
          { p: "Fundora verarbeitet Kundendaten unter anderem zu folgenden Zwecken:" },
          {
            ol: [
              "Einrichtung und Verwaltung von Kundenkonten;",
              "Bereitstellung der Plattformdienste;",
              "Ermöglichung des Zugangs zu Investments;",
              "Führung virtueller Konten;",
              "Identitätsprüfung;",
              "Betrugsprävention;",
              "Erfüllung gesetzlicher Pflichten;",
              "Verbesserung des Kundenerlebnisses.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "data-security",
        title: "4. Datensicherheit",
        blocks: [
          { p: "Fundora setzt technische und organisatorische Schutzmaßnahmen ein, um Kundendaten zu schützen." },
          { p: "Zu den Sicherheitsmaßnahmen gehören:" },
          {
            ol: [
              "Zwei-Faktor-Authentifizierung;",
              "biometrische Authentifizierungskontrollen;",
              "Verschlüsselungstechnologien;",
              "sichere Datenspeicherung;",
              "eingeschränkte Zugriffskontrollen;",
              "Überwachung und Sicherheitsprüfungen.",
            ],
            type: "a",
          },
          { p: "Kundendaten werden mit sicheren Verschlüsselungssystemen verschlüsselt, darunter die Tremble-Vault-Technologie." },
        ],
      },
      {
        id: "data-sharing",
        title: "5. Weitergabe von Daten",
        blocks: [
          { p: "Fundora kann Daten weitergeben an:" },
          {
            ol: [
              "Investmentpartner;",
              "Zahlungsdienstleister;",
              "Verifizierungsanbieter;",
              "Technologiedienstleister;",
              "Aufsichtsbehörden oder staatliche Stellen, sofern gesetzlich vorgeschrieben.",
            ],
            type: "a",
          },
          { p: "Fundora verkauft keine personenbezogenen Daten von Kunden." },
        ],
      },
      {
        id: "data-retention",
        title: "6. Speicherdauer",
        blocks: [
          { p: "Fundora speichert personenbezogene Daten nur so lange, wie es erforderlich ist, um:" },
          { ol: ["Dienste zu erbringen;", "gesetzliche Pflichten zu erfüllen;", "Streitigkeiten beizulegen;", "Vereinbarungen durchzusetzen;", "Sicherheitsaufzeichnungen zu führen."], type: "a" },
        ],
      },
      {
        id: "customer-rights",
        title: "7. Rechte der Kunden",
        blocks: [
          { p: "Vorbehaltlich der geltenden Gesetze können Kunden das Recht haben:" },
          {
            ol: [
              "Auskunft über ihre personenbezogenen Daten zu erhalten;",
              "die Berichtigung unrichtiger Daten zu verlangen;",
              "gegebenenfalls die Löschung zu verlangen;",
              "bestimmten Verarbeitungen zu widersprechen;",
              "ihre Einwilligung zu widerrufen, sofern die Verarbeitung auf einer Einwilligung beruht.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "account-deletion",
        title: "8. Löschen Ihres Kontos",
        blocks: [
          { h: "So löschen Sie Ihr Konto" },
          { p: "Angemeldete Nutzer können ihr Konto direkt in der App löschen:" },
          {
            ol: [
              "Öffnen Sie die Fundora-App und gehen Sie zu **Settings → Delete Account** (Einstellungen → Konto löschen).",
              "Lesen Sie den Warnhinweis. Er erklärt, dass die Löschung endgültig ist, dass Sie den Zugriff auf Ihr Wallet, Ihre Investments und Ihre Portfolio-Historie verlieren und dass Sie zuvor Ihr Wallet-Guthaben auszahlen und Ihre Investments auflösen sollten. Tippen Sie auf **Continue** (Weiter).",
              "Wir senden einen 6-stelligen Bestätigungscode an die E-Mail-Adresse Ihres Kontos. Geben Sie den Code ein, tippen Sie **DELETE** in das Bestätigungsfeld und tippen Sie auf **Delete my account** (Mein Konto löschen). Wenn Sie keinen Code erhalten, können Sie nach 30 Sekunden einen neuen anfordern.",
            ],
            type: "1",
          },
          { p: "Mit der Bestätigung des Codes wird Ihr Konto sofort gelöscht. Es gibt keine Karenzzeit und keine Möglichkeit, es anschließend wiederherzustellen. Sie werden automatisch abgemeldet." },
          { h: "Bevor Sie löschen" },
          { p: "Das Löschen Ihres Kontos zahlt weder Ihr Wallet-Guthaben aus noch löst es Ihre Investments für Sie auf. Bitte zahlen Sie vorhandenes Wallet-Guthaben aus und lösen Sie Ihre aktiven Investments auf, bevor Sie Ihr Konto löschen." },
          { h: "Was gelöscht wird" },
          { p: "Beim Löschen Ihres Kontos werden Ihr Profil, Ihre persönlichen und KYC-Daten, Ihr Wallet sowie Ihre Investment- und Portfolio-Historie entfernt, und Sie verlieren sofort den Zugriff darauf." },
          { h: "Was wir aufbewahren und warum" },
          { p: "Wir sind verpflichtet, bestimmte Transaktions-, KYC- und Geldwäscheprüfungsunterlagen aufzubewahren, um die geltenden Vorschriften für Finanzdienstleistungen und zur Geldwäschebekämpfung einzuhalten. Diese Unterlagen werden **[TODO: insert statutory retention period and governing regulation]** aufbewahrt und danach gelöscht oder anonymisiert." },
          { h: "Zeitpunkt" },
          { p: "Die Löschung Ihres Kontos und des Zugriffs darauf erfolgt sofort und unwiderruflich. Für regulierte Unterlagen, die wir aufbewahren müssen, gilt die oben beschriebene Aufbewahrungsfrist." },
          { h: "Kein Zugriff auf die App?" },
          { p: "Wenn Sie nicht auf die App zugreifen können, können Sie die Löschung Ihres Kontos per E-Mail an **[TODO: insert support/privacy email address]** beantragen." },
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies und ähnliche Technologien",
        blocks: [
          { p: "Fundora kann Cookies und ähnliche Technologien einsetzen, um:" },
          { ol: ["die Funktionalität der Plattform zu verbessern;", "die Nutzung zu analysieren;", "die Sicherheit zu erhöhen;", "das Nutzererlebnis zu personalisieren."], type: "a" },
        ],
      },
      {
        id: "international-transfers",
        title: "10. Internationale Datenübermittlungen",
        blocks: [
          { p: "Werden Kundendaten zwischen Rechtsordnungen übermittelt, ergreift Fundora angemessene Maßnahmen, um einen geeigneten Schutz sicherzustellen." },
        ],
      },
      {
        id: "childrens-privacy",
        title: "11. Datenschutz von Kindern",
        blocks: [
          { p: "Die Plattform richtet sich nicht an Personen, die rechtlich nicht in der Lage sind, verbindliche Vereinbarungen zu schließen." },
          { p: "Fundora erhebt wissentlich keine Daten von Personen, die die geltenden Altersanforderungen nicht erfüllen." },
        ],
      },
      {
        id: "changes",
        title: "12. Änderungen dieser Datenschutzerklärung",
        blocks: [
          { p: "Fundora kann diese Datenschutzerklärung regelmäßig aktualisieren." },
          { p: "Änderungen werden über geeignete Kanäle mitgeteilt." },
        ],
      },
      {
        id: "contact",
        title: "13. Kontakt",
        blocks: [{ p: "Bei Fragen zum Datenschutz:" }],
      },
    ],
  },

  terms: {
    title: "Allgemeine Geschäftsbedingungen",
    metaTitle: "Allgemeine Geschäftsbedingungen | Fundora",
    description: "Allgemeine Geschäftsbedingungen für den Zugang zur Plattform und zu den Diensten der Fundora Technologies Ltd und deren Nutzung.",
    contactLabel: "Kontaktinformationen",
    intro: [
      { p: "Diese Allgemeinen Geschäftsbedingungen („Bedingungen“) regeln den Zugang zur Plattform der Fundora Technologies Ltd („Plattform“), zu ihrer Website, ihrer mobilen Anwendung, ihren Produkten und den zugehörigen Diensten („Dienste“) sowie deren Nutzung." },
      { p: "Die Fundora Technologies Ltd („Fundora“, „wir“, „uns“ oder „unser“) ist ein Technologieunternehmen, das eine digitale Plattform bereitstellt, über die Kunden („Nutzer“, „Kunden“ oder „Sie“) Zugang zu Investmentmöglichkeiten erhalten, die von externen Investmentanbietern und/oder Investmentpartnern angeboten werden." },
      { p: "Mit der Registrierung, dem Zugriff auf die Plattform oder ihrer Nutzung erklären Sie sich mit diesen Bedingungen einverstanden." },
    ],
    sections: [
      {
        id: "acceptance",
        title: "1. Annahme der Bedingungen",
        blocks: [
          { p: "Indem Sie ein Konto erstellen, auf die Plattform zugreifen oder Dienste nutzen, bestätigen Sie, dass:" },
          {
            ol: [
              "Sie diese Bedingungen gelesen und verstanden haben;",
              "Sie sich verpflichten, alle geltenden Gesetze und Vorschriften einzuhalten;",
              "alle von Ihnen gemachten Angaben richtig, vollständig und aktuell sind; und",
              "Sie die Verantwortung für Ihre Nutzung der Plattform übernehmen.",
            ],
            type: "a",
          },
          { p: "Wenn Sie diesen Bedingungen nicht zustimmen, müssen Sie die Nutzung der Plattform einstellen." },
        ],
      },
      {
        id: "about-fundora",
        title: "2. Über Fundora",
        blocks: [
          { p: "Fundora stellt eine technologiegestützte Plattform bereit, die Kunden mit Investmentmöglichkeiten verbindet und den Zugang zu Investmentprodukten ermöglicht, die über zugelassene Investmentpartner angeboten werden." },
          { p: "Fundora handelt als Vermittler und technologischer Wegbereiter. Fundora:" },
          {
            ol: [
              "garantiert keine Wertentwicklung von Investments;",
              "erbringt keine persönliche Anlage-, Rechts-, Steuer- oder Finanzberatung, sofern nicht ausdrücklich angegeben;",
              "verspricht oder sichert keine Renditen zu;",
              "ersetzt keine unabhängige fachliche Beratung.",
            ],
            type: "a",
          },
          { p: "Alle Anlageentscheidungen liegen allein beim Kunden." },
        ],
      },
      {
        id: "registration",
        title: "3. Kontoregistrierung und Onboarding",
        blocks: [
          { p: "Um auf die Plattform zuzugreifen, müssen Kunden das Onboarding-Verfahren von Fundora abschließen." },
          { p: "Während des Onboardings können Kunden aufgefordert werden, Folgendes anzugeben:" },
          {
            ol: [
              "persönliche Identifikationsdaten;",
              "Kontaktdaten;",
              "Verifizierungsunterlagen;",
              "Finanzinformationen, sofern erforderlich;",
              "alle weiteren Angaben, die aus Compliance-Gründen erforderlich sind.",
            ],
            type: "a",
          },
          { p: "Fundora behält sich das Recht vor, Kundendaten über zugelassene Verifizierungsanbieter zu überprüfen." },
          { p: "Werden keine korrekten Angaben gemacht, kann dies zur Sperrung oder Beendigung des Zugangs führen." },
        ],
      },
      {
        id: "virtual-account",
        title: "4. Persönliches virtuelles Konto",
        blocks: [
          { p: "Nach erfolgreichem Onboarding kann Fundora über eine der Geschäftsbanken in Nigeria für jeden Kunden ein persönliches virtuelles Konto („virtuelles Konto“) einrichten." },
          { p: "Das virtuelle Konto dient dazu:" },
          {
            ol: [
              "die Anlageauswahl des Kunden zu erleichtern;",
              "Transaktionen aufzuzeichnen;",
              "die Abwicklung von Zahlungen und Investments zu ermöglichen;",
              "das Kundenerlebnis auf der Plattform zu verbessern.",
            ],
            type: "a",
          },
          { p: "Das virtuelle Konto stellt nicht notwendigerweise ein herkömmliches Bankkonto dar, sofern nicht ausdrücklich angegeben." },
          { p: "Kunden erkennen an, dass die Nutzung des virtuellen Kontos den geltenden Finanzvorschriften und den Bedingungen der jeweiligen Finanzpartner unterliegt." },
        ],
      },
      {
        id: "investment-services",
        title: "5. Investmentdienste",
        blocks: [
          { p: "Kunden können über die Plattform auf verfügbare Investmentmöglichkeiten zugreifen." },
          { p: "Kunden erkennen an, dass:" },
          {
            ol: [
              "alle Investments mit Risiken verbunden sind;",
              "die Wertentwicklung in der Vergangenheit keine Garantie für künftige Ergebnisse ist;",
              "Anlageentscheidungen freiwillig getroffen werden;",
              "Renditen nicht garantiert sind.",
            ],
            type: "a",
          },
          { p: "Kunden sind dafür verantwortlich, alle verfügbaren Investmentinformationen zu prüfen, bevor sie eine Anlageentscheidung treffen." },
        ],
      },
      {
        id: "customer-responsibilities",
        title: "6. Pflichten der Kunden",
        blocks: [
          { p: "Kunden müssen:" },
          {
            ol: [
              "ihre Anmeldedaten vertraulich behandeln;",
              "korrekte Angaben machen;",
              "ihre Angaben bei Bedarf umgehend aktualisieren;",
              "die Sicherheitsanforderungen einhalten;",
              "unbefugten Zugriff auf die Plattform oder deren Missbrauch vermeiden.",
            ],
            type: "a",
          },
          { p: "Kunden müssen Fundora unverzüglich über einen vermuteten unbefugten Zugriff informieren." },
        ],
      },
      {
        id: "security-measures",
        title: "7. Sicherheitsmaßnahmen",
        blocks: [
          { p: "Fundora setzt Sicherheitsmaßnahmen zum Schutz der Konten und Daten der Kunden ein, darunter:" },
          {
            ol: [
              "Zwei-Faktor-Authentifizierung;",
              "biometrische Verifizierung, einschließlich Fingerabdruck-Authentifizierung, sofern unterstützt;",
              "Maßnahmen zur Verschlüsselung und sicheren Speicherung;",
              "Zugriffskontrollen;",
              "Überwachungssysteme.",
            ],
            type: "a",
          },
          { p: "Kunden erkennen an, dass kein digitales System absolute Sicherheit garantieren kann." },
        ],
      },
      {
        id: "fees",
        title: "8. Gebühren und Entgelte",
        blocks: [
          { p: "Fundora kann für bestimmte Dienste Gebühren erheben." },
          { p: "Anfallende Gebühren werden vor Abschluss jeder Transaktion mitgeteilt." },
          { p: "Fundora behält sich das Recht vor, Gebühren mit angemessener Vorankündigung zu ändern." },
        ],
      },
      {
        id: "prohibited-use",
        title: "9. Unzulässige Nutzung",
        blocks: [
          { p: "Kunden dürfen nicht:" },
          {
            ol: [
              "die Plattform rechtswidrig nutzen;",
              "versuchen, die Sicherheit der Plattform zu gefährden;",
              "sich als eine andere Person ausgeben;",
              "falsche Angaben machen;",
              "den Betrieb der Plattform stören.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "suspension",
        title: "10. Sperrung und Kündigung",
        blocks: [
          { p: "Fundora kann den Zugang sperren oder beenden, wenn:" },
          {
            ol: [
              "gegen diese Bedingungen verstoßen wird;",
              "betrügerische Aktivitäten vermutet werden;",
              "dies gesetzlich vorgeschrieben ist;",
              "Sicherheitsrisiken entstehen;",
              "regulatorische Anforderungen eine solche Maßnahme verlangen.",
            ],
            type: "a",
          },
          { p: "Sie können Ihr Konto auch jederzeit selbst in der App löschen. Unter [Löschen Ihres Kontos](/privacy#account-deletion) in unserer Datenschutzerklärung erfahren Sie, wie das funktioniert und was mit Ihren Daten geschieht." },
        ],
      },
      {
        id: "third-party",
        title: "11. Dienste Dritter",
        blocks: [
          { p: "Die Plattform kann Dienste Dritter einbinden, darunter Zahlungsanbieter, Investmentpartner und Verifizierungsanbieter." },
          { p: "Fundora ist nicht verantwortlich für eigenständige Handlungen, Unterlassungen, Produkte oder Dienste Dritter." },
        ],
      },
      {
        id: "intellectual-property",
        title: "12. Geistiges Eigentum",
        blocks: [
          { p: "Alle Rechte des geistigen Eigentums an der Plattform, einschließlich Software, Design, Marken, Inhalten und Systemen, stehen Fundora oder deren Lizenzgebern zu." },
          { p: "Nutzer erhalten eine beschränkte, nicht übertragbare Lizenz zur Nutzung der Plattform." },
        ],
      },
      {
        id: "limitation-of-liability",
        title: "13. Haftungsbeschränkung",
        blocks: [
          { p: "Soweit gesetzlich zulässig, haftet Fundora nicht für:" },
          {
            ol: [
              "Anlageverluste;",
              "Marktschwankungen;",
              "Ausfälle Dritter;",
              "indirekte Schäden oder Folgeschäden;",
              "unbefugten Zugriff infolge von Fahrlässigkeit des Kunden.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "indemnity",
        title: "14. Freistellung",
        blocks: [
          { p: "Kunden verpflichten sich, Fundora von Ansprüchen, Verlusten, Verbindlichkeiten oder Kosten freizustellen, die sich ergeben aus:" },
          { ol: ["Verstößen gegen diese Bedingungen;", "dem Missbrauch der Plattform;", "Verstößen gegen geltende Gesetze."], type: "a" },
        ],
      },
      {
        id: "changes",
        title: "15. Änderungen dieser Bedingungen",
        blocks: [
          { p: "Fundora kann diese Bedingungen von Zeit zu Zeit ändern." },
          { p: "Aktualisierte Bedingungen werden über geeignete Kanäle veröffentlicht." },
          { p: "Die weitere Nutzung der Plattform gilt als Zustimmung zu den aktualisierten Bedingungen." },
        ],
      },
      {
        id: "governing-law",
        title: "16. Anwendbares Recht",
        blocks: [{ p: "Diese Bedingungen unterliegen den Gesetzen der Bundesrepublik Nigeria und werden nach diesen ausgelegt." }],
      },
      {
        id: "contact",
        title: "17. Kontaktinformationen",
        blocks: [{ p: "Bei Fragen zu diesen Bedingungen:" }],
      },
    ],
  },

  policy: {
    title: "Richtlinie zur Informationssicherheit",
    metaTitle: "Richtlinie zur Informationssicherheit | Fundora",
    description:
      "Der Rahmen der Fundora Technologies Ltd zum Schutz von Systemen, Anwendungen, Kundendaten und technischer Infrastruktur.",
    contactLabel: "",
    intro: [],
    sections: [
      {
        id: "introduction",
        title: "1. Einleitung",
        blocks: [
          { p: "Die Fundora Technologies Ltd betrachtet Informationssicherheit als wesentlichen Bestandteil ihres Geschäftsbetriebs. Diese Richtlinie zur Informationssicherheit legt den Rahmen zum Schutz der Systeme, Anwendungen, Kundendaten, Geschäftsdaten und technischen Infrastruktur von Fundora fest." },
        ],
      },
      {
        id: "objectives",
        title: "2. Ziele",
        blocks: [
          { p: "Diese Richtlinie soll Folgendes sicherstellen:" },
          {
            ol: [
              "die Vertraulichkeit von Informationen;",
              "die Integrität von Systemen und Daten;",
              "die Verfügbarkeit der Dienste;",
              "die Verhinderung unbefugter Zugriffe;",
              "eine wirksame Reaktion auf Sicherheitsvorfälle.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "governance",
        title: "3. Steuerung der Informationssicherheit",
        blocks: [
          { p: "Fundora unterhält eine Governance-Struktur für die Informationssicherheit, bestehend aus:" },
          { h: "Vorstand" },
          { p: "Verantwortlich für:" },
          { ul: ["Aufsicht;", "Genehmigung der Sicherheitsstrategie;", "Risikoüberwachung."] },
          { h: "Geschäftsleitung" },
          { p: "Verantwortlich für:" },
          { ul: ["Umsetzung;", "Ressourcenzuweisung;", "Durchsetzung."] },
          { h: "Technologie-/Sicherheitsteam" },
          { p: "Verantwortlich für:" },
          { ul: ["Systemschutz;", "Überwachung;", "Reaktion auf Vorfälle."] },
        ],
      },
      {
        id: "classification",
        title: "4. Klassifizierung von Informationen",
        blocks: [
          { p: "Fundora klassifiziert Informationen wie folgt:" },
          { h: "Vertraulich" },
          { p: "Beispiele:" },
          { ul: ["Identitätsdaten von Kunden;", "Finanzinformationen;", "Authentifizierungsdaten."] },
          { h: "Intern" },
          { p: "Beispiele:" },
          { ul: ["interne Verfahren;", "betriebliche Dokumente."] },
          { h: "Öffentlich" },
          { p: "Beispiele:" },
          { ul: ["veröffentlichte Informationen."] },
        ],
      },
      {
        id: "access-control",
        title: "5. Richtlinie zur Zugriffskontrolle",
        blocks: [
          { p: "Fundora setzt Folgendes durch:" },
          { ol: ["eindeutige Benutzerkonten;", "starke Authentifizierung;", "Zugriff nach dem Prinzip der geringsten Rechte;", "rollenbasierte Berechtigungen;", "regelmäßige Überprüfungen der Zugriffsrechte."], type: "a" },
        ],
      },
      {
        id: "authentication",
        title: "6. Authentifizierung und Kontosicherheit",
        blocks: [
          { p: "Zu den Sicherheitskontrollen gehören:" },
          { ol: ["Zwei-Faktor-Authentifizierung;", "biometrische Verifizierung;", "Anforderungen an sichere Passwörter;", "Sitzungskontrollen;", "Überwachung von Anmeldungen."], type: "a" },
        ],
      },
      {
        id: "encryption",
        title: "7. Richtlinie zur Verschlüsselung",
        blocks: [
          { p: "Fundora verschlüsselt sensible Informationen:" },
          { ul: ["bei der Übertragung;", "bei der Speicherung;", "bei der Verarbeitung, sofern angemessen."] },
          { p: "Zu den Verschlüsselungskontrollen gehören sichere Verschlüsselungstechnologien, darunter Tremble Vault." },
        ],
      },
      {
        id: "system-security",
        title: "8. Systemsicherheit",
        blocks: [
          { p: "Fundora unterhält:" },
          {
            ol: [
              "sichere Praktiken der Softwareentwicklung;",
              "Schwachstellenmanagement;",
              "Systemüberwachung;",
              "Sicherheitstests;",
              "Patch-Management.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "application-security",
        title: "9. Anwendungssicherheit",
        blocks: [
          { p: "Fundora-Anwendungen werden entwickelt und gepflegt mit:" },
          { ul: ["sicheren Programmierpraktiken;", "Zugriffskontrollen;", "Anforderungen an die Authentifizierung;", "Sicherheitstests."] },
        ],
      },
      {
        id: "network-security",
        title: "10. Netzwerksicherheit",
        blocks: [
          { p: "Fundora setzt Folgendes ein:" },
          { ol: ["Netzwerküberwachung;", "Firewall-Kontrollen;", "Maßnahmen zur Erkennung von Eindringversuchen;", "sichere Kommunikationsprotokolle."], type: "a" },
        ],
      },
      {
        id: "third-party",
        title: "11. Sicherheit bei Dritten",
        blocks: [
          { p: "Dritte werden vor dem Zugriff auf die Systeme von Fundora geprüft." },
          { p: "Die Anforderungen können Folgendes umfassen:" },
          { ul: ["Sicherheitsprüfungen;", "Vertraulichkeitsvereinbarungen;", "Compliance-Verpflichtungen;", "Zugriffsbeschränkungen."] },
        ],
      },
      {
        id: "incident-response",
        title: "12. Reaktion auf Sicherheitsvorfälle",
        blocks: [
          { p: "Fundora unterhält einen Prozess zur Reaktion auf Sicherheitsvorfälle." },
          { p: "Sicherheitsvorfälle werden:" },
          { ol: ["erkannt;", "eingedämmt;", "untersucht;", "behoben;", "dokumentiert."], type: "a" },
        ],
      },
      {
        id: "business-continuity",
        title: "13. Geschäftskontinuität und Notfallwiederherstellung",
        blocks: [
          { p: "Fundora unterhält Maßnahmen, darunter:" },
          { ul: ["Datensicherungen;", "Wiederherstellungsverfahren;", "Kontinuitätsplanung;", "Prozesse zur Systemwiederherstellung."] },
        ],
      },
      {
        id: "employee-awareness",
        title: "14. Sicherheitsbewusstsein der Mitarbeitenden",
        blocks: [
          { p: "Mitarbeitende werden geschult in:" },
          { ul: ["Cybersicherheitsbewusstsein;", "Phishing-Prävention;", "Passwortschutz;", "Umgang mit Daten."] },
        ],
      },
      {
        id: "monitoring-audit",
        title: "15. Überwachung und Audit",
        blocks: [
          { p: "Fundora kann Folgendes durchführen:" },
          { ul: ["Sicherheitsbewertungen;", "Systemaudits;", "Überprüfungen der Zugriffsrechte;", "Schwachstellenanalysen."] },
        ],
      },
      {
        id: "policy-breaches",
        title: "16. Verstöße gegen die Richtlinie",
        blocks: [
          { p: "Verstöße gegen diese Richtlinie können Folgendes nach sich ziehen:" },
          { ul: ["Zugriffsbeschränkungen;", "Disziplinarmaßnahmen;", "Kündigung;", "Meldung an Aufsichtsbehörden."] },
        ],
      },
      {
        id: "review",
        title: "17. Überprüfung",
        blocks: [{ p: "Diese Richtlinie wird regelmäßig überprüft, um ihre Wirksamkeit sicherzustellen." }],
      },
    ],
  },

  disclosures: {
    title: "Offenlegungen",
    metaTitle: "Offenlegungen | Fundora",
    description: "Wichtige Informationen zu den Diensten der Fundora Technologies Ltd.",
    contactLabel: "Kontakt",
    intro: [
      { p: "Diese Offenlegungserklärung enthält wichtige Informationen zu den Diensten der Fundora Technologies Ltd („Fundora“). Mit der Nutzung der Fundora-Plattform („Plattform“) bestätigen Sie, dass Sie diese Offenlegungen gelesen, verstanden und akzeptiert haben." },
    ],
    sections: [
      {
        id: "nature-of-services",
        title: "1. Art der Dienste von Fundora",
        blocks: [
          { p: "Die Fundora Technologies Ltd betreibt eine Technologieplattform, die den Zugang zu Investmentmöglichkeiten erleichtern soll, indem sie Kunden mit Investmentanbietern und anderen Finanzdienstleistungspartnern verbindet." },
          { p: "Fundora handelt als technologischer Vermittler und Plattformbetreiber. Fundora selbst garantiert weder Investmentmöglichkeiten noch Renditen, Gewinne oder den Kapitalerhalt." },
        ],
      },
      {
        id: "investment-risk",
        title: "2. Hinweis auf Anlagerisiken",
        blocks: [
          { p: "Alle Investments sind mit Risiken verbunden." },
          { p: "Kunden erkennen an, dass:" },
          {
            ol: [
              "der Wert von Investments steigen oder fallen kann;",
              "Kunden einen Teil oder die Gesamtheit ihrer investierten Mittel verlieren können;",
              "die frühere Wertentwicklung keine Garantie für künftige Ergebnisse ist;",
              "Anlageentscheidungen erst nach sorgfältiger Prüfung der persönlichen finanziellen Verhältnisse getroffen werden sollten;",
              "Kunden vor einer Anlage unabhängigen Finanzrat einholen können.",
            ],
            type: "a",
          },
          { p: "Fundora garantiert kein bestimmtes Ergebnis von Investments, auf die über die Plattform zugegriffen wird." },
        ],
      },
      {
        id: "no-investment-advice",
        title: "3. Keine Anlageberatung",
        blocks: [
          { p: "Sofern nicht ausdrücklich anders angegeben, bietet Fundora keine:" },
          { ol: ["Anlageempfehlungen;", "Finanzplanungsdienste;", "persönliche Anlageberatung;", "Steuer- oder Rechtsberatung."], type: "a" },
          { p: "Die auf der Plattform angezeigten Informationen dienen allgemeinen Informationszwecken und sind nicht als fachliche Beratung zu verstehen." },
        ],
      },
      {
        id: "customer-responsibility",
        title: "4. Verantwortung der Kunden",
        blocks: [
          { p: "Kunden sind verantwortlich für:" },
          {
            ol: [
              "die Bewertung von Investmentmöglichkeiten;",
              "das Verständnis der damit verbundenen Risiken;",
              "die Entscheidung, ob ein Investment zu ihren Zielen passt;",
              "die Überwachung ihrer Investments.",
            ],
            type: "a",
          },
          { p: "Kunden erkennen an, dass sie Anlageentscheidungen eigenständig treffen." },
        ],
      },
      {
        id: "third-party-providers",
        title: "5. Externe Investmentanbieter",
        blocks: [
          { p: "Die über die Plattform verfügbaren Investmentprodukte oder -möglichkeiten werden von externen Instituten angeboten." },
          { p: "Für diese Dritten können jeweils eigene Regelungen gelten, etwa:" },
          { ol: ["Geschäftsbedingungen;", "Risikohinweise;", "regulatorische Pflichten;", "Investmentunterlagen."], type: "a" },
          { p: "Fundora hat keinen Einfluss auf den Geschäftsbetrieb oder die Leistung externer Anbieter." },
        ],
      },
      {
        id: "virtual-account",
        title: "6. Hinweis zum virtuellen Konto",
        blocks: [
          { p: "Fundora kann jedem Kunden nach dem Onboarding ein persönliches virtuelles Konto zur Verfügung stellen, um Transaktionen und Investmentaktivitäten zu erleichtern." },
          { p: "Das virtuelle Konto:" },
          {
            ol: [
              "ermöglicht die Funktionen der Plattform;",
              "unterstützt die Nachverfolgung von Transaktionen;",
              "unterstützt die Anlageauswahl;",
              "verbessert das Kundenerlebnis.",
            ],
            type: "a",
          },
          { p: "Das virtuelle Konto ist nicht als Einlagenkonto zu verstehen, sofern es nicht ausdrücklich von einem zugelassenen Finanzinstitut bereitgestellt wird." },
        ],
      },
      {
        id: "security",
        title: "7. Hinweis zur Sicherheit",
        blocks: [
          { p: "Fundora setzt Sicherheitsmaßnahmen ein, darunter:" },
          {
            ol: [
              "Zwei-Faktor-Authentifizierung;",
              "Fingerabdruck-/biometrische Verifizierung, sofern verfügbar;",
              "Verschlüsselung von Kundendaten mit sicherer Verschlüsselungstechnologie, darunter Tremble Vault;",
              "Kontrollen zur Zugriffsverwaltung;",
              "Sicherheitsüberwachung.",
            ],
            type: "a",
          },
          { p: "Kunden erkennen an, dass Cybersicherheitsrisiken bestehen, und verpflichten sich, ihre Zugangsdaten sicher aufzubewahren." },
        ],
      },
      {
        id: "data-privacy",
        title: "8. Daten und Datenschutz",
        blocks: [
          { p: "Fundora erhebt und verarbeitet Kundendaten gemäß ihrer Datenschutzerklärung und den geltenden Datenschutzgesetzen." },
          { p: "Kundendaten können verwendet werden für:" },
          { ol: ["die Kontoeröffnung;", "die Identitätsprüfung;", "die Einhaltung regulatorischer Vorgaben;", "die Verbesserung der Dienste;", "Sicherheitszwecke."], type: "a" },
        ],
      },
      {
        id: "fraud-compliance",
        title: "9. Hinweis zu Betrug und Compliance",
        blocks: [
          { p: "Fundora kann Identitätsprüfungen, Betrugsüberwachung, Sanktionslistenprüfungen und weitere Compliance-Prüfungen durchführen." },
          { p: "Fundora kann Konten einschränken, sperren oder schließen, wenn verdächtige oder rechtswidrige Aktivitäten festgestellt werden." },
        ],
      },
      {
        id: "availability",
        title: "10. Verfügbarkeit der Dienste",
        blocks: [
          { p: "Die Plattform kann gelegentlich nicht verfügbar sein aufgrund von:" },
          { ol: ["Wartungsarbeiten;", "technischen Problemen;", "Unterbrechungen von Diensten Dritter;", "Sicherheitsmaßnahmen."], type: "a" },
          { p: "Fundora ergreift angemessene Maßnahmen zur Aufrechterhaltung der Verfügbarkeit, garantiert jedoch keinen unterbrechungsfreien Zugang." },
        ],
      },
      {
        id: "acknowledgement",
        title: "11. Bestätigung",
        blocks: [
          { p: "Mit der Nutzung der Plattform bestätigen Sie, dass:" },
          {
            ol: [
              "Investments mit Risiken verbunden sind;",
              "Fundora nicht für Marktverluste verantwortlich ist;",
              "Anlageentscheidungen in Ihrer Verantwortung liegen;",
              "Sie alle relevanten Informationen geprüft haben, bevor Sie fortfahren.",
            ],
            type: "a",
          },
        ],
      },
    ],
  },
};

export default de;
