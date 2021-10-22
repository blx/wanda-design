import React, { ImgHTMLAttributes, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ThemedImg as ThemedImgClass } from './themed-img.module.css'
import Image from 'next/image'

export type ThemedImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export const ThemedImg = ({
  src,
  alt,
  width = '730',
  height = '314'
}: ThemedImgProps) => {
  const [mounted, setMounted] = useState(false)
  const [naturalHeight, setNaturalHeight] = useState(height)
  const { resolvedTheme } = useTheme()
  const srcParts = src.split('.')
  const lightSrc = `${srcParts[0]}-light.${srcParts[1]}`
  const darkSrc = `${srcParts[0]}-dark.${srcParts[1]}`

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
      {mounted && (
        <Image
          onLoadingComplete={({ naturalHeight }) => setNaturalHeight(naturalHeight)}
          width={width}
          quality={100}
          height={naturalHeight || height}
          src={(resolvedTheme === 'light') ? lightSrc : darkSrc}
          alt={alt || ''}
        />
      )}
    </picture>
  )
}
