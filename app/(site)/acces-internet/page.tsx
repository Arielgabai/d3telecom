import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Internet professionnel"
        description="Fibre dédiée, SDSL, 4G/5G de secours et QoS pour garder le cap."
        path="/acces-internet"
        type="product"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Internet professionnel fiable, priorisé et supervisé"
        subtitle="Fibre dédiée, SDSL, 4G/5G de secours et QoS pour garder le cap en toute circonstance."
        ctas={[{ label: 'Demander un devis', href: '/contact' }, { label: 'Être rappelé', href: { pathname: '/contact', query: { callback: '1' } } }]}
        image={{ src: '/images/internet-pro-hero.jpg', alt: 'Accès Internet professionnel' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Options" align="center">
            Conçu pour les applications critiques
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard title="Fibre dédiée" description="Débit garanti, latence maîtrisée et supervision proactive." />
            <FeatureCard title="Secours 4G/5G" description="Bascule automatique en cas d’incident opérateur." />
            <FeatureCard title="QoS & SD‑WAN" description="Priorisation des flux voix/vidéo et agrégation multisites." />
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Parler à un expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}


