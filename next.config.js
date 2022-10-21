/*jshint esversion: 8 */
/** @type {import('next').NextConfig} */
// const {v4} = require('uuid');

const key_pass = "4piP7FKREnYA+S0CcxJe360Aph9zQN5AWr1xuxjSP+o=";

const production = process.env.NODE_ENV === 'production';

const src = 'https://cdnjs.cloudflare.com';

let build_id;
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const ContentSecurityPolicy = `
    script-src 'report-sample' 'self' 'nonce-${key_pass}'; 
    script-src-elem 'self' 'nonce-${key_pass}'; 
    script-src-attr 'self';
    style-src 'self' 'report-sample'; 
    style-src-elem  'self'  'unsafe-inline'; 
    style-src-attr 'self' 'unsafe-inline'; 
    connect-src 'self';
    base-uri 'none';
    form-action 'self';
    object-src 'none'; 
    child-src 'none';
    frame-src 'self';
    img-src 'self' data: blob:;
    manifest-src 'self';
    prefetch-src 'self';
    worker-src 'self';
    font-src 'self';  
    default-src 'self';
    media-src 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    report-uri https://okki.kz/constructor;
`;

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
        value: 'strict-origin-when-cross-origin'
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
        value:ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    }
    ]:[{
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=()'
  }];

module.exports = withPWA({
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
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:all*(svg|jpg|png|webp|ico)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=604800, must-revalidate',
  //         }
  //       ],
  //     },
  //   ]
  // },
});
