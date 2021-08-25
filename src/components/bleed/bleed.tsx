import clsx from 'clsx'
import React, { CSSProperties, HTMLAttributes } from 'react'
import { Bleed as BleedClass } from './bleed.module.css'

type BleedProps = {
  maxWidth?: string;
} & HTMLAttributes<HTMLOrSVGElement>

export const Bleed: React.FC<BleedProps> = ({
  children,
  maxWidth,
  style,
  className,
  ...props
}) => {
  const dynamicStyle: CSSProperties = {
    '--max-w': maxWidth
  }

  return (
    <div style={{ ...dynamicStyle, ...style }} className={clsx(BleedClass, className)} {...props}>
      {children}
    </div>
  )
}
