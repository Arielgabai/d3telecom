export const TELEPHONIE_FIXE = {
  hero: {
    title: "Téléphonie fixe d’entreprise, prête pour la croissance",
    subtitle:
      "Standards virtuels, VoIP et outils de collaboration réunis dans une solution claire, évolutive et sécurisée.",
    ctas: [
      { label: "Demander un devis", href: "/contact" },
      { label: "Être rappelé", href: { pathname: "/contact", query: { callback: '1' } } },
    ],
    image: {
      src: "https://picsum.photos/seed/fixed-telephony/1200/900",
      alt: "Illustration abstraite de réseau fibre et interconnexions",
    },
  },
  pillars: [
    {
      title: "Mise en service rapide",
      description: "Déploiement guidé, sans rupture.",
      icon: "BoltIcon",
    },
    {
      title: "Mobilité totale",
      description: "Ligne fixe sur smartphone/PC, softphone, télétravail.",
      icon: "DevicePhoneMobileIcon",
    },
    {
      title: "Pilotage & productivité",
      description: "Statistiques, supervision, files d’appels.",
      icon: "ChartBarIcon",
    },
    {
      title: "Maîtrise des coûts",
      description: "Forfaits adaptés, visibilité des dépenses.",
      icon: "BanknotesIcon",
    },
  ],
  features: [
    {
      title: "Standard téléphonique virtuel (cloud PBX)",
      description:
        "SVI, musiques d’attente, transferts, sonneries simultanées, files, horaires/fermetures, messagerie vocale vers email.",
    },
    {
      title: "Forfaits pro",
      description:
        "Options illimité vers fixes/mobiles France, Europe et destinations internationales. Tu choisis par profil d’usage et tu ajustes quand tu veux.",
    },
    {
      title: "Équipements",
      description:
        "Postes IP HD, DECT, casques. BYOD possible pour équipes déjà équipées.",
    },
    {
      title: "Collaboration",
      description:
        "Annuaire d’entreprise, chat, partage de documents et audio-conf intégrés.",
    },
  ],
  missedCalls: {
    title: "Réduis les appels manqués",
    description:
      "Transferts, interception, mise en attente/park, renvoi fixe/mobile, messages hors horaires et rappel automatique t’aident à capter chaque opportunité.",
    chartLabel: "Taux d’appels répondus",
  },
  adminPortal: {
    title: "Autonomie & portail d’administration",
    description:
      "Gère utilisateurs, répertoires, rôles, ajout/modif de lignes, vues de consommation en cours, factures, parc et suivi de déploiement.",
    checklist: [
      "Création rapide d’utilisateurs",
      "Rôles et droits granulaires",
      "Vue consommation en temps réel",
      "Gestion du parc et équipements",
      "Historique et factures",
      "Suivi des tickets et déploiements",
    ],
  },
  faq: [
    {
      q: "Peux-tu conserver tes numéros actuels (portabilité) ?",
      a: "Oui, nous orchestrons la portabilité en limitant l’impact sur ton activité. Le planning t’est communiqué à l’avance.",
    },
    {
      q: "Y a‑t‑il un engagement ?",
      a: "Plusieurs durées sont possibles selon le niveau de service et d’équipement. On t’aide à choisir la formule la plus souple.",
    },
    {
      q: "Comment garantissez‑vous la qualité (QoS / SD‑WAN) ?",
      a: "Nous priorisons la voix et pouvons activer un SD‑WAN selon les sites. Des tests de charge valident la configuration.",
    },
    {
      q: "Compatibilité avec l’existant (postes, câblage) ?",
      a: "Dans beaucoup de cas on réutilise l’infrastructure. Un audit rapide confirme les adaptations utiles.",
    },
    {
      q: "Quels délais d’installation ?",
      a: "De quelques jours à quelques semaines selon le nombre de sites et de numéros à porter.",
    },
    {
      q: "Support & SLA ?",
      a: "Support pro, supervision 24/7 de la plateforme et engagements de rétablissement selon le contrat.",
    },
  ],
  proofs: {
    logos: [
      { alt: "Logo client (placeholder)", src: "/images/logo-placeholder.svg" },
      { alt: "Logo client (placeholder)", src: "/images/logo-placeholder.svg" },
      { alt: "Logo client (placeholder)", src: "/images/logo-placeholder.svg" },
      { alt: "Logo client (placeholder)", src: "/images/logo-placeholder.svg" },
    ],
    testimonials: [
      {
        quote:
          "La gestion des files d’appels a fluidifié l’accueil. On suit enfin nos KPI sans tableur.",
        author: "Responsable Service Client, e‑commerce B2B",
      },
      {
        quote:
          "La bascule a été progressive et maîtrisée. Les équipes ont adopté le softphone en quelques jours.",
        author: "DSI, groupe multi‑sites",
      },
    ],
  },
} as const;

export type TelephonieFixe = typeof TELEPHONIE_FIXE;


