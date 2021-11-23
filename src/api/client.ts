import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.CMS_ENDPOINT,
  {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`
    }
  }
)

export default client
