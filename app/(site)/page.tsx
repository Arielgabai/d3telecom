import { Hero } from '@/components/Hero';
import { Pillars } from '@/components/Pillars';
import { FeatureCard } from '@/components/FeatureCard';
import { Testimonial } from '@/components/Testimonial';
import Image from 'next/image';
import Link from 'next/link';
import { HOME } from '@/content/home';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/Button';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Accueil"
        description={HOME.hero.subtitle}
        path="/"
        type="website"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero {...HOME.hero} />

      <Pillars items={HOME.pillars as any} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Offres" align="center">
            Choisis ce qui sert ton activité
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {HOME.featuredOffers.map((o) => (
              <div key={o.name} className="rounded-lg border border-gray-200 p-6 bg-white flex flex-col">
                <div className="relative h-32 w-full mb-4">
                  <Image src={`https://picsum.photos/seed/${encodeURIComponent(o.name)}/600/300`} alt={`Illustration ${o.name}`} fill className="object-cover rounded" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{o.name}</h3>
                <p className="mt-2 text-gray-600 flex-1">{o.description}</p>
                <div className="mt-4">
                  <Link href={o.href} className="text-brand-primary hover:underline">Découvrir</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Ils nous font confiance" align="center">
            Preuves sociales
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {HOME.logos.map((logo, i) => (
              <div key={i} className="relative h-12 grayscale opacity-70">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 border-y">
        <div className="container mx-auto">
          <SectionTitle eyebrow="Avis" align="center">
            Ce que nos clients disent
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {HOME.testimonials.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Parler à un expert</Button>
          </div>
        </div>
      </section>
    </>
  );
}


