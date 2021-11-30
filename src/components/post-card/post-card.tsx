import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { PostCard as PostCardClass } from './post-card.module.css'
import { ClampText, Stack, Text, Title } from '@wonderflow/react-components'
import { Datetime } from '@/components/datetime'

type PostCardProps = PropsWithClass & Pick<PostType, 'slug' | 'title' | 'updatedAt' | 'externalUrl' | 'excerpt'>

export const PostCard = ({
  className,
  updatedAt,
  title,
  slug,
  externalUrl,
  excerpt,
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

  // const renderExcerpt: React.FC = ({ children }) => <ClampText rows={3}>{children}</ClampText>

  return (
    <article style={{ '--c': color }} className={clsx(PostCardClass, className)} {...props}>
      <Link href={externalUrl || `/posts/${encodeURIComponent(slug)}`} passHref>
        <Stack
          as="a"
          target={externalUrl && '_blank'}
          rowGap={32}
          verticalAlign="start"
          horizontalAlign="start"
          horizontalPadding={24}
          verticalPadding={32}
        >
          <Stack rowGap={8}>
            <Text as="span" dimmed={6} size={16}>
              <Datetime date={updatedAt} />
            </Text>
            <Title as="h2" level="2">
              <ClampText rows={3}>{ title }</ClampText>
            </Title>
          </Stack>
          <Text maxWidth="50ch">
            {excerpt}
            {/* <Markdown options={{ wrapper: renderExcerpt }}>
              {excerpt}
            </Markdown> */}
          </Text>
        </Stack>
      </Link>
    </article>
  )
}
