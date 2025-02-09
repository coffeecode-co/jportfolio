import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-fda94ed7b1d0487db34447feefb77dbb.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
