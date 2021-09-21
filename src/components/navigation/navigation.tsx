import React, { Fragment, useCallback, useMemo } from 'react'
import { Tree } from '@/components/tree'
import { Pill } from '@/components/pill'
import { Separator, Stack, Text } from '@wonderflow/react-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

type NavigationProps = {
  data: Navigation
};

export const Navigation = ({ data }: NavigationProps) => {
  const router = useRouter()

  const includesPath = useCallback(
    (path) => router.asPath.includes(`${path}/`),
    [router.asPath]
  )

  const navigationLink = useCallback(
    (url: string, label: string) => <a aria-current={includesPath(url) ? 'page' : undefined}>{label}</a>,
    [includesPath]
  )

  const renderSubMenu = useCallback(
    (menu: NavigationItem) => menu.items?.map(subItem => (
      <Tree.Li key={subItem.path}>
        {subItem.wip
          ? (
            <Text as="span" size={16} dimmed={5}>
              <Stack as="span" direction="row" columnGap={8} inline verticalAlign="center">
                {subItem.label}
                <Pill>soon</Pill>
              </Stack>
            </Text>
            )
          : (
            <Link href={subItem.path}>
              {navigationLink(subItem.path, subItem.label)}
            </Link>
            )}
      </Tree.Li>
    )),
    [navigationLink]
  )

  const renderGroup = useCallback(
    (group: NavigationItem | NavigationGroup) => group.items?.map(link => (
      <Tree.Menu
        key={link.label}
        open={link.items?.some(item => includesPath(item.path))}
        expandable={!!link.items}
        summary={!!link.items && link.label}
      >
        {link.items
          ? renderSubMenu(link)
          : (
            <Tree.Li>
              <Link href={link.path}>
                {navigationLink(link.path, link.label)}
              </Link>
            </Tree.Li>
            )
        }
      </Tree.Menu>
    )),
    [navigationLink, includesPath, renderSubMenu]
  )

  const renderNavigation = useMemo(() => data.map((group, index) => {
    return (
      <Fragment key={group.title}>

        {index !== 0 && <Separator />}

        <Tree.Group title={group.title}>
          {renderGroup(group)}
        </Tree.Group>
      </Fragment>
    )
  }), [data, renderGroup])

  return (
    <nav>
      <Stack fill={false} horizontalAlign="stretch" rowGap={24}>
        {renderNavigation}
      </Stack>
    </nav>
  )
}
