/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'images.unsplash.com',
      '1000logos.net',
      'i.imgur.com',
      'upload.wikimedia.org',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
