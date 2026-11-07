import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to out/, ready for any static host.
// NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow ("/guinea_web"); empty locally
// and on hosts that serve from the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
