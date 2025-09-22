// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Add remote image domains here if ever needed:
    // domains: ['assets.covrenfirm.com'],
  },

  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Hardened security headers (CSP is set in middleware with a per-request nonce)
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Enforce HTTPS once TLS is enabled on host
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
