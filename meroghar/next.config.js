/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep App Router enabled
  experimental: {
    appDir: true,
  },

  // Optimize for development
  reactStrictMode: true,
  swcMinify: true, // Use SWC for minification (faster than Terser)

  // Combine image configurations
  images: {
    domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
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
    ]
  },

  // Route handling
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      },
    ]
  },

  // Development optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize development builds
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
      }
    }
    return config
  },
}

module.exports = nextConfig
