import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/name", permanent: true },
      { source: "/our-story", destination: "/name", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/our-expertise", destination: "/sevices", permanent: true },
      { source: "/snr-leadership-team", destination: "/team", permanent: true },
      { source: "/projects", destination: "/gallery", permanent: true }
    ];
  }
};

export default nextConfig;
