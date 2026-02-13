import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kin-nexus",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
