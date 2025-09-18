/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/saybudget-figma-design',
  assetPrefix: '/saybudget-figma-design',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig