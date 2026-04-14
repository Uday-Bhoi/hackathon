import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath handles the repository sub-path for GitHub Pages
  basePath: '/hackathon',
  // assetPrefix is redundant with basePath in newer Next.js and can cause double-prefixed paths.
  // We remove it to let basePath handle internal routing and asset mapping.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
