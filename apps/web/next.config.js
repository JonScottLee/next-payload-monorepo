/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  distDir: '.next',
  transpilePackages: ['@org/uikit'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
