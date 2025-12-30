import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath when deploying to GitHub Pages
  // basePath: '/anurag',
};

export default nextConfig;
