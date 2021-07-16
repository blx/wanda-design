const withBundleAnalyzer = require('@next/bundle-analyzer')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')(['@wonderflow/react-components'])

module.exports = withPlugins([
  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true'
  }],
  [withImages],
  [withTranspileModules]
], {
  webpack5: false,
  reactStrictMode: true,
  distDir: 'build',
  trailingSlash: true
})
