import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './text.module.css'

export const Text = ({
  as = 'p',
  size,
  color,
  weight,
  children,
  className,
  style,
  ...props
}) => {
  const As = as

  const dynamicStyle = {
    '--color': color
  }

  return (
    <As
      style={{ ...style, ...dynamicStyle }}
      data-text-size={size}
      data-text-weight={weight}
      className={clsx(styles.Text, className)}
      {...props}
    >
      {children}
    </As>
  )
}

Text.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(['dispaly', 'big', 'regular', 'small', 'smaller']),
  weight: PropTypes.oneOf(['thin', 'medium', 'bold']),
  color: PropTypes.string
}
