import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Audit télécom"
        description="Un état des lieux concret et un plan d’action priorisé pour réduire les coûts."
        path="/audit-telecom"
        type="product"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Audit télécom : clarifie, optimise, sécurise"
        subtitle="Un état des lieux concret et un plan d’action priorisé pour réduire les coûts et améliorer l’expérience."
        ctas={[{ label: 'Demander un devis', href: '/contact' }, { label: 'Être rappelé', href: '/contact?callback=1' }]}
        image={{ src: 'https://picsum.photos/seed/audit/1200/900', alt: 'Schéma d’architecture réseau abstrait' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Livrables" align="center">
            Ce que tu obtiens
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard title="Cartographie" description="Inventaire des liens, équipements et contrats en place." />
            <FeatureCard title="Analyse QoS" description="Mesures, goulots d’étranglement, recommandations concrètes." />
            <FeatureCard title="Plan d’actions" description="Priorisation par impact/budget et feuille de route pratique." />
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Parler à un expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}


