import Link from 'next/link';
import { BRAND } from '@/content/brand';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white" role="contentinfo">
      <div className="container mx-auto grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold text-brand-primary">{BRAND.name}</div>
          <p className="mt-2 text-sm text-gray-600">{BRAND.baseline}</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Liens rapides</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/telephonie-fixe">Téléphonie fixe</Link></li>
            <li><Link className="hover:underline" href="/telephonie-mobile">Téléphonie mobile</Link></li>
            <li><Link className="hover:underline" href="/acces-internet">Internet pro</Link></li>
            <li><Link className="hover:underline" href="/audit-telecom">Audit télécom</Link></li>
            <li><Link className="hover:underline" href="/eligibilite">Éligibilité</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Coordonnées</div>
          <ul className="mt-3 space-y-1 text-sm">
            <li>{BRAND.address}</li>
            <li>{BRAND.zone}</li>
            <li><Link className="hover:underline" href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</Link></li>
            <li><Link className="hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Légal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/mentions-legales">Mentions légales</Link></li>
            <li><Link className="hover:underline" href="/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
      </div>
    </footer>
  );
}


