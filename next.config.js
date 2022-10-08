/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.pexels.com/v1', 'images.pexels.com'],
    // domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;
