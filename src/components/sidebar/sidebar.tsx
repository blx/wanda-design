import { Stack } from '@wonderflow/react-components'
import React from 'react'
import { Logo } from '@/components/logo'
import styles from './sidebar.module.css'
import { Navigation } from '../navigation'

export const Sidebar = () => {
  return (
    <Stack fill={false} horizontalAlign="stretch" className={styles.Sidebar} rowGap={16}>
      <header className={styles.Header}>
        <a href="/">
          <Logo className={styles.Logo} />
        </a>
      </header>
      <Navigation />
    </Stack>
  )
}
