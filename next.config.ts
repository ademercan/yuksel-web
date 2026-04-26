import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.tai.com.tr' },
      { protocol: 'https', hostname: 'www.roketsan.com.tr' },
      { protocol: 'https', hostname: 'www.aselsan.com.tr' },
      { protocol: 'https', hostname: 'www.tusas.com' },
      { protocol: 'https', hostname: 'www.stm.com.tr' },
      { protocol: 'https', hostname: 'www.baykartech.com' },
      { protocol: 'https', hostname: 'www.kai.co.kr' },
      { protocol: 'https', hostname: 'logo.clearbit.com' },
      { protocol: 'https', hostname: 'www.turkishtechnic.com' },
      { protocol: 'https', hostname: 'www.sabanciuniv.edu' },
    ],
  },
};

export default nextConfig;
