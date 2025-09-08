import Link from 'next/link';
import { NavLink } from './NavLink';
import { Button } from './Button';
import { BRAND } from '@/content/brand';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-semibold text-gray-900" aria-label={`Aller à l’accueil ${BRAND.name}`}>
          <span className="text-brand-primary">{BRAND.name}</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-1">
          <NavLink href="/telephonie-fixe">Téléphonie fixe</NavLink>
          <NavLink href="/telephonie-mobile">Téléphonie mobile</NavLink>
          <NavLink href="/acces-internet">Internet pro</NavLink>
          <NavLink href="/audit-telecom">Audit télécom</NavLink>
          <NavLink href="/eligibilite">Éligibilité</NavLink>
          <NavLink href="/recrutement">Recrutement</NavLink>
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" variant="primary">Demander un devis</Button>
        </div>
      </div>
    </header>
  );
}


