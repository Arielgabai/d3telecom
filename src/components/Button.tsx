import Link from 'next/link';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import type { Route } from 'next';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-primary text-white hover:bg-[#0d416f] px-5 py-3',
  secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 px-5 py-3',
  ghost: 'text-brand-primary hover:bg-blue-50 px-3 py-2',
};

type ButtonProps = PropsWithChildren<{
  href?: Route;
  variant?: Variant;
  className?: string;
}> & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, children, variant = 'primary', className, ...props }: ButtonProps) {
  const classes = [base, variants[variant], className].filter(Boolean).join(' ');
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={typeof children === 'string' ? children : undefined}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


