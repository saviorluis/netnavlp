/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure security headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Allow eval in both development and production modes
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self'"
          },
        ],
      },
    ];
  },
  // Make sure to use the correct output directory
  distDir: '.next',
  // Configure path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    };
    return config;
  },
  // Just to be safe - ensure App Router is enabled
  experimental: {}
};

module.exports = nextConfig; 