import React, { Fragment, useCallback, useRef } from 'react'
import { Tree } from '@/components/tree'
import { Pill } from '@/components/pill'
import { Separator, Stack, Text } from '@wonderflow/react-components'
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
                    open={link.items?.some(item => includesPath(item.path))}
                    expandable={!!link.items}
                    summary={!!link.items && link.label}
                  >
                    {link.items
                      ? link.items.map(subItem => (
                        <Tree.Li key={subItem.path}>
                          {subItem.wip
                            ? (
                              <Text as="a" dimmed={5}>
                                <Stack as="span" direction="row" columnGap={8} inline verticalAlign="center">
                                  {subItem.label}
                                  <Pill>soon</Pill>
                                </Stack>
                              </Text>
                              )
                            : (
                              <Link href={subItem.path}>
                                <a aria-current={includesPath(subItem.path) ? 'page' : undefined}>{subItem.label}</a>
                              </Link>
                              )}
                        </Tree.Li>
                      ))
                      : (
                        <Tree.Li>
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
