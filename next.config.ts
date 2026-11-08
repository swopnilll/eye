import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      ...[
        "/care-packages",
        "/international-expertise",
        "/family-app",
        "/team",
        "/how-it-works",
        "/apply",
        "/privacy",
        "/terms",
        "/medical-disclaimer",
      ].map((source) => ({ source, destination: "/", permanent: false })),
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
