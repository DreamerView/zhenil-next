/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
// const {v4} = require('uuid');

const key_pass = "4piP7FKREnYA+S0CcxJe360Aph9zQN5AWr1xuxjSP+o=";

const production = process.env.NODE_ENV === 'production';

const src = 'https://cdnjs.cloudflare.com';

const secure = production?[
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'Server',
        value: 'Nginx' // phony server value
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
    },
    {
        key: 'X-Permitted-Cross-Domain-Policies',
        value: 'none'
    },
    {
        key: 'Cross-Origin-Opener-Policy',
        value: "same-origin"
    },
    {
        key: 'Cross-Origin-Resource-Policy',
        value: "same-site"
    },
    {
        key: 'Cross-Origin-Embedder-Policy',
        value: "require-corp"
    },
    {
        key:"Content-Security-Policy",
        value:"script-src 'report-sample' 'self' 'strict-dynamic' 'nonce-"+key_pass+"' 'unsafe-inline'; script-src-elem 'self'  'nonce-"+key_pass+"'; script-src-attr 'self'; connect-src 'self';base-uri 'none';form-action 'self';object-src 'none'; child-src 'none';frame-src 'self';img-src 'self' data:;manifest-src 'self';prefetch-src 'self';worker-src 'self';font-src 'self';  style-src 'self' 'report-sample'; style-src-elem  'self' 'unsafe-inline'; style-src-attr 'self' 'unsafe-inline'; default-src 'self';media-src 'self';frame-ancestors 'self';upgrade-insecure-requests;"
    }
    ]:[{}];

module.exports = {
  poweredByHeader: false,
  env: {
    authorName:"Okki.kz",
    siteName: 'okki.kz',
    hostName: 'https://okki.kz',
    private: key_pass
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'kk'],
    defaultLocale: 'en'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: secure
      },
    ];
  }
};
