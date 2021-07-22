import React from 'react'
import { Tree } from '@/components/tree'
import { Separator, Stack } from '@wonderflow/react-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Navigation = () => {
  const router = useRouter()

  return (
    <Stack fill={false} horizontalAlign="stretch" rowGap={24}>
      <Tree.Group title="Get started">
        <Tree.Menu>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/introduction/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/asd/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/asd/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
        </Tree.Menu>
      </Tree.Group>

      <Separator aria-hidden="true" />

      <Tree.Group title="Get started">
        <Tree.Menu>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/introduction/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/asd/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
          <Tree.Li>
            <Link href="/introduction">
              <a aria-current={router.asPath.includes('/asd/') ? 'page' : undefined} href="/">Introduction</a>
            </Link>
          </Tree.Li>
        </Tree.Menu>
      </Tree.Group>
    </Stack>
  )
}
