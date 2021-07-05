module.exports = {
  plugins: {
    'postcss-easy-import': {
      extensions: '.css',
    },
    'postcss-preset-env': {
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
      }
    },
    'postcss-inset': {},
    'cssnano': {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }
  }
}
