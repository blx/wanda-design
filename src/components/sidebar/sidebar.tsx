import React from 'react'
import { Stack } from '@wonderflow/react-components'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import styles from './sidebar.module.css'
import { Navigation } from '../navigation'
import navigation from 'src/navigation'

export const Sidebar = () => {
  return (
    <Stack fill={false} horizontalAlign="stretch" className={styles.Sidebar} rowGap={16}>
      <header className={styles.Header}>
        <Link href="/">
          <a>
            <Logo className={styles.Logo} />
          </a>
        </Link>
      </header>
      <Navigation data={navigation} />
    </Stack>
  )
}
