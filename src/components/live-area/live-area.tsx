import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import { Stack } from '@wonderflow/react-components'

import { LiveArea as LiveAreaClass } from './live-area.module.css'
import { StackProps } from '@wonderflow/react-components/stack'

type LiveAreaProps = {
  maxHeight?: string;
} & StackProps

export const LiveArea: React.FC<LiveAreaProps> = ({
  children,
  maxHeight,
  style,
  ...props
}) => {
  const dynamicStyle: CSSProperties = {
    '--maxHeight': maxHeight
  }

  return (
    <Stack
      className={clsx(LiveAreaClass)}
      wrap
      horizontalAlign="center"
      direction="row"
      columnGap={16}
      rowGap={16}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {children}
    </Stack>
  )
}
