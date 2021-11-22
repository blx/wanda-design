import { gql } from 'graphql-request'
import client from '@/api/client'

export const getPosts = async () => {
  const query = gql`
    query GetPublishedPosts {
      posts(stage: PUBLISHED) {
        id
        slug
        excerpt {
          html
          markdown
        }
        title
        content {
          html
          markdown
        }
      }
    }
  `

  const result = await client.request(query)
  return result.posts
}

export const getPostDetails = async (slug: PostType['slug']) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        id
        slug
        title
        excerpt {
          html
          markdown
        }
        content {
          html
          markdown
        }
      }
    }
  `

  const result = await client.request(query, { slug })

  return result.post
}
