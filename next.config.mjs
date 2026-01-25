/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 2678400 * 12, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'admin.ashaa.xyz',
      },
      {
        protocol: 'https',
        hostname: 'deno.ashaa.xyz',
      },
        {
        protocol: 'http',
        hostname: 'deno.ashaa.xyz',
      },
    ],
  },
}

export default nextConfig
