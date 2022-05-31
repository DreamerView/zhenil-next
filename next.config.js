/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
});
