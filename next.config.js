/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Ensures static HTML export
    images: {
      unoptimized: true, // Required for static export
    },
    // Adjust basePath if deploying to a subfolder
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    // Disable server actions since we're doing static export
    experimental: {
      serverActions: false,
      serverComponentsExternalPackages: [
        '@react-email/render',
    ]
    }
  }
  
  module.exports = nextConfig
