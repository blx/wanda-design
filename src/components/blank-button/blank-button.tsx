import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

import { BlankButton as BlankButtonClass } from './blank-button.module.css'

type BlankButtonProps = {
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>

export const BlankButton = ({
  children,
  className,
  onClick,
  ...attributes
}: BlankButtonProps) => (
  <button onClick={onClick} type="button" className={clsx(BlankButtonClass, className)} {...attributes}>
    {children}
  </button>
)
