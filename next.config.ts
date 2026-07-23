import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — without this, Next.js walks
  // up and finds an unrelated package-lock.json in the home directory and
  // mistakes it (and stray files like ~/proxy.js) for part of this app.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Placeholder logos/covers are SVGs. Once real raster logos are
    // supplied, this can likely be removed.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
