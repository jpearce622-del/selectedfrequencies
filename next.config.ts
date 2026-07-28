import type { NextConfig } from "next";
import path from "node:path";

// ---------------------------------------------------------------------------
// LEGACY WIX URL MAP
// ---------------------------------------------------------------------------
// The old Wix site published articles under /post/<slug>. Google still has
// those indexed, so they must 301 to their closest current equivalent rather
// than 404 — a 301 passes on whatever authority the old URL holds.
//
// TODO (James): pull the full list of still-indexed old URLs from Google
// Search Console → Indexing → Pages (and the "Not found (404)" report), then
// add a line here for each one. Anything not listed falls through to the
// catch-all below, which sends it to /blog instead of a dead end.
//
// Format: { from: "old-wix-slug", to: "/current/path" }
const legacyPostRedirects: { from: string; to: string }[] = [
  {
    // Known indexed URL from the audit.
    from: "the-importance-of-podcast-cover-artwork-and-how-to-get-noticed",
    // No cover-artwork post exists yet; the launch roadmap covers artwork
    // (step 2) and is the closest genuinely useful destination.
    to: "/podcast-launch-roadmap",
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — without this, Next.js walks
  // up and finds an unrelated package-lock.json in the home directory and
  // mistakes it (and stray files like ~/proxy.js) for part of this app.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Modern formats first; Next falls back automatically for older browsers.
    formats: ["image/avif", "image/webp"],
    // Placeholder logos/covers are SVGs. Once real raster logos are
    // supplied, this can likely be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // 1. Specific old-post mappings (most specific first), tolerating the
      //    trailing slash Wix used.
      ...legacyPostRedirects.flatMap(({ from, to }) => [
        { source: `/post/${from}`, destination: to, permanent: true },
        { source: `/post/${from}/`, destination: to, permanent: true },
      ]),

      // 2. Catch-all: any other old /post/... URL lands on the blog index
      //    rather than a 404.
      { source: "/post/:slug*", destination: "/blog", permanent: true },

      // 3. Other legacy Wix paths referenced in the old site.
      { source: "/ourwork", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
