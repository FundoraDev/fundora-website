import type { LegalDocuments } from "./en";

// Spanish translation of the legal documents. The English text prevails; the
// page says so above every translated document.
const es: LegalDocuments = {
  privacy: {
    title: "Política de privacidad",
    metaTitle: "Política de privacidad | Fundora",
    description:
      "Cómo Fundora Technologies Ltd recopila, utiliza, almacena, protege y divulga la información personal.",
    contactLabel: "Contacto",
    intro: [
      { p: "Fundora Technologies Ltd (“Fundora”, “nosotros”, “nos”, “nuestro”) respeta su privacidad y se compromete a proteger su información personal." },
      { p: "Esta Política de privacidad explica cómo recopilamos, utilizamos, almacenamos, protegemos y divulgamos la información personal cuando utiliza nuestra plataforma, sitio web, aplicación móvil y servicios relacionados." },
    ],
    sections: [
      {
        id: "information-collected",
        title: "1. Información que recopilamos",
        blocks: [
          { p: "Podemos recopilar las siguientes categorías de información:" },
          { h: "Información personal" },
          { p: "Incluida:" },
          { ol: ["nombre completo;", "fecha de nacimiento;", "datos de identificación;", "datos de residencia;", "datos de contacto;", "información de verificación del cliente."], type: "a" },
          { h: "Información de la cuenta" },
          { p: "Incluida:" },
          { ol: ["nombre de usuario;", "credenciales de acceso;", "preferencias de la cuenta;", "datos de la Cuenta Virtual;", "registros de transacciones."], type: "a" },
          { h: "Información técnica" },
          { p: "Incluida:" },
          { ol: ["información del dispositivo;", "dirección IP;", "registros de acceso;", "información de uso;", "datos de seguridad."], type: "a" },
          { h: "Información biométrica" },
          { p: "Cuando esté habilitado, Fundora puede tratar identificadores biométricos, como datos de autenticación por huella dactilar, para la verificación de la identidad y la seguridad de la cuenta." },
        ],
      },
      {
        id: "how-we-collect",
        title: "2. Cómo recopilamos la información",
        blocks: [
          { p: "Recopilamos información a través de:" },
          { ol: ["el registro de clientes;", "los procesos de incorporación;", "las interacciones con los clientes;", "el uso de la Plataforma;", "los sistemas de seguridad y verificación."], type: "a" },
        ],
      },
      {
        id: "purposes",
        title: "3. Finalidades del tratamiento de la información",
        blocks: [
          { p: "Fundora trata la información de los clientes con fines que incluyen:" },
          {
            ol: [
              "crear y gestionar las cuentas de los clientes;",
              "prestar los servicios de la Plataforma;",
              "facilitar el acceso a inversiones;",
              "mantener las Cuentas Virtuales;",
              "verificar la identidad;",
              "prevenir el fraude;",
              "cumplir las obligaciones legales;",
              "mejorar la experiencia del cliente.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "data-security",
        title: "4. Seguridad de los datos",
        blocks: [
          { p: "Fundora aplica medidas técnicas y organizativas diseñadas para proteger la información de los clientes." },
          { p: "Las medidas de seguridad incluyen:" },
          {
            ol: [
              "autenticación de dos factores;",
              "controles de autenticación biométrica;",
              "tecnologías de cifrado;",
              "almacenamiento seguro de datos;",
              "controles de acceso restringido;",
              "supervisión y revisiones de seguridad.",
            ],
            type: "a",
          },
          { p: "La información de los clientes se cifra mediante sistemas de cifrado seguros, incluida la tecnología Tremble Vault." },
        ],
      },
      {
        id: "data-sharing",
        title: "5. Comunicación de datos",
        blocks: [
          { p: "Fundora puede compartir información con:" },
          {
            ol: [
              "socios de inversión;",
              "proveedores de servicios de pago;",
              "proveedores de verificación;",
              "proveedores de servicios tecnológicos;",
              "reguladores o autoridades públicas cuando lo exija la ley.",
            ],
            type: "a",
          },
          { p: "Fundora no vende la información personal de los clientes." },
        ],
      },
      {
        id: "data-retention",
        title: "6. Conservación de los datos",
        blocks: [
          { p: "Fundora conserva la información personal solo durante el tiempo necesario para:" },
          { ol: ["prestar los servicios;", "cumplir las obligaciones legales;", "resolver disputas;", "hacer cumplir los acuerdos;", "mantener registros de seguridad."], type: "a" },
        ],
      },
      {
        id: "customer-rights",
        title: "7. Derechos de los clientes",
        blocks: [
          { p: "Con sujeción a la legislación aplicable, los clientes pueden tener derecho a:" },
          {
            ol: [
              "acceder a su información personal;",
              "solicitar la rectificación de información inexacta;",
              "solicitar la supresión cuando proceda;",
              "oponerse a determinados tratamientos;",
              "retirar su consentimiento cuando el tratamiento se base en él.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "account-deletion",
        title: "8. Eliminación de su cuenta",
        blocks: [
          { h: "Cómo eliminar su cuenta" },
          { p: "Los usuarios que hayan iniciado sesión pueden eliminar su cuenta desde la app:" },
          {
            ol: [
              "Abra la app de Fundora y vaya a **Settings → Delete Account** (Ajustes → Eliminar cuenta).",
              "Revise la pantalla de advertencia, que explica que la eliminación es permanente, que perderá el acceso a su monedero, sus inversiones y su historial de cartera, y que debe retirar antes el saldo de su monedero y salir de sus inversiones. Pulse **Continue** (Continuar).",
              "Le enviaremos por correo electrónico un código de verificación de 6 dígitos a la dirección de su cuenta. Introduzca el código, escriba **DELETE** en el campo de confirmación y pulse **Delete my account** (Eliminar mi cuenta). Si no recibe el código, puede solicitar uno nuevo pasados 30 segundos.",
            ],
            type: "1",
          },
          { p: "Al verificar el código, su cuenta se elimina de inmediato. No hay periodo de gracia ni forma de restaurarla después. Su sesión se cerrará automáticamente." },
          { h: "Antes de eliminarla" },
          { p: "Eliminar su cuenta no retira por usted el saldo de su monedero ni sale de sus inversiones. Retire cualquier saldo de su monedero y salga de sus inversiones activas antes de eliminar su cuenta." },
          { h: "Qué se elimina" },
          { p: "Al eliminar su cuenta se eliminan su perfil, su información personal y de KYC, su monedero y su historial de inversiones y de cartera, y pierde el acceso a ellos de inmediato." },
          { h: "Qué conservamos y por qué" },
          { p: "Estamos obligados a conservar determinados registros de transacciones, de KYC y de prevención del blanqueo de capitales para cumplir la normativa aplicable de servicios financieros y de prevención del blanqueo de capitales. Estos registros se conservan durante **[TODO: insert statutory retention period and governing regulation]**, tras lo cual se eliminan o se anonimizan." },
          { h: "Plazos" },
          { p: "La eliminación de su cuenta y del acceso a ella es inmediata e irreversible. Los registros regulados que estamos obligados a conservar siguen el periodo de conservación descrito anteriormente." },
          { h: "¿No puede acceder a la app?" },
          { p: "Si no puede acceder a la app, puede solicitar la eliminación de su cuenta escribiendo a **customersuccess@fundorahq.com**." },
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies y tecnologías similares",
        blocks: [
          { p: "Fundora puede utilizar cookies y tecnologías similares para:" },
          { ol: ["mejorar el funcionamiento de la Plataforma;", "analizar el uso;", "reforzar la seguridad;", "personalizar la experiencia del usuario."], type: "a" },
        ],
      },
      {
        id: "international-transfers",
        title: "10. Transferencias internacionales de datos",
        blocks: [
          { p: "Cuando la información de los clientes se transfiera entre jurisdicciones, Fundora tomará medidas razonables para garantizar que se apliquen las medidas de protección adecuadas." },
        ],
      },
      {
        id: "childrens-privacy",
        title: "11. Privacidad de los menores",
        blocks: [
          { p: "La Plataforma no está destinada a personas que no tengan capacidad legal para celebrar acuerdos vinculantes." },
          { p: "Fundora no recopila a sabiendas información de personas que no cumplan los requisitos de edad aplicables." },
        ],
      },
      {
        id: "changes",
        title: "12. Cambios en esta Política de privacidad",
        blocks: [
          { p: "Fundora puede actualizar periódicamente esta Política de privacidad." },
          { p: "Los cambios se comunicarán a través de los canales adecuados." },
        ],
      },
      {
        id: "contact",
        title: "13. Contacto",
        blocks: [{ p: "Para consultas relacionadas con la privacidad:" }],
      },
    ],
  },

  terms: {
    title: "Términos y condiciones",
    metaTitle: "Términos y condiciones | Fundora",
    description: "Términos y condiciones que rigen el acceso y el uso de la plataforma y los servicios de Fundora Technologies Ltd.",
    contactLabel: "Información de contacto",
    intro: [
      { p: "Estos Términos y condiciones (los “Términos”) rigen el acceso y el uso de la plataforma de Fundora Technologies Ltd (la “Plataforma”), su sitio web, su aplicación móvil, sus productos y los servicios relacionados (los “Servicios”)." },
      { p: "Fundora Technologies Ltd (“Fundora”, “nosotros”, “nos” o “nuestro”) es una empresa tecnológica que ofrece una plataforma digital que permite a los clientes (los “Usuarios”, los “Clientes” o “usted”) acceder a oportunidades de inversión ofrecidas a través de proveedores de inversión y/o socios de inversión externos." },
      { p: "Al registrarse, acceder o utilizar la Plataforma, usted acepta quedar vinculado por estos Términos." },
    ],
    sections: [
      {
        id: "acceptance",
        title: "1. Aceptación de los Términos",
        blocks: [
          { p: "Al crear una cuenta, acceder a la Plataforma o utilizar cualquiera de los Servicios, usted confirma que:" },
          {
            ol: [
              "ha leído y comprendido estos Términos;",
              "se compromete a cumplir todas las leyes y normativas aplicables;",
              "toda la información que ha facilitado es exacta, completa y actual; y",
              "acepta la responsabilidad por el uso que haga de la Plataforma.",
            ],
            type: "a",
          },
          { p: "Si no está de acuerdo con estos Términos, debe dejar de utilizar la Plataforma." },
        ],
      },
      {
        id: "about-fundora",
        title: "2. Acerca de Fundora",
        blocks: [
          { p: "Fundora ofrece una plataforma tecnológica que conecta a los clientes con oportunidades de inversión y facilita el acceso a productos de inversión puestos a disposición a través de socios de inversión autorizados." },
          { p: "Fundora actúa como intermediario y facilitador tecnológico. Fundora no:" },
          {
            ol: [
              "garantiza el rendimiento de las inversiones;",
              "presta asesoramiento personal en materia de inversión, legal, fiscal o financiera, salvo que se indique expresamente;",
              "promete ni asegura rentabilidad alguna;",
              "sustituye al asesoramiento profesional independiente.",
            ],
            type: "a",
          },
          { p: "Todas las decisiones de inversión corresponden exclusivamente al Cliente." },
        ],
      },
      {
        id: "registration",
        title: "3. Registro e incorporación",
        blocks: [
          { p: "Para acceder a la Plataforma, los Clientes deben completar el proceso de incorporación de Fundora." },
          { p: "Durante la incorporación, se puede pedir a los Clientes que faciliten:" },
          {
            ol: [
              "datos de identificación personal;",
              "información de contacto;",
              "documentos de verificación;",
              "información financiera cuando sea necesario;",
              "cualquier otra información necesaria a efectos de cumplimiento normativo.",
            ],
            type: "a",
          },
          { p: "Fundora se reserva el derecho de verificar la información de los Clientes a través de proveedores de verificación autorizados." },
          { p: "No facilitar información exacta puede dar lugar a la suspensión o la cancelación del acceso." },
        ],
      },
      {
        id: "virtual-account",
        title: "4. Cuenta Virtual personalizada",
        blocks: [
          { p: "Una vez completada la incorporación, Fundora podrá crear, a través de uno de los bancos comerciales de Nigeria, una cuenta virtual personalizada (la “Cuenta Virtual”) para cada Cliente." },
          { p: "La Cuenta Virtual se ofrece para:" },
          {
            ol: [
              "facilitar las selecciones de inversión del Cliente;",
              "registrar las transacciones;",
              "permitir el procesamiento de pagos e inversiones;",
              "mejorar la experiencia del Cliente en la Plataforma.",
            ],
            type: "a",
          },
          { p: "La Cuenta Virtual no constituye necesariamente una cuenta bancaria tradicional, salvo que se indique expresamente." },
          { p: "Los Clientes reconocen que el uso de la Cuenta Virtual está sujeto a la normativa financiera aplicable y a las condiciones de los socios financieros correspondientes." },
        ],
      },
      {
        id: "investment-services",
        title: "5. Servicios de inversión",
        blocks: [
          { p: "Los Clientes pueden acceder a las oportunidades de inversión disponibles a través de la Plataforma." },
          { p: "Los Clientes reconocen que:" },
          {
            ol: [
              "todas las inversiones conllevan riesgos;",
              "la rentabilidad pasada no garantiza resultados futuros;",
              "las decisiones de inversión se toman de forma voluntaria;",
              "la rentabilidad no está garantizada.",
            ],
            type: "a",
          },
          { p: "Los Clientes son responsables de revisar toda la información de inversión disponible antes de tomar cualquier decisión de inversión." },
        ],
      },
      {
        id: "customer-responsibilities",
        title: "6. Responsabilidades del Cliente",
        blocks: [
          { p: "Los Clientes deben:" },
          {
            ol: [
              "mantener la confidencialidad de sus credenciales de acceso;",
              "facilitar información exacta;",
              "actualizar sin demora su información cuando sea necesario;",
              "cumplir los requisitos de seguridad;",
              "evitar el acceso no autorizado o el uso indebido de la Plataforma.",
            ],
            type: "a",
          },
          { p: "Los Clientes deben notificar inmediatamente a Fundora cualquier sospecha de acceso no autorizado." },
        ],
      },
      {
        id: "security-measures",
        title: "7. Medidas de seguridad",
        blocks: [
          { p: "Fundora aplica medidas de seguridad diseñadas para proteger las cuentas y la información de los Clientes, entre ellas:" },
          {
            ol: [
              "autenticación de dos factores;",
              "verificación biométrica, incluida la autenticación por huella dactilar cuando sea compatible;",
              "medidas de cifrado y almacenamiento seguro;",
              "controles de acceso;",
              "sistemas de supervisión.",
            ],
            type: "a",
          },
          { p: "Los Clientes reconocen que ningún sistema digital puede garantizar una seguridad absoluta." },
        ],
      },
      {
        id: "fees",
        title: "8. Tarifas y cargos",
        blocks: [
          { p: "Fundora puede cobrar tarifas por determinados Servicios." },
          { p: "Las tarifas aplicables se comunicarán antes de completar cualquier transacción." },
          { p: "Fundora se reserva el derecho de modificar las tarifas con un preaviso razonable." },
        ],
      },
      {
        id: "prohibited-use",
        title: "9. Usos prohibidos",
        blocks: [
          { p: "Los Clientes no podrán:" },
          {
            ol: [
              "utilizar la Plataforma de forma ilícita;",
              "intentar vulnerar la seguridad de la Plataforma;",
              "suplantar la identidad de otra persona;",
              "facilitar información falsa;",
              "interferir en el funcionamiento de la Plataforma.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "suspension",
        title: "10. Suspensión y cancelación",
        blocks: [
          { p: "Fundora podrá suspender o cancelar el acceso cuando:" },
          {
            ol: [
              "se incumplan estos Términos;",
              "se sospeche de actividad fraudulenta;",
              "lo exija la ley;",
              "surjan riesgos de seguridad;",
              "los requisitos regulatorios exijan dicha medida.",
            ],
            type: "a",
          },
          { p: "También puede eliminar su propia cuenta en cualquier momento desde la app. Consulte [Eliminación de su cuenta](/privacy#account-deletion) en nuestra Política de privacidad para saber cómo funciona y qué ocurre con sus datos." },
        ],
      },
      {
        id: "third-party",
        title: "11. Servicios de terceros",
        blocks: [
          { p: "La Plataforma puede integrar servicios de terceros, como proveedores de pago, socios de inversión y proveedores de verificación." },
          { p: "Fundora no es responsable de los actos, omisiones, productos o servicios independientes de terceros." },
        ],
      },
      {
        id: "intellectual-property",
        title: "12. Propiedad intelectual",
        blocks: [
          { p: "Todos los derechos de propiedad intelectual relativos a la Plataforma, incluidos el software, el diseño, las marcas, los contenidos y los sistemas, pertenecen a Fundora o a sus licenciantes." },
          { p: "Los Usuarios reciben una licencia limitada e intransferible para utilizar la Plataforma." },
        ],
      },
      {
        id: "limitation-of-liability",
        title: "13. Limitación de responsabilidad",
        blocks: [
          { p: "En la máxima medida permitida por la ley, Fundora no será responsable de:" },
          {
            ol: [
              "las pérdidas de inversión;",
              "las fluctuaciones del mercado;",
              "los fallos de terceros;",
              "las pérdidas indirectas o consecuentes;",
              "los accesos no autorizados causados por negligencia del Cliente.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "indemnity",
        title: "14. Indemnización",
        blocks: [
          { p: "Los Clientes se comprometen a indemnizar a Fundora frente a reclamaciones, pérdidas, responsabilidades o gastos derivados de:" },
          { ol: ["el incumplimiento de estos Términos;", "el uso indebido de la Plataforma;", "la infracción de la legislación aplicable."], type: "a" },
        ],
      },
      {
        id: "changes",
        title: "15. Cambios en estos Términos",
        blocks: [
          { p: "Fundora puede modificar estos Términos periódicamente." },
          { p: "Los Términos actualizados se publicarán a través de los canales adecuados." },
          { p: "El uso continuado de la Plataforma implica la aceptación de los Términos actualizados." },
        ],
      },
      {
        id: "governing-law",
        title: "16. Legislación aplicable",
        blocks: [{ p: "Estos Términos se regirán e interpretarán de conformidad con las leyes de la República Federal de Nigeria." }],
      },
      {
        id: "contact",
        title: "17. Información de contacto",
        blocks: [{ p: "Para cualquier pregunta sobre estos Términos:" }],
      },
    ],
  },

  policy: {
    title: "Política de seguridad de la información",
    metaTitle: "Política de seguridad de la información | Fundora",
    description:
      "El marco que utiliza Fundora Technologies Ltd para proteger sus sistemas, sus aplicaciones, la información de los clientes y su infraestructura tecnológica.",
    contactLabel: "",
    intro: [],
    sections: [
      {
        id: "introduction",
        title: "1. Introducción",
        blocks: [
          { p: "Fundora Technologies Ltd reconoce la seguridad de la información como un componente esencial de sus operaciones. Esta Política de seguridad de la información establece el marco para proteger los sistemas, las aplicaciones, la información de los clientes, los datos empresariales y la infraestructura tecnológica de Fundora." },
        ],
      },
      {
        id: "objectives",
        title: "2. Objetivos",
        blocks: [
          { p: "Los objetivos de esta Política son garantizar:" },
          {
            ol: [
              "la confidencialidad de la información;",
              "la integridad de los sistemas y los datos;",
              "la disponibilidad de los servicios;",
              "la prevención del acceso no autorizado;",
              "una respuesta eficaz ante incidentes de seguridad.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "governance",
        title: "3. Gobierno de la seguridad de la información",
        blocks: [
          { p: "Fundora mantendrá una estructura de gobierno de la seguridad de la información compuesta por:" },
          { h: "Consejo de Administración" },
          { p: "Responsable de:" },
          { ul: ["la supervisión;", "la aprobación de la estrategia de seguridad;", "la supervisión de los riesgos."] },
          { h: "Dirección" },
          { p: "Responsable de:" },
          { ul: ["la implantación;", "la asignación de recursos;", "el cumplimiento."] },
          { h: "Equipo de Tecnología/Seguridad" },
          { p: "Responsable de:" },
          { ul: ["la protección de los sistemas;", "la supervisión;", "la respuesta ante incidentes."] },
        ],
      },
      {
        id: "classification",
        title: "4. Clasificación de la información",
        blocks: [
          { p: "Fundora clasifica la información como:" },
          { h: "Confidencial" },
          { p: "Ejemplos:" },
          { ul: ["datos de identidad de los clientes;", "información financiera;", "datos de autenticación."] },
          { h: "Interna" },
          { p: "Ejemplos:" },
          { ul: ["procedimientos internos;", "documentos operativos."] },
          { h: "Pública" },
          { p: "Ejemplos:" },
          { ul: ["información publicada."] },
        ],
      },
      {
        id: "access-control",
        title: "5. Política de control de acceso",
        blocks: [
          { p: "Fundora aplicará:" },
          { ol: ["cuentas de usuario únicas;", "autenticación robusta;", "acceso con privilegios mínimos;", "permisos basados en roles;", "revisiones periódicas de acceso."], type: "a" },
        ],
      },
      {
        id: "authentication",
        title: "6. Autenticación y seguridad de las cuentas",
        blocks: [
          { p: "Los controles de seguridad incluyen:" },
          { ol: ["autenticación de dos factores;", "verificación biométrica;", "requisitos de contraseñas seguras;", "controles de sesión;", "supervisión de los inicios de sesión."], type: "a" },
        ],
      },
      {
        id: "encryption",
        title: "7. Política de cifrado",
        blocks: [
          { p: "Fundora cifrará la información sensible:" },
          { ul: ["durante la transmisión;", "durante el almacenamiento;", "durante el tratamiento cuando proceda."] },
          { p: "Los controles de cifrado incluyen tecnologías de cifrado seguras, entre ellas Tremble Vault." },
        ],
      },
      {
        id: "system-security",
        title: "8. Seguridad de los sistemas",
        blocks: [
          { p: "Fundora mantendrá:" },
          {
            ol: [
              "prácticas seguras de desarrollo de software;",
              "gestión de vulnerabilidades;",
              "supervisión de los sistemas;",
              "pruebas de seguridad;",
              "gestión de parches.",
            ],
            type: "a",
          },
        ],
      },
      {
        id: "application-security",
        title: "9. Seguridad de las aplicaciones",
        blocks: [
          { p: "Las aplicaciones de Fundora se desarrollarán y mantendrán con:" },
          { ul: ["prácticas de programación segura;", "controles de acceso;", "requisitos de autenticación;", "pruebas de seguridad."] },
        ],
      },
      {
        id: "network-security",
        title: "10. Seguridad de la red",
        blocks: [
          { p: "Fundora implantará:" },
          { ol: ["supervisión de la red;", "controles de cortafuegos;", "medidas de detección de intrusiones;", "protocolos de comunicación seguros."], type: "a" },
        ],
      },
      {
        id: "third-party",
        title: "11. Seguridad de terceros",
        blocks: [
          { p: "Los terceros serán evaluados antes de acceder a los sistemas de Fundora." },
          { p: "Los requisitos pueden incluir:" },
          { ul: ["revisiones de seguridad;", "acuerdos de confidencialidad;", "obligaciones de cumplimiento;", "restricciones de acceso."] },
        ],
      },
      {
        id: "incident-response",
        title: "12. Respuesta ante incidentes",
        blocks: [
          { p: "Fundora mantendrá un proceso de respuesta ante incidentes." },
          { p: "Los incidentes de seguridad serán:" },
          { ol: ["detectados;", "contenidos;", "investigados;", "resueltos;", "documentados."], type: "a" },
        ],
      },
      {
        id: "business-continuity",
        title: "13. Continuidad del negocio y recuperación ante desastres",
        blocks: [
          { p: "Fundora mantendrá medidas que incluyen:" },
          { ul: ["copias de seguridad;", "procedimientos de recuperación;", "planificación de la continuidad;", "procesos de restauración de los sistemas."] },
        ],
      },
      {
        id: "employee-awareness",
        title: "14. Concienciación del personal en materia de seguridad",
        blocks: [
          { p: "El personal recibirá formación sobre:" },
          { ul: ["concienciación en ciberseguridad;", "prevención del phishing;", "protección de contraseñas;", "tratamiento de datos."] },
        ],
      },
      {
        id: "monitoring-audit",
        title: "15. Supervisión y auditoría",
        blocks: [
          { p: "Fundora puede llevar a cabo:" },
          { ul: ["evaluaciones de seguridad;", "auditorías de sistemas;", "revisiones de acceso;", "evaluaciones de vulnerabilidades."] },
        ],
      },
      {
        id: "policy-breaches",
        title: "16. Incumplimientos de la Política",
        blocks: [
          { p: "El incumplimiento de esta Política puede dar lugar a:" },
          { ul: ["restricciones de acceso;", "medidas disciplinarias;", "despido;", "comunicación a las autoridades reguladoras."] },
        ],
      },
      {
        id: "review",
        title: "17. Revisión",
        blocks: [{ p: "Esta Política se revisará periódicamente para garantizar su eficacia." }],
      },
    ],
  },

  disclosures: {
    title: "Divulgaciones",
    metaTitle: "Divulgaciones | Fundora",
    description: "Información importante sobre los servicios ofrecidos por Fundora Technologies Ltd.",
    contactLabel: "Contacto",
    intro: [
      { p: "Esta Declaración de divulgación ofrece información importante sobre los servicios ofrecidos por Fundora Technologies Ltd (“Fundora”). Al utilizar la plataforma de Fundora (la “Plataforma”), usted reconoce que ha leído, comprendido y aceptado estas divulgaciones." },
    ],
    sections: [
      {
        id: "nature-of-services",
        title: "1. Naturaleza de los servicios de Fundora",
        blocks: [
          { p: "Fundora Technologies Ltd opera una plataforma tecnológica diseñada para facilitar el acceso a oportunidades de inversión conectando a los clientes con proveedores de inversión y otros socios de servicios financieros." },
          { p: "Fundora actúa como intermediario tecnológico y operador de la plataforma. Fundora no garantiza por sí misma oportunidades de inversión, rentabilidad, beneficios ni la preservación del capital." },
        ],
      },
      {
        id: "investment-risk",
        title: "2. Advertencia sobre el riesgo de inversión",
        blocks: [
          { p: "Toda inversión conlleva riesgos." },
          { p: "Los clientes reconocen que:" },
          {
            ol: [
              "el valor de las inversiones puede subir o bajar;",
              "los clientes pueden perder una parte o la totalidad de los fondos invertidos;",
              "la rentabilidad histórica no garantiza resultados futuros;",
              "las decisiones de inversión deben tomarse tras considerar detenidamente las circunstancias financieras personales;",
              "los clientes pueden solicitar asesoramiento financiero independiente antes de invertir.",
            ],
            type: "a",
          },
          { p: "Fundora no garantiza ningún resultado concreto de las inversiones a las que se accede a través de la Plataforma." },
        ],
      },
      {
        id: "no-investment-advice",
        title: "3. Ausencia de asesoramiento de inversión",
        blocks: [
          { p: "Salvo que se indique expresamente lo contrario, Fundora no ofrece:" },
          { ol: ["recomendaciones de inversión;", "servicios de planificación financiera;", "asesoramiento de inversión personalizado;", "asesoramiento fiscal o legal."], type: "a" },
          { p: "La información mostrada en la Plataforma se ofrece con fines informativos generales y no debe considerarse asesoramiento profesional." },
        ],
      },
      {
        id: "customer-responsibility",
        title: "4. Responsabilidad del cliente",
        blocks: [
          { p: "Los clientes son responsables de:" },
          {
            ol: [
              "evaluar las oportunidades de inversión;",
              "comprender los riesgos asociados;",
              "determinar si una inversión se ajusta a sus objetivos;",
              "hacer un seguimiento de sus inversiones.",
            ],
            type: "a",
          },
          { p: "Los clientes reconocen que toman sus decisiones de inversión de forma independiente." },
        ],
      },
      {
        id: "third-party-providers",
        title: "5. Proveedores de inversión externos",
        blocks: [
          { p: "Los productos u oportunidades de inversión disponibles a través de la Plataforma los ofrecen instituciones externas." },
          { p: "Dichos terceros pueden tener sus propios:" },
          { ol: ["términos y condiciones;", "advertencias sobre riesgos;", "obligaciones regulatorias;", "documentación de inversión."], type: "a" },
          { p: "Fundora no controla las operaciones ni el rendimiento de los proveedores externos." },
        ],
      },
      {
        id: "virtual-account",
        title: "6. Información sobre la cuenta virtual",
        blocks: [
          { p: "Fundora puede proporcionar a cada cliente incorporado una cuenta virtual personalizada para facilitar las transacciones y las actividades de inversión." },
          { p: "La cuenta virtual:" },
          {
            ol: [
              "permite el funcionamiento de la plataforma;",
              "ayuda al seguimiento de las transacciones;",
              "respalda las selecciones de inversión;",
              "mejora la experiencia del cliente.",
            ],
            type: "a",
          },
          { p: "La cuenta virtual no debe interpretarse como una cuenta de depósito, salvo que la proporcione expresamente una entidad financiera autorizada." },
        ],
      },
      {
        id: "security",
        title: "7. Información sobre seguridad",
        blocks: [
          { p: "Fundora aplica medidas de seguridad que incluyen:" },
          {
            ol: [
              "autenticación de dos factores;",
              "verificación por huella dactilar/biométrica cuando esté disponible;",
              "cifrado de los datos de los clientes mediante tecnología de cifrado segura, incluida Tremble Vault;",
              "controles de gestión del acceso;",
              "supervisión de la seguridad.",
            ],
            type: "a",
          },
          { p: "Los clientes reconocen que existen riesgos de ciberseguridad y se comprometen a mantener seguras sus credenciales de acceso." },
        ],
      },
      {
        id: "data-privacy",
        title: "8. Datos y privacidad",
        blocks: [
          { p: "Fundora recopila y trata la información de los clientes de conformidad con su Política de privacidad y la legislación de protección de datos aplicable." },
          { p: "La información de los clientes puede utilizarse para:" },
          { ol: ["la creación de cuentas;", "la verificación de la identidad;", "el cumplimiento normativo;", "la mejora del servicio;", "fines de seguridad."], type: "a" },
        ],
      },
      {
        id: "fraud-compliance",
        title: "9. Información sobre fraude y cumplimiento",
        blocks: [
          { p: "Fundora puede llevar a cabo verificaciones de identidad, supervisión del fraude, controles de sanciones y otros controles de cumplimiento." },
          { p: "Fundora puede restringir, suspender o cerrar cuentas cuando se detecte actividad sospechosa o ilícita." },
        ],
      },
      {
        id: "availability",
        title: "10. Disponibilidad de los servicios",
        blocks: [
          { p: "La Plataforma puede no estar disponible ocasionalmente debido a:" },
          { ol: ["tareas de mantenimiento;", "problemas técnicos;", "interrupciones de servicios de terceros;", "medidas de seguridad."], type: "a" },
          { p: "Fundora tomará medidas razonables para mantener la disponibilidad del servicio, pero no garantiza un acceso ininterrumpido." },
        ],
      },
      {
        id: "acknowledgement",
        title: "11. Reconocimiento",
        blocks: [
          { p: "Al utilizar la Plataforma, usted reconoce que:" },
          {
            ol: [
              "las inversiones conllevan riesgos;",
              "Fundora no es responsable de las pérdidas de mercado;",
              "las decisiones de inversión son responsabilidad suya;",
              "ha revisado toda la información relevante antes de continuar.",
            ],
            type: "a",
          },
        ],
      },
    ],
  },
};

export default es;
