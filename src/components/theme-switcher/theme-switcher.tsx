import React from 'react'
import { useTheme } from 'next-themes'
import { ThemeSwitch } from '@wonderflow/react-components'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <ThemeSwitch onChange={({ currentTarget }) => setTheme(currentTarget.value)} value={theme} currentTheme={theme} />
  )
}
