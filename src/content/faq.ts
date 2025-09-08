export const FAQ = [
  {
    q: "Comment se passe l’audit télécom ?",
    a: "On démarre par un état des lieux simple, puis on te recommande des actions concrètes avec un plan par priorité.",
  },
  {
    q: "Quelles garanties sur la disponibilité ?",
    a: "La plateforme est redondée. Selon l’offre, tu peux ajouter un lien de secours 4G/5G et un SLA renforcé.",
  },
  {
    q: "Puis‑je mixer fixe, mobile et Internet chez vous ?",
    a: "Oui, c’est même recommandé pour simplifier le support et la facturation. Chaque service reste modulable.",
  },
  {
    q: "Quels moyens de contact support ?",
    a: "Ticket via le portail, téléphone et email. Tu choisis, on répond vite.",
  },
  {
    q: "Et côté sécurité ?",
    a: "Authentification forte, chiffrage des flux et journalisation. On t’aide à définir les bons rôles d’accès.",
  },
  {
    q: "Peut‑on tester avant ?",
    a: "Oui, un pilote est possible pour valider la qualité d’appel, le poste IP et le softphone.",
  },
] as const;

export type FaqItem = (typeof FAQ)[number];


