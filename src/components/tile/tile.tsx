import React, { forwardRef, ReactNode } from 'react'
import { Text, ClampText, Stack, Icon } from '@wonderflow/react-components'
import clsx from 'clsx'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Tile as TileClass, Content, IconBullet } from './tile.module.css'

type TileProps = {
  children: ReactNode;
}

type PolymorphicTile = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Stack>,
  Polymorphic.OwnProps<typeof Stack> & TileProps
>;

// eslint-disable-next-line react/display-name
export const Tile = forwardRef(({
  children,
  className,
  ...props
}, forwardedRef) => {
  return (
    <Stack ref={forwardedRef} className={clsx(TileClass, className)} {...props}>
      <Text as="span" weight="bold" className={Content}>
        <ClampText rows={1}>{children}</ClampText>
      </Text>
      <Icon name="arrow-down-to-bracket" dimension={24} className={IconBullet} />
    </Stack>
  )
}) as PolymorphicTile

Tile.displayName = 'Tile'
