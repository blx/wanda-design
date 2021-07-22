import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

import styles from './blank-button.module.css'

type BlankButtonProps = {
  onClick?: () => void;
} & HTMLAttributes<HTMLButtonElement>

export const BlankButton = ({
  children,
  className,
  onClick,
  ...attributes
}: BlankButtonProps) => (
  <button onClick={onClick} type="button" className={clsx(styles.BlankButton, className)} {...attributes}>
    {children}
  </button>
)
