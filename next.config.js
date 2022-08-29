/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'kk'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  }
};
