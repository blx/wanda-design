import React, { CSSProperties, useRef } from 'react'
import clsx from 'clsx'
import { Stack } from '@wonderflow/react-components'
import { useMouse } from 'react-use'

import { LiveArea as LiveAreaClass } from './live-area.module.css'
import { StackProps } from '@wonderflow/react-components/stack'

export type LiveAreaProps = PropsWithClass & StackProps & {
  minHeight?: string;
  maxHeight?: string;
  live?: boolean;
}

export const LiveArea: React.FC<LiveAreaProps> = ({
  children,
  minHeight = '200px',
  maxHeight,
  style,
  live = true,
  ...props
}) => {
  const ref = useRef(null)
  const { docX, docY, posX, posY } = useMouse(ref)

  const hoverCoordinates = (docValue: number = 0, elValue: number = 0) => ((docValue - elValue) - 300).toFixed(2)

  const dynamicStyle: CSSProperties = {
    '--minHeight': minHeight,
    '--maxHeight': maxHeight,
    '--hoverX': `${hoverCoordinates(docX, posX)}px`,
    '--hoverY': `${hoverCoordinates(docY, posY)}px`
  }

  return (
    <Stack
      ref={ref}
      className={clsx(LiveAreaClass)}
      wrap
      fill={false}
      horizontalAlign="center"
      verticalAlign="center"
      direction="row"
      columnGap={16}
      rowGap={16}
      style={{ ...dynamicStyle, ...style }}
      data-live-area-live={live}
      {...props}
    >
      {children}
    </Stack>
  )
}
