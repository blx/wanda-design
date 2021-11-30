import clsx from 'clsx'
import Link from 'next/link'
import { PostCard as PostCardClass } from './post-card.module.css'
import { Stack, Text, Title } from '@wonderflow/react-components'
import { Datetime } from '@/components/datetime'

type PostCardProps = PropsWithClass & {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  externalUrl?: string;
}

export const PostCard = ({
  className,
  date,
  title,
  slug,
  externalUrl,
  excerpt,
  ...props
}: PostCardProps) => (
  <article className={clsx(PostCardClass, className)} {...props}>
    <Link href={externalUrl || `/posts/${encodeURIComponent(slug)}`} passHref>
      <Stack
        as="a"
        target={externalUrl && '_blank'}
        rowGap={16}
        verticalAlign="start"
        horizontalAlign="start"
        horizontalPadding={16}
        verticalPadding={16}
      >
        <Text as="span" dimmed={5} size={16}>
          <Datetime date={date} />
        </Text>
        <Title as="h2" level="3">{ title }</Title>
        <Text>{excerpt}</Text>
      </Stack>
    </Link>
  </article>
)
