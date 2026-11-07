import type { NextConfig } from "next";

// Static export: every page is plain HTML built ahead of time (deployed on Vercel).
// NEXT_PUBLIC_BASE_PATH stays empty there; set it only if the site is ever served from a
// sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
