import { Fragment } from 'react'
import { getPostDetails, getPosts } from '@/api/queries'
import { Params } from 'next/dist/server/router'
import { Markdown } from '@/components/markdown'

import { PostLayout } from '@/components/layouts/post'
import { Prose } from '@wonderflow/react-components'

type PostPageProps = PostType

const Post = ({
  title,
  content,
  excerpt
}: PostPageProps) => {
  return (
    <PostLayout title={title} excerpt={excerpt}>
      <Prose>
        <Markdown options={{ wrapper: Fragment }}>{content}</Markdown>
      </Prose>
    </PostLayout>
  )
}

export async function getStaticPaths () {
  const posts = await getPosts()
  return {
    paths: posts.map((post: PostType) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: true
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const postDetails = await getPostDetails(params.slug)

  return {
    props: { ...postDetails },
    revalidate: 240
  }
}

export default Post
