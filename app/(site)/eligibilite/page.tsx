"use client";
import { Hero } from '@/components/Hero';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SEO } from '@/components/SEO';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  address: z.string().min(5, 'Adresse requise'),
  zip: z.string().min(4, 'Code postal requis'),
  city: z.string().min(2, 'Ville requise'),
  email: z.string().email('Email valide requis'),
});

type FormValues = z.infer<typeof schema>;

export default function Page() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    console.log('Éligibilité demandée', data);
    alert('Merci ! Nous revenons vers toi avec le résultat.');
    reset();
  };

  return (
    <>
      <SEO
        title="Test d’éligibilité"
        description="Vérifie rapidement les accès disponibles à ton adresse."
        path="/eligibilite"
        type="website"
        org={{ name: 'NOM_ENTREPRISE', url: 'https://www.votredomaine.fr' }}
      />
      <Hero
        title="Teste ton éligibilité"
        subtitle="Renseigne ton adresse pour vérifier les accès disponibles (fibre dédiée, mutualisée, alternatives)."
        ctas={[]}
        image={{ src: 'https://picsum.photos/seed/map/1200/900', alt: 'Carte abstraite' }}
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Adresse</label>
              <input {...register('address')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Code postal</label>
                <input {...register('zip')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <input {...register('city')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" {...register('email')} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-md font-medium bg-brand-primary text-white hover:bg-[#0d416f] px-5 py-3">Vérifier</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}


