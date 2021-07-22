import React, { HTMLAttributes, ReactNode } from 'react'
import { Icon, Stack, Text } from '@wonderflow/react-components'
import styles from './tree.module.css'

type TreeGroupProps = {
  title?: ReactNode;
}

type MenuCommonProps = {
  expandable?: boolean;
}

type ConditionalProps =
  | { expandable?: true; summary: ReactNode;}
  | { expandable?: false; summary?: never }

type MenuProps = MenuCommonProps & ConditionalProps & HTMLAttributes<HTMLUListElement>

export const Tree: {
  Group: React.FC<TreeGroupProps>;
  Menu: React.FC<MenuProps>
  Li: React.FC;
} = {
  Group: ({ children, title, ...props }) => (
    <Stack rowGap={16} verticalAlign="start" className={styles.Tree} {...props}>
      {title && <Text size={14} className={styles.Title}>{title}</Text>}
      <Stack rowGap={4}>
        {children}
      </Stack>
    </Stack>
  ),

  Menu: ({ children, summary, expandable = false, ...props }) => {
    return expandable
      ? (
        <details className={styles.Expander} {...props}>
          <summary>
            <Text as="span" fluid={false} size={16} weight="bold">{summary}</Text>
            <Icon className={styles.ExpandIcon} name="chevron-up" size={16} />
          </summary>
          <Stack as="ul" rowGap={4}>
            {children}
          </Stack>
        </details>
        )
      : <Stack as="ul" rowGap={4} {...props}>{children}</Stack>
  },

  Li: ({ children, ...props }) => <li className={styles.Li} {...props}>{children}</li>
}

Tree.Group.displayName = 'Tree.Group'
Tree.Menu.displayName = 'Tree.Menu'
Tree.Li.displayName = 'Tree.Li'
