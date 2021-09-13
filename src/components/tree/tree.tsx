import React, { ReactNode, Fragment } from 'react'
import { Stack, Text, Disclosure } from '@wonderflow/react-components'
import { Tree as TreeClass, Title, Li } from './tree.module.css'

type TreeGroupProps = {
  title?: ReactNode;
}

type MenuProps = {
  expandable?: boolean;
  summary?: ReactNode;
  open?: boolean;
}

export const Tree: {
  Group: React.FC<TreeGroupProps>;
  Menu: React.FC<MenuProps>
  Li: React.FC;
} = {
  Group: ({ children, title, ...props }) => (
    <Stack rowGap={16} verticalAlign="start" className={TreeClass} {...props}>
      {title && <Text size={14} dimmed={5} className={Title}>{title}</Text>}
      <Stack as="ul" rowGap={4}>
        {children}
      </Stack>
    </Stack>
  ),

  Menu: ({ children, summary, open = false, expandable = false, ...props }) => {
    return expandable
      ? (
        <Tree.Li>
          <Disclosure
            padding={false}
            open={open}
            dimension="small"
            iconPosition="right"
            summary={<Text size={16}>{summary}</Text>}
            {...props}
          >
            <Stack as="ul" rowGap={4}>
              {children}
            </Stack>
          </Disclosure>
        </Tree.Li>
        )
      : <Fragment>{children}</Fragment>
  },

  Li: ({ children, ...props }) => <li className={Li} {...props}>{children}</li>
}

Tree.Group.displayName = 'Tree.Group'
Tree.Menu.displayName = 'Tree.Menu'
Tree.Li.displayName = 'Tree.Li'
