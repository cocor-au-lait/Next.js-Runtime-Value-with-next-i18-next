const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  serverRuntimeConfig: {
    HOGE: process.env.HOGE,
  },
  publicRuntimeConfig: {
    HOGE: process.env.HOGE,
  },
  i18n,
};

module.exports = nextConfig;
