import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    /**
     * Serve every image as-is from /public instead of through the optimizer.
     *
     * Vercel's free tier caps Image Optimization at 5,000 transformations;
     * past that the `/_next/image` endpoint errors and covers break. This
     * site publishes 52 case-study screenshots, so the quota goes fast.
     *
     * The trade-off is accepted deliberately: every asset here is already a
     * sensibly-sized local file (WebP / JPEG / PNG, 8-190 KB), so the
     * optimizer was buying little. What we lose is responsive `srcset`
     * selection — mobile visitors now download the full-size file.
     */
    unoptimized: true,
  },
};

export default nextConfig;
