import Link from 'next/link';
import { BRAND } from '@/content/brand';

export function TopBar() {
  return (
    <div className="bg-brand-secondary text-gray-100 text-sm">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <Link href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="hover:underline" aria-label={`Appeler ${BRAND.phone}`}>
            {BRAND.phone}
          </Link>
          <span aria-hidden="true" className="opacity-50">•</span>
          <Link href={`mailto:${BRAND.email}`} className="hover:underline" aria-label={`Écrire à ${BRAND.email}`}>
            {BRAND.email}
          </Link>
        </div>
        <div>
          <Link href="/contact" className="hover:underline" aria-label="Accéder au support">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}


