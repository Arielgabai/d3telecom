import Image from 'next/image';
import { BRAND } from '@/content/brand';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <span className={className}>
      <Image
        src={BRAND.logoSrc || '/images/d3telecom-logo.jpg'}
        alt={`${BRAND.name} - ${BRAND.baseline}`}
        width={180}
        height={60}
        priority={priority}
        className="h-8 w-auto"
      />
      <span className="sr-only">{BRAND.name}</span>
    </span>
  );
}


