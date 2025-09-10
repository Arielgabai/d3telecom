"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BRAND } from '@/content/brand';

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  const fallbackSrc = '/images/logo-placeholder.svg';
  const [src, setSrc] = useState<string>(BRAND.logoSrc || fallbackSrc);

  return (
    <span className={className}>
      <Image
        src={src}
        alt={`${BRAND.name} - ${BRAND.baseline}`}
        width={180}
        height={60}
        priority={priority}
        className="h-16 w-auto"
        onError={() => setSrc(fallbackSrc)}
      />
      <span className="sr-only">{BRAND.name}</span>
    </span>
  );
}


