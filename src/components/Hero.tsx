import Image from 'next/image';
import { Button } from './Button';
import type { Route } from 'next';
import type { UrlObject } from 'url';

type HeroProps = {
  title: string;
  subtitle: string;
  ctas: ReadonlyArray<{ label: string; href: Route | UrlObject }>;
  image?: { src: string; alt: string };
};

export function Hero({ title, subtitle, ctas, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        {image && (
          <div className="relative aspect-[4/3] md:aspect-[5/4] w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg ring-1 ring-gray-200"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}


