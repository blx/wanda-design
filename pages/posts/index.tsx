import { getPosts } from '@/api/queries'

type PostsPageProps = {
  posts: PostType[]
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts
    },
    revalidate: 120
  }
}

export default Posts
