import { PropsWithChildren } from 'react';

type SectionTitleProps = PropsWithChildren<{
  eyebrow?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}>;

export function SectionTitle({ eyebrow, children, subtitle, align = 'left' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`mb-10 ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-brand-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}


