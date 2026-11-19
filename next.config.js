/** @type {import('next').NextConfig} */
const basePath = '/rajesh-nithyar-reception';

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
