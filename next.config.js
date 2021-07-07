const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')(['@wonderflow/react-components'])

module.exports = withPlugins([
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true'
    }),
    withTranspileModules()
  ]
], {
  reactStrictMode: true,
  distDir: 'build',
  trailingSlash: true
})
