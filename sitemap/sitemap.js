const sitemap = require("nextjs-sitemap-generator");
const path = require('path');

sitemap({
  alternateUrls: {
    kk: "https://okki.kz/kk",
    ru: "https://okki.kz/ru",
    en: "https://okki.kz",
  },
  baseUrl: "https://okki.kz",
  pagesDirectory: path.resolve(__dirname,'../pages/'),
  targetDirectory: path.resolve(__dirname,'../public/'),
  sitemapFilename: "sitemap.xml",
  ignoredExtensions: ["png", "jpg","map","json","xml","jpeg","icon","svg","webp","css","jsx","js"],
  ignoredPaths:[
    "404",
    "translate",
    "api",
    "conf",
    "index"
  ],
  pagesConfig: {
    "/": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/constructor": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/constructor/acc": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/health": {
      priority: "1",
      changefreq: "daily",
    },
    "/health/bmi-calculator": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/health/ideal-weight": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/finance": {
      priority: "0.5",
      changefreq: "daily",
    },
  },
  extraPaths:[
    '/','/health','/finance','/constructor',"/constructor/acc","/health/bmi-calculator","/health/ideal-weight",
  ]
});