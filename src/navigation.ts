const routes = [
  {
    title: 'Get started',
    color: 'cyan',
    icon: 'compass',
    items: [
      {
        path: '/get-started/introduction',
        label: 'Introduction',
        target: ''
      },
      {
        path: '/get-started/accessibility',
        label: 'Accessibility',
        target: '',
        wip: false,
        deprecated: false
      }
    ]
  },
  {
    title: 'Design',
    icon: 'pc',
    color: 'green',
    items: [
      {
        path: '/design/brand',
        label: 'Brand',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        label: 'Foundations',
        expandable: true,
        items: [
          {
            path: '/design/foundations/colors',
            label: 'Colors',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/foundations/typography',
            label: 'Typography',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/foundations/elevations',
            label: 'Elevations',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/foundations/motion',
            label: 'Motion',
            target: '',
            wip: true,
            deprecated: false
          }
        ]
      },
      {
        path: '/design/iconography',
        label: 'Iconography',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/design/themes',
        label: 'Themes',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        label: 'Recipes',
        expandable: true,
        items: [
          {
            path: '/design/recipes/buttons',
            label: 'Buttons',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/dropdown',
            label: 'Dropdown',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/forms',
            label: 'Forms',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/info-states',
            label: 'Info states',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/loading',
            label: 'Loading',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/modals',
            label: 'Modals',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/design/recipes/notifications',
            label: 'Notifications',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      }
    ]
  },
  {
    title: 'Develop',
    icon: 'code',
    color: 'yellow',
    items: [
      {
        path: '/develop/installation',
        label: 'Installation',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/develop/design-tokens',
        label: 'Design tokens',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/develop/global-styles',
        label: 'Global styles',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/develop/ssr',
        label: 'Server sider rendering',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/develop/using-themes',
        label: 'Using themes',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        label: 'Utilities',
        expandable: true,
        items: [
          {
            path: '/develop/utilities/id-provider',
            label: 'Id Provider',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/utilities/presence',
            label: 'Presence',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/utilities/polymorphic',
            label: 'Polymorphic',
            target: '',
            wip: false
          }
        ]
      }
    ]
  },
  {
    title: 'Components',
    icon: 'grid-2',
    color: 'purple',
    items: [
      // {
      //   path: '/components/overview',
      //   label: 'Overview',
      //   target: '',
      //   wip: false
      // },
      {
        label: 'Layouts',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/layouts/stack',
            label: 'Stack',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Widgets',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/widgets/avatar',
            label: 'Avatar',
            target: '',
            wip: false
          },
          {
            path: '/components/widgets/button',
            label: 'Button',
            target: '',
            wip: false
          },
          {
            path: '/components/widgets/card',
            label: 'Card',
            target: '',
            wip: false
          },
          {
            path: '/components/widgets/chip',
            label: 'Chip',
            target: '',
            wip: false
          },
          {
            path: '/components/widgets/circular-progress',
            label: 'Circular progress',
            target: '',
            wip: false
          },
          {
            path: '/components/widgets/clamp-text',
            label: 'Clamp text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/container',
            label: 'Container',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/disclosure',
            label: 'Disclosure',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/dropdown',
            label: 'Dropdown',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/elevator',
            label: 'Elevator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/icon',
            label: 'Icon',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/icon-button',
            label: 'Icon button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/info-state',
            label: 'Info state',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/list',
            label: 'List',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/modal',
            label: 'Modal',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/linear-progress',
            label: 'Linear progress',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/prose',
            label: 'Prose',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/select',
            label: 'Select',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/selection-controls',
            label: 'Selection controls',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/separator',
            label: 'Separator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/slider',
            label: 'Slider',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/skeleton-block',
            label: 'Skeleton block',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/snackbar',
            label: 'Snackbar',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/spinner',
            label: 'Spinner',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/split-button',
            label: 'Split button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/star-meter',
            label: 'Star meter',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/tab',
            label: 'Tab',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/text',
            label: 'Text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/textfield',
            label: 'Textfield',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/theme-switch',
            label: 'Theme switch',
            target: '',
            wip: false,
            deprecated: true
          },
          {
            path: '/components/widgets/title',
            label: 'Title',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/toggle-button',
            label: 'Toggle button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/widgets/tooltip',
            label: 'Tooltip',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      }
    ]
  }
]

export default routes
