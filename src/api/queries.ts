import { gql } from 'graphql-request'
import client from '@/api/client'

export const getPosts = async (
  avatarWidth: number = 300,
  avatarHeight: number = 300
) => {
  const query = gql`
    query GetPublishedPosts($avatarWidth: Int, $avatarHeight: Int) {
      posts(stage: PUBLISHED, orderBy: publishedAt_DESC) {
        id
        updatedAt
        publishedAt
        createdAt
        title
        slug
        externalUrl
        topics
        excerpt
        content
        authors {
          id
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
            url(
              transformation: {
                document: {
                  output: {
                    format: webp
                  }
                },
                image: {
                  resize: {
                    height: $avatarHeight,
                    width: $avatarWidth
                  }
                }
              }
            )
          }
        }
      }
    }
  `

  const result = await client.request(query, { avatarWidth, avatarHeight })
  return result.posts
}

export const getPostsByTopic = async (
  topic: string[],
  avatarWidth: number = 300,
  avatarHeight: number = 300
) => {
  const query = gql`
    query getAllPublishedPostsByTopic($topic: [Topics!], $avatarWidth: Int, $avatarHeight: Int) {
      posts(
        stage: PUBLISHED,
        orderBy: publishedAt_DESC
        where: {
          topics_contains_some: $topic
        }
      ) {
        id
        updatedAt
        publishedAt
        createdAt
        title
        slug
        externalUrl
        topics
        excerpt
        content
        authors {
          id
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
            url(
              transformation: {
                document: {
                  output: {
                    format: webp
                  }
                },
                image: {
                  resize: {
                    height: $avatarHeight,
                    width: $avatarWidth
                  }
                }
              }
            )
          }
        }
      }
    }
  `

  const result = await client.request(query, { topic, avatarWidth, avatarHeight })
  return result.posts
}

export const getPostDetails = async (
  slug: PostType['slug'],
  avatarWidth: number = 300,
  avatarHeight: number = 300
) => {
  const query = gql`
    query GetPostDetails($slug: String!, $avatarWidth: Int, $avatarHeight: Int) {
      post(where: { slug: $slug }) {
        id
        updatedAt
        publishedAt
        createdAt
        title
        slug
        externalUrl
        topics
        excerpt
        content
        authors {
          id
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
            url(
              transformation: {
                document: {
                  output: {
                    format: webp
                  }
                },
                image: {
                  resize: {
                    height: $avatarHeight,
                    width: $avatarWidth
                  }
                }
              }
            )
          }
        }
      }
    }
  `

  const result = await client.request(query, { slug, avatarWidth, avatarHeight })

  return result.post
}
