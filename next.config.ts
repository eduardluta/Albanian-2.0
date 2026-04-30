import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: { removeConsole: { exclude: ["error"] } },
  experimental: { optimizePackageImports: [] },
};

export default nextConfig;
