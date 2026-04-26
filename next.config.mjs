/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable strict type checking during build
    tsconfigPath: './tsconfig.json',
  },
  images: {
    // Enable image optimization in production
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Security headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
