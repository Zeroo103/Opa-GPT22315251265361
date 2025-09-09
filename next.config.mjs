/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/OpaGPTV21000312' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OpaGPTV21000312/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
