import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { BRAND } from '@/content/brand';
import { SEO } from '@/components/SEO';

export default function Page() {
  return (
    <>
      <SEO
        title="Contact"
        description="Explique-nous ton contexte, on te propose une solution claire et un calendrier."
        path="/contact"
        type="website"
        org={{ name: BRAND.name, url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Contacte nos experts"
        subtitle="Explique-nous ton contexte, on te propose une solution claire et un calendrier de mise en service."
        ctas={[]}
        image={{ src: 'https://picsum.photos/seed/contact/1200/900', alt: 'Discussion professionnelle' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Écris-nous</h2>
            <p className="mt-2 text-gray-600">Nous répondons rapidement, généralement sous 24h ouvrées.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Coordonnées</h2>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>Téléphone : {BRAND.phone}</li>
              <li>Email : {BRAND.email}</li>
              <li>Zone : {BRAND.zone}</li>
              <li>Adresse : {BRAND.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


