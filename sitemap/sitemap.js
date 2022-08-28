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
      changefreq: "daily",
    },
    "/constructor": {
      changefreq: "daily",
    },
    "/constructor/acc": {
      changefreq: "daily",
    },
    "/health": {
      changefreq: "daily",
    },
    "/health/bmi-calculator": {
      changefreq: "daily",
    },
    "/health/ideal-weight": {
      changefreq: "daily",
    },
    "/finance": {
      changefreq: "daily",
    },
    "/business": {
      changefreq: "daily",
    },
    "/business/margin-markup-calculator": {
      changefreq: "daily",
    }
  },
  extraPaths:[
    '/','/health','/finance','/business','/constructor',"/constructor/acc","/health/bmi-calculator","/health/ideal-weight",'/business/margin-markup-calculator',
  ]
});