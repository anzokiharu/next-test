/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria');

const nextConfig = {
  // App Directory を有効化
  experimental: {
    appDir: true,
  },
};
module.exports = withLinaria(nextConfig);
