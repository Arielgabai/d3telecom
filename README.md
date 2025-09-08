# Site vitrine télécom B2B — Next.js 14 + TypeScript + Tailwind

## Installation

- `npm install`

## Développement

- `npm run dev` puis ouvre http://localhost:3000

## Build / Production

- `npm run build`
- `npm start`

## Arborescence

- `app/` App Router (pages). Inclut `robots.txt` et `sitemap.xml`.
- `src/components/` UI accessibles (TopBar, Header, Button, etc.).
- `src/content/` contenus éditoriaux: `brand.ts`, `home.ts`, `telephonieFixe.ts`, `faq.ts`.
- `styles/globals.css` Tailwind CSS + styles d’accessibilité.

## Où éditer vos informations

- `src/content/brand.ts`:
  - `name`, `baseline`, `phone`, `email`, `address`, `zone`, `palette`.
- `src/content/home.ts`:
  - Héros, piliers, offres, témoignages, logos.
- `src/content/telephonieFixe.ts`:
  - Piliers, fonctionnalités, bloc appels manqués, portail, FAQ, preuves.
- `src/content/faq.ts`:
  - FAQ générales du site.

## Formulaires

- `ContactForm` (react-hook-form + zod) dans `src/components/ContactForm.tsx`.
- Endpoint mock: `app/api/contact/route.ts` (console.log). TODO: brancher un mailer.

## SEO / Données structurées

- `next-seo` via `src/components/SEO.tsx` (metas OG + JSON‑LD `Organization`, `Product`, `FAQPage`).
- Balises par page: intégrées dans les composants pages au-dessus du contenu.
- Fichiers: `app/(site)/robots.txt`, `app/(site)/sitemap.xml`.

## Accessibilité

- Landmarks (`header`, `nav`, `main`, `footer`), focus visibles, contraste AA, `prefers-reduced-motion` respecté.

## Tests

- Vitest + Testing Library:
  - `npm test` (run)
  - `npm run test:watch`
- Exemples: `src/components/__tests__/Button.test.tsx`, `src/components/__tests__/FeatureCard.test.tsx`.

## Mini plan SEO on‑page

- Titles/H1:
  - `/` title: "NOM_ENTREPRISE — Solutions télécom professionnelles, simples et évolutives"; H1: héros home
  - `/telephonie-fixe` title: "Téléphonie fixe d’entreprise | NOM_ENTREPRISE"; H1: héros fixe
  - `/telephonie-mobile` title: "Téléphonie mobile pro | NOM_ENTREPRISE"; H1: héros mobile
  - `/acces-internet` title: "Internet professionnel | NOM_ENTREPRISE"; H1: héros internet
  - `/audit-telecom` title: "Audit télécom | NOM_ENTREPRISE"; H1: héros audit
  - `/eligibilite` title: "Test d’éligibilité | NOM_ENTREPRISE"; H1: héros éligibilité
  - `/contact` title: "Contact | NOM_ENTREPRISE"; H1: héros contact
- Maillage interne:
  - Header: offres + éligibilité + recrutement
  - Accueil: cartes vers pages piliers
  - Footer: liens rapides + légaux
- JSON‑LD:
  - `Organization` global, `Product` sur pages offres, `FAQPage` sur `/telephonie-fixe`.

## Checklist post‑mise en prod

- DNS ok (A/AAAA/CNAME) et HTTPS (certificat, HSTS si besoin)
- Variables d’env: `BASE_URL`, `MAILER_API_KEY`
- Analytics (Matomo/GA4) + anonymisation IP
- Google Search Console: propriété + `sitemap.xml` soumis
- Favicons, `robots.txt`, `sitemap.xml`
- Lighthouse: > 90 (Perf, Access, SEO)
- Accessibilité: test clavier, contrastes, labels formulaires
