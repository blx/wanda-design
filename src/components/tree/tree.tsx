import React, { ReactNode, Fragment } from 'react'
import { Stack, Text } from '@wonderflow/react-components'
import styles from './tree.module.css'
import { Disclosure } from '../disclosure'

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
    <Stack rowGap={16} verticalAlign="start" className={styles.Tree} {...props}>
      {title && <Text size={14} className={styles.Title}>{title}</Text>}
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
            summary={summary}
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

  Li: ({ children, ...props }) => <li className={styles.Li} {...props}>{children}</li>
}

Tree.Group.displayName = 'Tree.Group'
Tree.Menu.displayName = 'Tree.Menu'
Tree.Li.displayName = 'Tree.Li'
