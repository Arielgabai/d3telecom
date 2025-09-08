"use client";
import Script from 'next/script';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'product';
  faq?: { question: string; answer: string }[];
  org?: { name: string; url: string; logo?: string };
  product?: { name: string; description: string };
};

export function SEO({ title, description, path, faq, org, product }: SEOProps) {
  const jsonLd: any[] = [];
  if (org) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: org.name,
      url: org.url,
      logo: org.logo,
    });
  }
  if (product) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
    });
  }
  if (faq && faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  return (
    <>
      {jsonLd.map((data, idx) => (
        <Script key={idx} id={`jsonld-${idx}`} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(data)}
        </Script>
      ))}
    </>
  );
}


