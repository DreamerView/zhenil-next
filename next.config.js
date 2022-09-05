/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');

module.exports = {
  env: {
    authorName:"Okki.kz",
    siteName: 'okki.kz',
    hostName: 'https://okki.kz'
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'kk'],
    defaultLocale: 'en'
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers
      },
    ];
  }
};
