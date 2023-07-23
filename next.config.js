/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/774898bfcddc4454b13029c1a678617e/**',
      },
    ],
  },
}

module.exports = nextConfig
