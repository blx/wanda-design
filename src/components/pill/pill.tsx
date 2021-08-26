import React from 'react'
import clsx from 'clsx'

import { Pill as PillClass } from './pill.module.css'
import { Text } from '@wonderflow/react-components'

export const Pill: React.FC<PropsWithClass> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Text
      className={clsx(PillClass, className)}
      as="span"
      size={14}
      {...props}
    >
      {children}
    </Text>
  )
}
