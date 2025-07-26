/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better error catching
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images
      },
    ],
    // Uncomment if using Next.js Image Optimization API
    // formats: ['image/avif', 'image/webp'],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable SWC compiler (faster builds)
  swcMinify: true,

  // Webpack configuration for additional optimizations
  webpack: (config) => {
    // Important: return the modified config
    return config
  },

  // Optional: Enable experimental features
  experimental: {
    // optimizePackageImports: ['@radix-ui/react-icons'], // Uncomment if using Radix
    // serverActions: true, // Uncomment if using Server Actions
    // typedRoutes: true, // Uncomment for TypeScript route validation
  },

  // Production optimizations
  productionBrowserSourceMaps: false, // Enable for debugging production
  optimizeFonts: true, // Optimize Google Fonts
  compress: true, // Enable gzip compression
}

export default nextConfig