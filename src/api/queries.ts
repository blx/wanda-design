import { gql } from 'graphql-request'
import client from '@/api/client'

export const getPosts = async () => {
  const query = gql`
    query GetPublishedPosts {
      posts(stage: PUBLISHED) {
        id
        updatedAt
        title
        slug
        externalUrl
        excerpt
        content
        authors {
          fullName
          role
          favouriteColor {
            rgba {
              r
              g
              b
            }
          }
          avatar {
            url(transformation: {document: {output: {format: webp}}})
          }
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
        updatedAt
        title
        slug
        externalUrl
        excerpt
        content
        authors {
          fullName
          role
          favouriteColor {
            rgba {
              r
              g
              b
            }
          }
          avatar {
            url(transformation: {document: {output: {format: webp}}})
          }
        }
      }
    }
  `

  const result = await client.request(query, { slug })

  return result.post
}
