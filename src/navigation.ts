export default [
  {
    title: 'Get started',
    items: [
      {
        path: '/get-started/introduction',
        label: 'Introduction',
        target: ''
      },
      {
        path: '/get-started/topics',
        label: 'Topics',
        target: ''
      },
      {
        path: '/get-started/accessibility',
        label: 'Accessibility',
        target: ''
      }
    ]
  },
  {
    title: 'Design',
    items: [
      {
        path: '/design/brand',
        label: 'Brand',
        target: ''
      },
      {
        label: 'Foundation',
        expandable: true,
        items: [
          {
            path: '/design/foundation/colors',
            label: 'Colors',
            target: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Develop',
    items: [
      {
        path: '/develop/design-tokens',
        label: 'Design tokens',
        target: ''
      },
      {
        path: '/develop/styles',
        label: 'Styles',
        target: ''
      },
      {
        path: '/develop/themes',
        label: 'Themes',
        target: ''
      },
      {
        path: '/develop/configurations',
        label: 'Configurations',
        target: ''
      }
    ]
  },
  {
    title: '',
    items: [
      {
        label: 'Components',
        expandable: true,
        target: '',
        items: [
          {
            path: '/develop/components/button',
            label: 'Button',
            target: ''
          },
          {
            path: '/develop/components/icon-button',
            label: 'Icon button',
            target: ''
          }
        ]
      }
    ]
  }
]
