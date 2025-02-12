import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import { Stack } from '@wonderflow/react-components'

import { LiveArea as LiveAreaClass } from './live-area.module.css'
import { StackProps } from '@wonderflow/react-components/stack'

export type LiveAreaProps = PropsWithClass & StackProps & {
  minHeight?: string;
  maxHeight?: string;
}

export const LiveArea: React.FC<LiveAreaProps> = ({
  children,
  className,
  minHeight = '200px',
  maxHeight,
  style,
  direction = 'row',
  ...props
}) => {
  const dynamicStyle: CSSProperties = {
    '--minHeight': minHeight,
    '--maxHeight': maxHeight
  }

  return (
    <Stack
      className={clsx(LiveAreaClass, className)}
      wrap
      fill={false}
      horizontalAlign="center"
      verticalAlign="center"
      direction={direction}
      columnGap={16}
      rowGap={16}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {children}
    </Stack>
  )
}
