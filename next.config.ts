import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Maintien de la stricte conformité React
  output: 'export',      // Permet d'exporter un site statique
};

export default nextConfig;
