import React, { ImgHTMLAttributes, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
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
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const srcParts = src.split('.')
  const lightSrc = `${srcParts[0]}-light.${srcParts[1]}`
  const darkSrc = `${srcParts[0]}-dark.${srcParts[1]}`
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <picture className={ThemedImgClass}>
      {resolvedTheme === 'dark' && (
        <source
          srcSet={darkSrc}
          media="(prefers-color-scheme: dark)"
        />
      )}
      <img
        loading="lazy"
        decoding="async"
        width="770"
        height="370"
        src={(resolvedTheme === 'light') ? lightSrc : darkSrc}
        alt={alt || ''}
        {...props}
      />
    </picture>
  )
}
