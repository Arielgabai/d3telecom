export const BRAND = {
  name: "D3 Telecom",
  baseline: "Solutions télécom professionnelles, simples et évolutives",
  phone: "01 43 53 84 10",
  email: "contact@d3telecom.fr",
  address: "Adresse complète",
  zone: "France entière",
  logoSrc: "/images/d3telecom-logo.jpg",  palette: {
    primary: "#0F4C81",
    secondary: "#1F2937",
    accent: "#06B6D4",
  },
} as const;

export type Brand = typeof BRAND;


