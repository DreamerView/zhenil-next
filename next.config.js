/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
const headers = require('./headers');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
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
});
