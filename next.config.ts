import type { NextConfig } from "next";

// This is a fully static marketing page: no accounts, forms, or per-request
// dynamic content (see e2e/_common.py), so a nonce-based CSP (which needs
// middleware to mint a fresh value per request, per umoja-voices' proxy.ts
// approach) would be unneeded complexity here. A single static policy below
// covers every request the same way.
//
// script-src/style-src need 'unsafe-inline': Next.js's App Router ships
// hydration flight-data in inline <script> tags, and next/image sets an
// inline `style` attribute on optimized <img> elements — neither carries a
// nonce or hash without middleware. connect-src/img-src/font-src stay at
// 'self' because everything this page actually loads is same-origin:
// next/font/google self-hosts Geist under /_next/static/media at build
// time (no runtime request to fonts.googleapis.com), partner/team images
// are local files in public/, and @vercel/analytics + @vercel/speed-insights
// both script from and beacon to same-origin paths that Vercel's edge
// rewrites internally (/_vercel/insights/*, /_vercel/speed-insights/*).
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
  // Vercel terminates TLS and redirects http->https at the edge, so this is
  // defense-in-depth rather than a gap fix — but it's a free addition with
  // no functional downside, so no reason not to send it.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
