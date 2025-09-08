import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';
import { BRAND } from '@/content/brand';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.votredomaine.fr'),
  title: {
    default: `${BRAND.name} — ${BRAND.baseline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.baseline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <TopBar />
        <Header />
        <main id="main" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


