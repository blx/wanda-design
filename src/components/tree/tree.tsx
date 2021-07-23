import React, { ReactNode, Fragment, useState, useCallback } from 'react'
import { Icon, Stack, Text } from '@wonderflow/react-components'
import styles from './tree.module.css'

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
    const [isOpen, setIsOpen] = useState(open)
    const handleOpen = useCallback(
      () => (event: any) => {
        event.preventDefault()
        setIsOpen(!isOpen)
      },
      [isOpen]
    )

    return expandable
      ? (
        <Tree.Li>
          <details open={isOpen} className={styles.Expander} {...props}>
            <Text as="summary" onClick={handleOpen()} fluid={false} size={16} weight="bold">
              {summary}
              <Icon className={styles.ExpandIcon} name="chevron-up" size={16} />
            </Text>
            <Stack as="ul" rowGap={4}>
              {children}
            </Stack>
          </details>
        </Tree.Li>
        )
      : <Fragment>{children}</Fragment>
  },

  Li: ({ children, ...props }) => <li className={styles.Li} {...props}>{children}</li>
}

Tree.Group.displayName = 'Tree.Group'
Tree.Menu.displayName = 'Tree.Menu'
Tree.Li.displayName = 'Tree.Li'
