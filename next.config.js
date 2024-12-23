/** @type {import('next').NextConfig} */

const { i18nConfig } = require('./i18nConfig')
const nextConfig = {
  i18n: i18nConfig,
  reactStrictMode: true
}

module.exports = nextConfig
