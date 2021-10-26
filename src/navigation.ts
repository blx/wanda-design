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
            path: '/design/recipes/modals',
            label: 'Modals',
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
    title: '',
    items: [
      {
        label: 'Components',
        expandable: true,
        target: '',
        items: [
          {
            path: '/develop/components/avatar',
            label: 'Avatar',
            target: '',
            wip: false
          },
          {
            path: '/develop/components/button',
            label: 'Button',
            target: '',
            wip: false
          },
          {
            path: '/develop/components/card',
            label: 'Card',
            target: '',
            wip: false
          },
          {
            path: '/develop/components/chip',
            label: 'Chip',
            target: '',
            wip: false
          },
          {
            path: '/develop/components/clamp-text',
            label: 'Clamp text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/container',
            label: 'Container',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/disclosure',
            label: 'Disclosure',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/dropdown',
            label: 'Dropdown',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/elevator',
            label: 'Elevator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/icon',
            label: 'Icon',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/icon-button',
            label: 'Icon button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/info-state',
            label: 'Info state',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/list',
            label: 'List',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/modal',
            label: 'Modal',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/linear-progress',
            label: 'Linear progress',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/prose',
            label: 'Prose',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/select',
            label: 'Select',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/selection-controls',
            label: 'Selection controls',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/separator',
            label: 'Separator',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/snackbar',
            label: 'Snackbar',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/spinner',
            label: 'Spinner',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/stack',
            label: 'Stack',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/star-meter',
            label: 'Star meter',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/tab',
            label: 'Tab',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/text',
            label: 'Text',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/textfield',
            label: 'Textfield',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/theme-switch',
            label: 'Theme switch',
            target: '',
            wip: false,
            deprecated: true
          },
          {
            path: '/develop/components/title',
            label: 'Title',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/toggle-button',
            label: 'Toggle button',
            target: '',
            wip: false,
            deprecated: false
          },
          {
            path: '/develop/components/tooltip',
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
