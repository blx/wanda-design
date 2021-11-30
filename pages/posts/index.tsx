import { getPosts } from '@/api/queries'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { PostCard } from '@/components/post-card'
import { Toolbar } from '@/components/toolbar'
import { List } from '@wonderflow/react-components'

type PostsPageProps = {
  posts: PostsType
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <ShellLayout
      stickyHeader
      header={(
        <Toolbar />
      )}
    >
      <Meta title="Learn - Wanda Design System" description="Learn how to design and develop better user experiences." />
      <List as="ol" hideMarker reversed>
        {posts.map(({ id, title, updatedAt, slug, excerpt }) => (
          <li key={id}>
            <PostCard
              slug={slug}
              title={title}
              updatedAt={updatedAt}
              excerpt={excerpt}
            />
          </li>
        ))}
      </List>
    </ShellLayout>
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
