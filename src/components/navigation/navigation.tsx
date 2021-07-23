import React, { Fragment, useCallback, useRef, useEffect } from 'react'
import { Tree } from '@/components/tree'
import { Separator, Stack } from '@wonderflow/react-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

type NavigationProps = {
  data: Navigation
};

export const Navigation = ({ data }: NavigationProps) => {
  const menuRef = useRef<any>(null)
  const router = useRouter()

  const includesPath = useCallback(
    (path) => router.asPath.includes(`${path}/`),
    [router.asPath]
  )

  useEffect(() => {
    const routeChangeStart = () => {
      const currentElements = menuRef?.current?.querySelectorAll('[aria-current="page"')
      if (currentElements) console.log('start', currentElements)
    }

    const routeChangeEnd = () => {
      const currentElements = menuRef?.current?.querySelectorAll('[aria-current="page"')
      if (currentElements) console.log('end', currentElements)
    }

    router.events.on('routeChangeStart', routeChangeStart)
    router.events.on('routeChangeComplete', routeChangeEnd)

    return () => {
      router.events.off('routeChangeStart', routeChangeStart)
      router.events.off('routeChangeComplete', routeChangeEnd)
    }
  }, [router])

  return (
    <nav ref={menuRef}>
      <Stack fill={false} horizontalAlign="stretch" rowGap={24}>
        {
        data.map((group, index) => {
          return (
            <Fragment key={group.title}>

              {index !== 0 && <Separator />}

              <Tree.Group title={group.title}>
                {
                group.items.map(link => (
                  <Tree.Menu
                    key={link.label}
                    open={link.items?.some(includesPath)}
                    expandable={!!link.items}
                    summary={!!link.items && link.label}
                  >
                    {link.items
                      ? link.items.map(subItem => (
                        <Tree.Li key={subItem.path}>
                          <Link href={subItem.path}>
                            <a aria-current={includesPath(subItem.path) ? 'page' : undefined}>{subItem.label}</a>
                          </Link>
                        </Tree.Li>
                      ))
                      : (
                        <Tree.Li key={link.path}>
                          <Link href={link.path}>
                            <a aria-current={includesPath(link.path) ? 'page' : undefined}>{link.label}</a>
                          </Link>
                        </Tree.Li>
                        )
                    }
                  </Tree.Menu>
                ))
              }
              </Tree.Group>
            </Fragment>
          )
        })
      }
      </Stack>
    </nav>
  )
}
