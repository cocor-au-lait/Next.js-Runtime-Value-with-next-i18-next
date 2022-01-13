/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    HOGE: process.env.HOGE,
  },
  publicRuntimeConfig: {
    HOGE: process.env.HOGE
  },
}

module.exports = nextConfig
