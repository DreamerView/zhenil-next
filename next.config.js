/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');

module.exports = {
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
