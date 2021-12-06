const routes = [
  {
    title: 'Get started',
    color: 'cyan',
    icon: 'compass',
    items: [
      {
        path: '/get-started/introduction',
        label: 'Introduction',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/get-started/accessibility',
        label: 'Accessibility',
        target: '',
        wip: false,
        deprecated: false
      },
      {
        path: '/learn',
        label: 'Learn',
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
        label: 'Server side rendering',
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
    icon: 'grid',
    color: 'purple',
    items: [
      {
        path: '/components/overview',
        label: 'Overview',
        target: '',
        wip: false
      },
      {
        label: 'Actions',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/actions/button',
            label: 'Button',
            target: '',
            wip: false
          },
          {
            path: '/components/actions/disclosure',
            label: 'Disclosure',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/actions/icon-button',
            label: 'Icon button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/actions/split-button',
            label: 'Split button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/actions/toggle-button',
            label: 'Toggle button',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Dialogs',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/dialogs/dropdown',
            label: 'Dropdown',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/dialogs/info-state',
            label: 'Info state',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/dialogs/modal',
            label: 'Modal',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/dialogs/snackbar',
            label: 'Snackbar',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/dialogs/tooltip',
            label: 'Tooltip',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Inputs',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/inputs/select',
            label: 'Select',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/inputs/selection-controls',
            label: 'Selection controls',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/inputs/slider',
            label: 'Slider',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/inputs/textfield',
            label: 'Textfield',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/inputs/input-group',
            label: 'Input group',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Layouts',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/layouts/card',
            label: 'Card',
            target: '',
            wip: false
          },
          {
            path: '/components/layouts/container',
            label: 'Container',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/layouts/grid',
            label: 'Grid',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/layouts/masonry',
            label: 'Masonry',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/layouts/separator',
            label: 'Separator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/layouts/stack',
            label: 'Stack',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/layouts/table',
            label: 'Table',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Loading',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/loading/circular-progress',
            label: 'Circular progress',
            target: '',
            wip: false
          },
          {
            path: '/components/loading/linear-progress',
            label: 'Linear progress',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/loading/skeleton-block',
            label: 'Skeleton block',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/loading/spinner',
            label: 'Spinner',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Navigation',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/navigation/tab',
            label: 'Tab',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/navigation/pagination',
            label: 'Pagination',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Typography',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/typography/clamp-text',
            label: 'Clamp text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/typography/list',
            label: 'List',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/typography/prose',
            label: 'Prose',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/typography/text',
            label: 'Text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/typography/title',
            label: 'Title',
            target: '',
            wip: false,
            deprecated: false
          }
        ]
      },
      {
        label: 'Other',
        expandable: true,
        target: '',
        items: [
          {
            path: '/components/other/avatar',
            label: 'Avatar',
            target: '',
            wip: false
          },
          {
            path: '/components/other/chip',
            label: 'Chip',
            target: '',
            wip: false
          },
          {
            path: '/components/other/elevator',
            label: 'Elevator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/other/icon',
            label: 'Icon',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/other/star-meter',
            label: 'Star meter',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/components/other/theme-switch',
            label: 'Theme switch',
            target: '',
            wip: false,
            deprecated: true
          }
        ]
      }
    ]
  }
]

export default routes
