const withBundleAnalyzer = require('@next/bundle-analyzer')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTranspileModules = require('next-transpile-modules')(['@wonderflow/react-components'])
const mdxSlug = require('remark-slug')
const mdxLink = require('remark-autolink-headings')
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [
      mdxSlug,
      [mdxLink, {
        behavior: 'append',
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['HeadingAnchor'] },
          children: [{ type: 'text', value: '' }]
        }
      }]
    ]
  }
})

module.exports = withPlugins([
  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true'
  }],
  [withImages],
  [
    withMDX,
    {
      extension: /\.mdx?$/
    }
  ],
  [withTranspileModules]
], {
  async redirects () {
    return [
      {
        source: '/develop/themes/',
        destination: '/develop/using-themes/',
        permanent: true
      },
      {
        source: '/develop/styles/',
        destination: '/develop/global-styles/',
        permanent: true
      },
      {
        source: '/design/foundations/iconography/',
        destination: '/design/iconography/',
        permanent: true
      },
      {
        source: '/develop/components/stack/',
        destination: '/components/layouts/stack/',
        permanent: true
      },
      {
        source: '/develop/components/:path*/',
        destination: '/components/widgets/:path*/',
        permanent: true
      }
    ]
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  experimental: {
    esmExternals: false
  }
})
