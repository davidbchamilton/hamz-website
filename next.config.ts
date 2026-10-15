import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 82]
  },
  async headers() {
    return [
      {
        source: "/_next/static/media/:font(.*\\.woff2)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex"
          }
        ]
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
