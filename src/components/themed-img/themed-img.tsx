import React, { ImgHTMLAttributes } from 'react'
import { useThemeContext } from '@wonderflow/react-components'
import { ThemedImg as ThemedImgClass } from './themed-img.module.css'

export type ThemedImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
}

export const ThemedImg = ({
  src,
  alt,
  ...props
}: ThemedImgProps) => {
  const { theme } = useThemeContext()
  const isThemeAutoOrLight = theme === 'auto' || theme === 'light'
  const srcParts = src.split('.')
  const lightSrc = `${srcParts[0]}-light.${srcParts[1]}`
  const darkSrc = `${srcParts[0]}-dark.${srcParts[1]}`

  return (
    <picture className={ThemedImgClass}>
      {theme === 'auto' && (
        <source
          srcSet={darkSrc}
          media="(prefers-color-scheme: dark)"
        />
      )}
      <img
        loading="lazy"
        decoding="async"
        src={(theme && isThemeAutoOrLight) ? lightSrc : darkSrc}
        alt={alt || ''}
        {...props}
      />
    </picture>
  )
}
