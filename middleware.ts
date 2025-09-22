// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import crypto from 'node:crypto';

/**
 * Generate a base64 nonce for this response.
 * Attached to:  - CSP (script-src 'nonce-...')
 *               - x-nonce header (so App Router can read it)
 */
function genNonce(): string {
  return crypto.randomBytes(16).toString('base64');
}

/**
 * Build an enforced Content-Security-Policy using the given nonce.
 * Notes:
 *  - No 'unsafe-inline' / 'unsafe-eval'
 *  - 'strict-dynamic' + nonce allows Next to hydrate client bundles safely
 *  - Blocks framing; upgrades mixed content; denies plugins/objects
 */
function cspWithNonce(nonce: string): string {
  const directives = [
    `default-src 'self'`,
    // Next.js injects runtime scripts; allow only those with our nonce.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    // Tailwind is compiled; avoid inline styles in app code.
    `style-src 'self'`,
    // Permit data/blob for inline assets & videos/images you may embed.
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    // API / analytics endpoints you control. Extend as needed.
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

  // Expose nonce to the app so you can attach it to <Script nonce={...} />
  res.headers.set('x-nonce', nonce);

  // Enforced CSP (not report-only)
  res.headers.set('Content-Security-Policy', csp);

  // Extra hardening (non-breaking)
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  res.headers.set('X-Download-Options', 'noopen');

  return res;
}

// Apply to all routes
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
