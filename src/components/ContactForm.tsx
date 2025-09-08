"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Prénom et nom requis'),
  company: z.string().min(2, 'Société requise'),
  email: z.string().email('Email valide requis'),
  phone: z
    .string()
    .min(6, 'Téléphone requis')
    .regex(/^[0-9+().\s-]+$/, 'Format non valide'),
  need: z.enum(['telephonie-fixe', 'telephonie-mobile', 'internet', 'audit', 'autre'], {
    required_error: 'Sélectionne un besoin',
  }),
  message: z.string().min(10, 'Message trop court'),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
      reset();
    }
  };

  if (submitted) {
    return (
      <div role="status" className="rounded-md border border-green-200 bg-green-50 p-4 text-green-900">
        Merci ! Ton message a bien été envoyé. Nous te recontactons rapidement.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input
          {...register('name')}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Société</label>
        <input
          {...register('company')}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
          autoComplete="organization"
        />
        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email')}
          type="email"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
        <input
          {...register('phone')}
          inputMode="tel"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
          autoComplete="tel"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Besoin</label>
        <select
          {...register('need')}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionner…
          </option>
          <option value="telephonie-fixe">Téléphonie fixe</option>
          <option value="telephonie-mobile">Téléphonie mobile</option>
          <option value="internet">Accès Internet</option>
          <option value="audit">Audit télécom</option>
          <option value="autre">Autre</option>
        </select>
        {errors.need && <p className="mt-1 text-sm text-red-600">{errors.need.message}</p>}
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus-visible:ring-brand-accent"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto inline-flex items-center justify-center rounded-md font-medium bg-brand-primary text-white hover:bg-[#0d416f] px-5 py-3"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}


