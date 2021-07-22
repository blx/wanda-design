import { Meta } from '@/components/meta'
import { Sidebar } from '@/components/sidebar'
import { Stack } from '@wonderflow/react-components'
import React, { HTMLAttributes } from 'react'
import styles from './shell.module.css'

type ShellProps = {

} & HTMLAttributes<HTMLElement>

export const Shell = ({
  children,
  ...props
}: ShellProps) => {
  return (
    <Stack fill={false} direction="row" className={styles.Shell} {...props}>
      <Meta />
      <aside className={styles.Aside}>
        <Sidebar />
      </aside>
      <Stack as="main" className={styles.Content}>
        {children}
      </Stack>
    </Stack>
  )
}
