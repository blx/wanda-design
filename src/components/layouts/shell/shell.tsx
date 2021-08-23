import React, { ReactNode, useState, useEffect, useRef, useCallback } from 'react'
import { Meta } from '@/components/meta'
import { Sidebar } from '@/components/sidebar'
import clsx from 'clsx'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Stack, IconButton, Container } from '@wonderflow/react-components'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import { Shell, MenuTrigger, Aside, Content, Header, ContentArea } from './shell.module.css'

type ShellLayoutProps = {
  header?: ReactNode;
  stickyHeader?: boolean;
} & PropsWithClass

export const ShellLayout: React.FC<ShellLayoutProps> = ({
  children,
  header,
  stickyHeader = false,
  className,
  ...props
}) => {
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
    if (isWide) enableBodyScroll(currentRef)
    router.events.on('routeChangeStart', () => enableBodyScroll(currentRef))

    return () => {
      router.events.off('routeChangeStart', () => enableBodyScroll(currentRef))
    }
  }, [isWide, router.events])

  return (
    <Stack
      fill={false}
      data-shell-collapsed={collapsed}
      data-shell-sticky-header={stickyHeader}
      direction="row"
      className={clsx(Shell, className)}
      {...props}
    >
      <Meta />
      <IconButton onClick={() => handleSidebar()} icon={collapsed ? 'bars' : 'xmark'} size="big" className={MenuTrigger} />
      <aside className={Aside} ref={scrollerRef}>
        <Sidebar />
      </aside>
      <Stack as="main" verticalAlign="start" fill={false} className={Content}>
        {header && <header className={Header}>{header}</header>}
        <Container className={ContentArea}>
          {children}
        </Container>
      </Stack>
    </Stack>
  )
}
