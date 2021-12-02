import { Bleed } from '@/components/bleed'
import { Meta } from '@/components/meta'
import { Toolbar } from '@/components/toolbar'
import { Chip, ChipProps, Container, SkeletonBlock, Stack, Text, Title } from '@wonderflow/react-components'
import { useMedia } from 'react-use'
import { ShellLayout } from '@/components/layouts/shell'
import Link from 'next/link'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'

import { PostHead, TopicsContainer } from './post.module.css'
import { AuthorCard } from '@/components/author-card'

export type PostLayoutProps = Partial<PostType>

export const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  excerpt,
  authors,
  topics,
  children
}) => {
  const isWide = useMedia(`(min-width: ${tkns.breakpoint['extra-large']})`, true)

  const colors = [
    'cyan',
    'purple',
    'yellow',
    'green',
    'blue',
    'gray',
    'red'
  ]

  return (
    <ShellLayout
      stickyHeader
      header={(
        <Toolbar />
      )}
    >
      <Meta title={`${title} - Wanda Design System`} description={excerpt} />

      <Stack rowGap={88}>
        <Bleed maxWidth="100vw" className={PostHead}>
          <Stack horizontalAlign="center">
            {title
              ? <Title maxWidth="15ch" as="h1" level={isWide ? 'display' : '1'}>{title}</Title>
              : <SkeletonBlock width="40vw" height={90} />
          }
          </Stack>
        </Bleed>

        {topics && (
        <Container dimension="large" className={TopicsContainer}>
          <Stack direction="row" horizontalAlign="end" columnGap={8}>
            {topics.map((topic, i) => (
              <Link href={`/posts/topic/${topic}`} key={topic}>
                <a style={{ background: 'none' }}><Chip dimension="big" color={colors[i] as ChipProps['color']}>{topic}</Chip></a>
              </Link>
            ))}
          </Stack>
        </Container>
        )}

        {authors && (
          <Stack
            rowGap={16}
            horizontalAlign="start"
          >
            <Text weight="bold">Written by:</Text>
            <Stack
              direction="row"
              wrap
              fill={false}
              columnGap={40}
            >
              {authors.map(author => (
                <AuthorCard
                  key={author.id}
                  name={author.fullName}
                  role={author.role}
                  avatar={author.avatar.url}
                />
              ))}
            </Stack>
          </Stack>
        )}

        <Stack verticalPadding={56}>
          {children}
        </Stack>
      </Stack>
    </ShellLayout>
  )
}
