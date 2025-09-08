export const BRAND = {
  name: "NOM_ENTREPRISE",
  baseline: "Solutions télécom professionnelles, simples et évolutives",
  phone: "0X XX XX XX XX",
  email: "contact@votredomaine.fr",
  address: "Adresse complète",
  zone: "France entière / Région / Département",
  palette: {
    primary: "#0F4C81",
    secondary: "#1F2937",
    accent: "#06B6D4",
  },
} as const;

export type Brand = typeof BRAND;


