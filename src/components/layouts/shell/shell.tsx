import React, { HTMLAttributes, useState, useEffect, useRef, useCallback } from 'react'
import { Meta } from '@/components/meta'
import { Sidebar } from '@/components/sidebar'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Stack, IconButton } from '@wonderflow/react-components'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import styles from './shell.module.css'

type ShellProps = {

} & HTMLAttributes<HTMLElement>

export const Shell = ({
  children,
  ...props
}: ShellProps) => {
  const scrollerRef = useRef<any>(null)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const isWide = useMedia(`(min-width: ${tkns.breakpoint.small})`)
  const router = useRouter()

  const handleSidebar = useCallback(
    () => {
      if (collapsed) {
        disableBodyScroll(scrollerRef.current)
        setCollapsed(false)
      } else {
        enableBodyScroll(scrollerRef.current)
        setCollapsed(true)
      }
    },
    [collapsed]
  )

  useEffect(() => {
    const currentRef = scrollerRef.current
    if (isWide) enableBodyScroll(scrollerRef.current)
    router.events.on('routeChangeStart', () => enableBodyScroll(currentRef))

    return () => {
      router.events.off('routeChangeStart', () => enableBodyScroll(currentRef))
    }
  }, [isWide, router.events])

  return (
    <Stack fill={false} data-shell-collapsed={collapsed} direction="row" className={styles.Shell} {...props}>
      <Meta />
      <IconButton onClick={() => handleSidebar()} icon={collapsed ? 'bars' : 'xmark'} size="big" className={styles.MenuTrigger} />
      <aside className={styles.Aside} ref={scrollerRef}>
        <Sidebar />
      </aside>
      <Stack as="main" className={styles.Content}>
        {children}
      </Stack>
    </Stack>
  )
}
