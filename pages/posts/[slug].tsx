import { ShellLayout } from '@/components/layouts/shell'
import { Fragment } from 'react'
import { getPostDetails, getPosts } from '@/api/queries'
import { Params } from 'next/dist/server/router'
import { Markdown } from '@/components/markdown'
import { Meta } from '@/components/meta'
import { Toolbar } from '@/components/toolbar'
import { Prose } from '@wonderflow/react-components'

type PostPageProps = PostType

const Post = ({
  title,
  content,
  excerpt
}: PostPageProps) => {
  return (
    <ShellLayout
      stickyHeader
      header={(
        <Toolbar />
      )}
    >
      <Meta title={`${title} - Wanda Design System`} description={excerpt} />
      {title}
      <Prose>
        {content && <Markdown options={{ wrapper: Fragment }}>{content}</Markdown>}
      </Prose>
    </ShellLayout>
  )
}

export async function getStaticPaths () {
  const posts = await getPosts()
  return {
    paths: posts.map((post: Partial<PostType>) => ({
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
