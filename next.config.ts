import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hackathon',
  assetPrefix: '/hackathon',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
