// middleware.ts (Edge runtime compatible)
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Generate a base64 nonce using Web Crypto (Edge runtime safe).
 */
function genNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // Base64-encode without Node Buffer
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  // btoa is available in Edge runtime
  return btoa(bin);
}

/**
 * Build an enforced CSP using the given nonce.
 * No 'unsafe-inline' / 'unsafe-eval'. Uses 'strict-dynamic' + nonce for Next scripts.
 */
function cspWithNonce(nonce: string): string {
  const directives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self'`,
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `connect-src 'self' https:`,
    `frame-ancestors 'none'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ];
  return directives.join('; ');
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const nonce = genNonce();
  const csp = cspWithNonce(nonce);

  // Expose nonce so App Router can bind it to inline <Script nonce={...} />
  res.headers.set('x-nonce', nonce);

  // Enforce CSP
  res.headers.set('Content-Security-Policy', csp);

  // Extra hardening
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  res.headers.set('X-Download-Options', 'noopen');

  return res;
}

// Run on all routes except Next static assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
