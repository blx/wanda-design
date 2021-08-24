import React, { HTMLAttributes, ReactNode } from 'react'
import { Text, ClampText, Stack, Icon } from '@wonderflow/react-components'
import clsx from 'clsx'
import { DownloadTile as DownloadTileClass, Content, IconBullet } from './download-tile.module.css'

type DownloadTileProps = {
  children: ReactNode;
  download?: boolean;
  fileName?: string;
} & HTMLAttributes<HTMLAnchorElement>

export const DownloadTile = ({
  children,
  className,
  download,
  fileName,
  ...props
}: DownloadTileProps) => {
  return (
    <Stack as="a" className={clsx(DownloadTileClass, className)} download={fileName || download} {...props}>
      <Text as="span" weight="bold" className={Content}>
        <ClampText rows={1}>{children}</ClampText>
      </Text>
      <Icon name="arrow-down-to-bracket" dimension={24} className={IconBullet} />
    </Stack>
  )
}
