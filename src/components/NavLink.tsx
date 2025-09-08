"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import type { Route } from 'next';
import type { UrlObject } from 'url';

type NavLinkProps = PropsWithChildren<{
  href: Route | UrlObject;
}>;

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const hrefPath = typeof href === 'string' ? href : href.pathname || '';
  const isActive = pathname === hrefPath;
  return (
    <Link
      href={href}
      className={
        'px-3 py-2 rounded-md text-sm font-medium ' +
        (isActive
          ? 'text-brand-primary bg-blue-50'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50')
      }
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}


