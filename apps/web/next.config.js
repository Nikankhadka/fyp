/** @type {import('next').NextConfig} */
const productionApiBaseUrl = 'https://fyp-yfyb.onrender.com'
const localApiBaseUrl = 'http://localhost:2900'

function isPrivateApiHost(hostname) {
  const normalizedHost = hostname.toLowerCase()

  if (
    normalizedHost === 'localhost' ||
    normalizedHost === '0.0.0.0' ||
    normalizedHost === '::1' ||
    normalizedHost === 'api' ||
    normalizedHost.endsWith('.local')
  ) {
    return true
  }

  if (/^127\./.test(normalizedHost) || /^10\./.test(normalizedHost)) {
    return true
  }

  if (/^192\.168\./.test(normalizedHost)) {
    return true
  }

  const private172Match = normalizedHost.match(/^172\.(\d{1,2})\./)
  if (private172Match) {
    const secondOctet = Number(private172Match[1])
    return secondOctet >= 16 && secondOctet <= 31
  }

  return false
}

function normalizeApiBaseUrl(value, fallback) {
  const trimmedValue = value?.trim()

  if (!trimmedValue) {
    return fallback
  }

  try {
    const url = new URL(trimmedValue)

    if (process.env.NODE_ENV === 'production' && isPrivateApiHost(url.hostname)) {
      console.warn(
        `Ignoring private production API URL "${trimmedValue}". Falling back to ${productionApiBaseUrl}.`,
      )
      return productionApiBaseUrl
    }

    return url.origin
  } catch {
    console.warn(
      `Ignoring invalid API URL "${trimmedValue}". Falling back to ${fallback}.`,
    )
    return fallback
  }
}

const defaultApiBaseUrl =
  process.env.NODE_ENV === 'production' ? productionApiBaseUrl : localApiBaseUrl

const apiBaseUrl = normalizeApiBaseUrl(
  process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
  defaultApiBaseUrl,
)

const nextConfig = {
  output: 'standalone',

  experimental: {
    // Per-icon code splitting for lucide-react named imports.
    optimizePackageImports: ['lucide-react'],
    serverActions: true,
    // Trace sharp and its prebuilt native binaries (@img/sharp-* and
    // @img/sharp-libvips-*) into the standalone server output so Next.js image
    // optimization works in production. pnpm symlinks these under .pnpm, so the
    // default nft trace misses them.
    outputFileTracingIncludes: {
      '/': [
        './node_modules/.pnpm/sharp@*/node_modules/sharp/**/*',
        './node_modules/.pnpm/@img+sharp-*/node_modules/@img/**/*',
      ],
    },
  },

  // Optimize for development
  reactStrictMode: true,
  swcMinify: true, // Use SWC for minification (faster than Terser)

  // Combine image configurations
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
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
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${apiBaseUrl}/:path*`,
      },
    ]
  },

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
