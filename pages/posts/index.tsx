import { getPosts } from '@/api/queries'

type PostsPageProps = {
  posts: PostType[]
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts() || []
  return {
    props: {
      posts
    },
    revalidate: 120
  }
}

export default Posts
