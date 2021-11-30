import { getPostDetails, getPosts } from '@/api/queries'
// import { Markdown } from '@/components/markdown'
import { Params } from 'next/dist/server/router'

type PostPageProps = PostType

const Post = ({
  title,
  content
}: PostPageProps) => {
  return (
    <div>
      {title}
      {content}
    </div>
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
