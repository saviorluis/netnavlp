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
            // Allow eval and ensure all necessary domains are included
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self' localhost:*; worker-src 'self' blob:;"
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
    
    // Allow the cobe library to work properly
    config.module.rules.push({
      test: /cobe\/dist\/index\.js/,
      use: 'next-softline-loader',
      type: 'javascript/auto',
    });
    
    return config;
  },
  // Just to be safe - ensure App Router is enabled
  experimental: {}
};

module.exports = nextConfig; 