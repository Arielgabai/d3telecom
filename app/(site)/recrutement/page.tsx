import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Recrutement"
        description="Rejoins une équipe qui aime le concret."
        path="/recrutement"
        type="website"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Rejoins une équipe qui aime le concret"
        subtitle="On valorise l’autonomie, la fiabilité et la simplicité. Nos clients aussi."
        ctas={[]}
        image={{ src: 'https://picsum.photos/seed/team/1200/900', alt: 'Équipe au travail' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Nous recherchons" align="center">
            Profils orientés service
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard title="Tech / Réseau" description="Ingénieurs et techniciens qui aiment résoudre, documenter et améliorer." />
            <FeatureCard title="Opérations" description="Organisation, suivi de projets, qualité de service au quotidien." />
            <FeatureCard title="Conseil" description="Relation client, compréhension des enjeux, pédagogie et clarté." />
          </div>
        </div>
      </section>
    </>
  );
}


