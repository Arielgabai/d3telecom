import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Téléphonie mobile pro"
        description="Forfaits adaptés à tes usages, data priorisée, gestion de flotte et support réactif."
        path="/telephonie-mobile"
        type="product"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Téléphonie mobile pro, simple et pilotable"
        subtitle="Forfaits adaptés à tes usages, data priorisée, gestion de flotte et support réactif."
        ctas={[{ label: 'Demander un devis', href: '/contact' }, { label: 'Être rappelé', href: '/contact?callback=1' }]}
        image={{ src: 'https://picsum.photos/seed/mobile/1200/900', alt: 'Smartphones professionnels' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Points forts" align="center">
            Ce que tu y gagnes
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard title="Forfaits lisibles" description="Choisis par profil d’usage et ajuste librement au fil des mois." />
            <FeatureCard title="Data priorisée" description="Qualité de service pour tes applis métiers en mobilité." />
            <FeatureCard title="Gestion de flotte" description="Suivi des lignes, options et consommations depuis un portail unique." />
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Parler à un expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}


