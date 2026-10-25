import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // pdf.js memakai canvas opsional di Node; abaikan agar build di Vercel tidak gagal.
  turbopack: {
    resolveAlias: { canvas: "./src/lib/empty-module.ts" },
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
