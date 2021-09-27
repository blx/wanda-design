import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ThemeSwitch } from '@wonderflow/react-components'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <ThemeSwitch onChange={({ currentTarget }) => setTheme(currentTarget.value)} currentTheme={theme} />
  )
}
