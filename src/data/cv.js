// Contenu du portfolio, source unique de vérité.
// Corrigé depuis l'ancien site : "Atouts" (ex "Atous"), pas d'âge/tél en clair,
// langues en niveaux CECRL plutôt qu'en barres arbitraires.

export const profil = {
  nom: "Christophe Pauliac",
  titre: "Développeur & testeur logiciel",
  experienceAnnees: 4,
  lieu: "Quéven, France",
  pitch:
    "Je code par passion depuis le lycée : d'abord des antisèches et un Snake sur ma calculatrice, aujourd'hui des logiciels métier complets.",
  noteIA:
    "Aujourd'hui, l'IA fait partie de mon quotidien de développeur. Un outil que je manie tous les jours pour aller plus vite, mais c'est moi qui décide et qui vérifie.",
  permis: "Permis B, véhicule personnel",
};

export const contacts = {
  // email obfusqué côté rendu (voir Layout), jamais en clair dans le HTML source
  emailUser: "christophe.pauliac",
  emailDomain: "gmail.com",
  linkedin: "https://www.linkedin.com/in/christophe-pauliac-dl/",
  github: "", // à compléter si profil présentable
  cvPdf: "https://1drv.ms/b/s!AqQIysPytXrDaj514iPQ1RDSe-A",
};

// Projets professionnels (cartes de la page d'accueil)
export const projets = [
  {
    titre: "Industria.Net",
    resume:
      "Participation aux tests et développements du logiciel de gestion à l'affaire, en C#.",
    stack: ["C#", ".NET", "SQL Server"],
  },
  {
    titre: "Industria Web (powered by Axelor)",
    resume:
      "Participation aux développements de l'application web de gestion à l'affaire, en Java / React.",
    stack: ["Java", "React", "Axelor"],
  },
  {
    titre: "Reporting",
    resume: "Développement de rapports clients avec l'outil de reporting DevExpress.",
    stack: ["DevExpress", "C#", "SQL"],
  },
  {
    titre: "Reprise de données",
    resume:
      "Migration de clients vers un nouveau logiciel de gestion à l'affaire, via un outil développé en interne.",
    stack: ["ETL", "SQL", "Migration"],
  },
];

// Compétences groupées
export const competences = [
  { groupe: "Langages", items: ["Java", "C#", "Python", "JavaScript", "SQL"] },
  { groupe: "Web", items: ["HTML / CSS", "React", "jQuery", "Flask"] },
  { groupe: "Frameworks", items: ["Swing", "DevExpress", "JPA", "Hibernate"] },
  { groupe: "Bases de données", items: ["SQL Server", "MySQL", "PostgreSQL"] },
  { groupe: "Tests", items: ["JUnit", "NUnit", "Tests automatisés"] },
  { groupe: "Cloud", items: ["Azure (infra, VM, WebApp)", "CI/CD"] },
  { groupe: "Outils", items: ["Eclipse", "IntelliJ", "Visual Studio", "VS Code", "PowerShell"] },
  { groupe: "Méthodo", items: ["UML", "JSON / XML"] },
];

export const langues = [
  { langue: "Français", niveau: "Langue maternelle" },
  { langue: "Anglais", niveau: "Technique (B1)" },
];

export const atouts = ["Joie de vivre", "Organisé", "Autonome"];

export const interets = {
  DIY: [
    "Fabrication d'une fraiseuse numérique",
    "Fabrication d'une imprimante 3D",
    "Fabrication d'un drone",
  ],
  Développement: [
    "Apprentissage continu de nouveaux langages",
    "Réalisation de POC",
  ],
};

// Expériences (ordre anti-chronologique)
export const experiences = [
  {
    periode: "Depuis 2018",
    poste: "Développeur / testeur logiciel",
    lieu: "AG2L",
    points: [
      "Tests et développements sur Zéphyr, Industria 2007, Industria.Net, Industria.Web (Powered by Axelor)",
      "Analyses, chiffrages, réalisation de cahiers de tests",
      "Tests fonctionnels, de non-régression et automatisés",
      "Packaging de version, gestion de sources",
      "Développement de fonctionnalités, maintenances, reports",
    ],
  },
  {
    periode: "Mai - Juin 2018",
    poste: "Stage développeur logiciel",
    lieu: "",
    points: [
      "Étude et développement d'une application web de data-logging de bâtiments (Python)",
    ],
  },
  {
    periode: "2015 - 2018",
    poste: "Agent de recette",
    lieu: "",
    points: [
      "Recette des matériels neufs ou en retour de réparation",
      "Gestion des litiges et des matériels sous douane",
    ],
  },
  {
    periode: "2009 - 2015",
    poste: "Mécanicien maintenance aéronautique NTI2, Atlantique 2",
    lieu: "",
    points: ["Inspection détaillée de l'aéronef et remise en état"],
  },
  {
    periode: "2008 - 2009",
    poste: "Opérateur sur piste d'aérodrome",
    lieu: "",
    points: ["Accueil des aéronefs en escale"],
  },
  {
    periode: "Étés 2008 - 2009",
    poste: "Tourneur sur commande numérique",
    lieu: "",
    points: [
      "Préparation de postes pour lancements en production",
      "Contrôle métrologique des pièces usinées",
    ],
  },
];

export const formations = [
  { annee: "2022", intitule: "AZ-204, Microsoft Certified: Azure Developer Associate" },
  { annee: "2018", intitule: "Titre professionnel Développeur de logiciel (niveau III)" },
  { annee: "2017", intitule: "VAE Mécanicien de maintenance aéronautique, option porteur (niveau IV)" },
  { annee: "2008", intitule: "BTS Industrialisation des produits mécaniques" },
  { annee: "2006", intitule: "BAC STI Génie mécanique" },
];
