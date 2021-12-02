import { Bleed } from '@/components/bleed'
import { Meta } from '@/components/meta'
import { Toolbar } from '@/components/toolbar'
import { Separator, Stack, Title } from '@wonderflow/react-components'
import { useMedia } from 'react-use'
import { ShellLayout } from '../shell'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'

import { PostHead } from './post.module.css'

export type PostLayoutProps = Partial<PostType>

export const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  excerpt,
  children
}) => {
  const isWide = useMedia(`(min-width: ${tkns.breakpoint['extra-large']})`, true)

  return (
    <ShellLayout
      stickyHeader
      header={(
        <Toolbar />
      )}
    >
      <Meta title={`${title} - Wanda Design System`} description={excerpt} />
      <Bleed maxWidth="100vw" className={PostHead}>
        <Stack horizontalAlign="center">
          <Title maxWidth="15ch" as="h1" level={isWide ? 'display' : '1'}>{title}</Title>
        </Stack>
      </Bleed>
      <Bleed maxWidth="100vw">
        <Separator />
      </Bleed>
      <Stack verticalPadding={56}>
        {children}
      </Stack>
    </ShellLayout>
  )
}
