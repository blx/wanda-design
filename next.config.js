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
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['HeadingAnchor'] },
          children: [{ type: 'text', value: '#' }]
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
  distDir: 'build',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx']
})
