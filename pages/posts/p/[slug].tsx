import { Fragment } from 'react'
import { getPostDetailsBySlug } from '@/api/queries'
import { Params } from 'next/dist/server/router'
import { Markdown } from '@/components/markdown'

import { PostLayout } from '@/components/layouts/post'
import { Prose, Separator, SkeletonBlock, Text, Title } from '@wonderflow/react-components'

type PostPageProps = PostType

const Post = ({
  title,
  content,
  authors,
  topics,
  excerpt
}: PostPageProps) => {
  return (
    <PostLayout
      title={title}
      excerpt={excerpt}
      authors={authors}
      topics={topics}
    >
      <Prose>
        {content
          ? <Markdown options={{ wrapper: Fragment }}>{content}</Markdown>
          : (
            <>
              <Title><SkeletonBlock height={40} /></Title>
              <SkeletonBlock count={5} />
              <Text><Separator /></Text>
              <SkeletonBlock count={25} />
            </>
            )}
      </Prose>
    </PostLayout>
  )
}

export const getServerSideProps = async ({ params }: Params) => {
  const postDetails = await getPostDetailsBySlug(params.slug, 'DRAFT')

  return {
    props: { ...postDetails }
  }
}

export default Post
