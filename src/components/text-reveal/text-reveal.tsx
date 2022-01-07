import { CSSProperties, FC, useEffect, useRef, useState } from 'react'
import { useInViewport } from 'ahooks'
import styles from './text-reveal.module.css'

export type TextRevealProps = PropsWithClass & {
  xOffset?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  xOffset = '-10%',
  style,
  ...otherProps
}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const ref = useRef<HTMLSpanElement>(null)
  const [inViewport] = useInViewport(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  })

  const dynamicStyle: CSSProperties = {
    '--x': xOffset
  }

  useEffect(() => {
    inViewport && setVisible(true)
  }, [inViewport])

  return (
    <span
      ref={ref}
      className={styles.TextReveal}
      data-text-reveal-is-running={visible}
      style={{ ...dynamicStyle, ...style }}
      {...otherProps}
    >
      {children}
    </span>
  )
}
