import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { PostCard as PostCardClass, Authors } from './post-card.module.css'
import { Chip, ClampText, Elevator, Stack, Text, Title } from '@wonderflow/react-components'
import { Datetime } from '@/components/datetime'
import { AuthorCard } from '@/components/author-card'

type PostCardProps = PropsWithClass & Pick<
  PostType,
  'slug' | 'title' | 'updatedAt' | 'createdAt' | 'externalUrl' | 'excerpt' | 'authors'
>

export const PostCard = ({
  className,
  updatedAt,
  createdAt,
  title,
  slug,
  externalUrl,
  excerpt,
  authors,
  ...props
}: PostCardProps) => {
  const [color, setColor] = useState<string>('var(--highlight-gray-foreground)')

  useEffect(() => {
    const colors = [
      'var(--highlight-cyan-foreground)',
      'var(--highlight-purple-foreground)',
      'var(--highlight-yellow-foreground)',
      'var(--highlight-green-foreground)',
      'var(--highlight-blue-foreground)',
      'var(--highlight-gray-foreground)',
      'var(--highlight-red-foreground)'
    ]

    setColor(colors[colors.length * Math.random() | 0])
  }, [])

  const isNew = createdAt && new Date(createdAt).getTime() > new Date().getTime() - 1000 * 60 * 60 * 24 * 7

  return (
    <article style={{ '--c': color }} className={clsx(PostCardClass, className)} {...props}>
      <Link href={externalUrl || `/posts/${encodeURIComponent(slug)}`} passHref>
        <Stack
          as="a"
          target={externalUrl && '_blank'}
          rowGap={32}
          verticalAlign="start"
          horizontalAlign="start"
          horizontalPadding={56}
          verticalPadding={40}
        >
          <Stack rowGap={8}>
            <Stack direction="row" verticalAlign="center" columnGap={8} wrap fill={false}>
              <Text as="span" dimmed={5} size={16}>
                <Datetime date={updatedAt} />
              </Text>
              {isNew && <Chip dimension="small" color="green">new</Chip>}
            </Stack>
            <Title as="h2" level="2">
              <ClampText rows={3}>{ title }</ClampText>
            </Title>
          </Stack>
          <Text maxWidth="50ch" dimmed={6}>
            <ClampText rows={3}>{excerpt}</ClampText>
          </Text>
          <Stack direction="row">
            {authors && (
              <Elevator resting={1}>
                <Stack
                  fill={false}
                  direction="row"
                  verticalAlign="center"
                  horizontalAlign="start"
                  verticalPadding={8}
                  horizontalPadding={8}
                  columnGap={8}
                  className={Authors}
                >
                  {authors.map(person => (
                    <AuthorCard
                      key={person.id}
                      avatar={person.avatar.url}
                      name={person.fullName}
                      role={person.role}
                      collapsed={authors.length > 1}
                    />
                  ))}
                </Stack>
              </Elevator>
            )}
          </Stack>
        </Stack>
      </Link>
    </article>
  )
}
