import React from 'react'
import clsx from 'clsx'
import { Stack } from '@wonderflow/react-components'

import styles from './live-area.module.css'
import { StackProps } from '@wonderflow/react-components/stack'

export const LiveArea: React.FC<StackProps> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      className={clsx(styles.LiveArea)}
      fill={false}
      wrap
      horizontalAlign="center"
      direction="row"
      verticalAlign="center"
      columnGap={16}
      {...props}
    >
      {children}
    </Stack>
  )
}
