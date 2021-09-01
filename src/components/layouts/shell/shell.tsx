import React, { ReactNode, useState, useEffect, useRef, useCallback } from 'react'
import { Meta } from '@/components/meta'
import { Sidebar } from '@/components/sidebar'
import clsx from 'clsx'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Stack, IconButton, Container, Separator } from '@wonderflow/react-components'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { useMedia } from 'react-use'
import { useRouter } from 'next/router'
import { Shell, MenuTrigger, Aside, Content, Header, ContentArea, SkipToContent } from './shell.module.css'
import { Footer } from '@/components/footer'

type ShellLayoutProps = {
  header?: ReactNode;
  stickyHeader?: boolean;
  showFooter?: boolean;
} & PropsWithClass

export const ShellLayout: React.FC<ShellLayoutProps> = ({
  children,
  header,
  stickyHeader = false,
  showFooter = true,
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
      <a href="#content-quicklink" className={SkipToContent}>Skip to main content</a>
      <Meta />
      <IconButton onClick={() => handleSidebar()} icon={collapsed ? 'bars' : 'xmark'} dimension="big" className={MenuTrigger} />

      <Stack
        rowGap={88}
        as="aside"
        verticalAlign="space-between"
        fill={false}
        className={Aside}
        ref={scrollerRef}
      >
        <Sidebar />
      </Stack>

      <Stack as="main" verticalAlign="start" fill={false} className={Content}>
        {header && <header className={Header}>{header}</header>}
        <Stack id="content-quicklink" rowGap={80} verticalAlign="start" fill={false}>
          <Container className={ContentArea}>
            {children}
          </Container>
          {showFooter && (
            <>
              <Separator />
              <Container className={ContentArea}>
                <Footer />
              </Container>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
