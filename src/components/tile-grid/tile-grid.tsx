import { Stack } from '@wonderflow/react-components'
import React from 'react'

export const TileGrid: React.FC = ({
  children,
  ...props
}) => {
  return (
    <Stack direction="row" columnGap={2} rowGap={2} wrap fill={false} {...props}>
      {children}
    </Stack>
  )
}
