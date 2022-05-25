/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
};

module.exports = nextConfig;
