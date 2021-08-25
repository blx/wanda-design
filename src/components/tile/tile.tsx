import React, { forwardRef, ReactNode } from 'react'
import { Text, ClampText, Stack, Icon } from '@wonderflow/react-components'
import clsx from 'clsx'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Tile as TileClass, Content, IconBullet } from './tile.module.css'
import { IconNames } from '@wonderflow/react-components/icons/types'

type TileProps = {
  children: ReactNode;
  icon?: IconNames;
}

type PolymorphicTile = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Stack>,
  Polymorphic.OwnProps<typeof Stack> & TileProps
>;

// eslint-disable-next-line react/display-name
export const Tile = forwardRef(({
  children,
  className,
  icon,
  ...props
}, forwardedRef) => {
  return (
    <Stack ref={forwardedRef} className={clsx(TileClass, className)} {...props}>
      <Stack rowGap={32}>
        {children}
      </Stack>
      {icon && <Icon name={icon} dimension={24} className={IconBullet} />}
    </Stack>
  )
}) as PolymorphicTile

Tile.displayName = 'Tile'
