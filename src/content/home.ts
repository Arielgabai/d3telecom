import { BRAND } from './brand';

export const HOME = {
  hero: {
    title: `${BRAND.name} — télécom pro sans complexité`,
    subtitle:
      "Téléphonie fixe, mobile et Internet professionnel réunis dans une offre claire, fiable et prête pour ta croissance.",
    ctas: [
      { label: "Demander un devis", href: "/contact" },
      { label: "Être rappelé", href: "/contact?callback=1" },
    ],
    image: {
      src: "https://picsum.photos/seed/hero-network/1200/900",
      alt: "Illustration abstraite réseau et connectivité",
    },
  },
  pillars: [
    {
      title: "Mise en service rapide",
      description: "Déploiement guidé, sans rupture pour tes équipes.",
      icon: "BoltIcon",
    },
    {
      title: "Mobilité totale",
      description: "Ta ligne fixe sur smartphone et PC pour télétravail et déplacements.",
      icon: "DevicePhoneMobileIcon",
    },
    {
      title: "Pilotage & productivité",
      description: "Statistiques, supervision et files d’appels en temps réel.",
      icon: "ChartBarIcon",
    },
    {
      title: "Maîtrise des coûts",
      description: "Forfaits adaptés à ton usage avec visibilité des dépenses.",
      icon: "BanknotesIcon",
    },
  ],
  featuredOffers: [
    {
      name: "Téléphonie Fixe",
      description:
        "Standard virtuel, VoIP HD et outils de collaboration. Pensé pour l’entreprise moderne.",
      href: "/telephonie-fixe",
    },
    {
      name: "Téléphonie Mobile",
      description:
        "Forfaits pro, data priorisée et gestion de flotte simplifiée.",
      href: "/telephonie-mobile",
    },
    {
      name: "Accès Internet Pro",
      description:
        "Fibre dédiée, SDSL, 4G/5G de secours et QoS pour applications critiques.",
      href: "/acces-internet",
    },
  ],
  testimonials: [
    {
      quote:
        "On a modernisé toute notre téléphonie sans perturber l’activité. Le pilotage au quotidien est devenu très simple.",
      author: "Directeur des Opérations, PME industrielle",
    },
    {
      quote:
        "Support réactif et qualité d’appel au rendez-vous. On sait où on va niveau budget.",
      author: "Responsable IT, cabinet de services",
    },
  ],
  logos: [
    { alt: "Logo client A (placeholder)", src: "/images/logo-placeholder.svg" },
    { alt: "Logo client B (placeholder)", src: "/images/logo-placeholder.svg" },
    { alt: "Logo client C (placeholder)", src: "/images/logo-placeholder.svg" },
    { alt: "Logo client D (placeholder)", src: "/images/logo-placeholder.svg" },
  ],
} as const;

export type HomeContent = typeof HOME;


