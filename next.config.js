/** @type {import('next').NextConfig} */
const basePath = '/rajesh-nithyar-reception';
const assetPrefix = '/reception-static';

const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
