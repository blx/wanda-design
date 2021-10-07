import React from 'react'
import { useTheme } from 'next-themes'
import { IconNames } from '@wonderflow/react-components/icons/types'
import { Select } from '@wonderflow/react-components'

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const icon = {
    light: 'sun-bright' as IconNames,
    system: 'pc' as IconNames,
    dark: 'moon' as IconNames
  }

  return (
    <Select
      dimension="small"
      onChange={({ currentTarget }) => setTheme(currentTarget.value)}
      value={resolvedTheme}
      icon={resolvedTheme === 'system' ? icon.system : icon[resolvedTheme || 'system']}
      defaultValue={resolvedTheme}
      aria-label="Change color scheme"
    >
      <option value="light">Light</option>
      <option value="system">System</option>
      <option value="dark">Dark</option>
    </Select>
  )
}
