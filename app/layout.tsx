// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';
import './globals.css';

const siteUrl = 'https://covrenfirm.com';
const siteName = 'Covren Firm — Sovereign Execution';
const siteTitle = 'Covren Firm | Sovereign AI Execution for Apex Operators';
const siteDesc =
  'We weaponize AI into an execution force that obliterates inefficiency and multiplies throughput. No fluff. Only outcomes.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Covren Firm' },
  description: siteDesc,
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDesc,
  },
  alternates: { canonical: siteUrl },
  other: { 'color-scheme': 'dark' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the per-request nonce injected by middleware.ts
  const nonce = headers().get('x-nonce') ?? undefined;

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Covren Firm',
    url: siteUrl,
    sameAs: ['https://covrenops.com'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
        {/* CSP-compliant inline JSON-LD (nonce required) */}
        <Script
          id="org-ld"
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </body>
    </html>
  );
}
