import { TELEPHONIE_FIXE } from '@/content/telephonieFixe';
import { Hero } from '@/components/Hero';
import { Pillars } from '@/components/Pillars';
import { SectionTitle } from '@/components/SectionTitle';
import { FeatureCard } from '@/components/FeatureCard';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { SEO } from '@/components/SEO';

export default function Page() {
  const c = TELEPHONIE_FIXE;
  return (
    <>
      <SEO
        title="Téléphonie fixe d’entreprise"
        description={c.hero.subtitle}
        path="/telephonie-fixe"
        type="product"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
        product={{ name: 'Téléphonie fixe', description: c.hero.subtitle }}
        faq={c.faq.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Hero {...c.hero} />
      <Pillars items={c.pillars as any} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Fonctionnalités clés" align="center">
            Tout ce qu’il faut pour une téléphonie pro moderne
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {c.features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 border-y">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle eyebrow="Performance" subtitle={c.missedCalls.description}>
              {c.missedCalls.title}
            </SectionTitle>
            <div className="rounded-lg border border-gray-200 p-4 bg-white">
              <svg viewBox="0 0 300 120" role="img" aria-label={c.missedCalls.chartLabel} className="w-full h-36">
                <desc>Graphique simple en aires montrant une amélioration du taux de réponse</desc>
                <rect x="0" y="0" width="300" height="120" fill="#f1f5f9" />
                <polyline points="0,100 60,90 120,80 180,60 240,40 300,30" fill="none" stroke="#0F4C81" strokeWidth="3" />
                <text x="10" y="20" fontSize="12" fill="#0F4C81">{c.missedCalls.chartLabel}</text>
              </svg>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image src="https://picsum.photos/seed/calls/800/600" alt="Illustration centre d’appels efficace" fill className="object-cover rounded-lg ring-1 ring-gray-200" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle eyebrow="Portail d’administration" subtitle={c.adminPortal.description}>
              {c.adminPortal.title}
            </SectionTitle>
            <ul className="mt-4 space-y-2">
              {c.adminPortal.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6"><Button href="/contact">Demander un devis</Button></div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image src="https://picsum.photos/seed/portal/800/600" alt="Capture fictive du portail d’administration" fill className="object-cover rounded-lg ring-1 ring-gray-200" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 border-y">
        <div className="container mx-auto">
          <SectionTitle eyebrow="FAQ" align="center">
            On répond à tes questions
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {c.faq.map((f) => (
              <div key={f.q} className="rounded-lg border border-gray-200 p-6 bg-white">
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center">
          <SectionTitle eyebrow="Parlons de ton projet" align="center">
            Prêt à moderniser ta téléphonie ?
          </SectionTitle>
          <Button href="/contact">Parler à un expert</Button>
        </div>
      </section>
    </>
  );
}


