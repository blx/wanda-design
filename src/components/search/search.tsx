import React from 'react'
import Head from 'next/head'
import { DocSearch } from '@docsearch/react'

export const Search = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://BR3WX4TQPD-dsn.algolia.net" crossOrigin="true" />
      </Head>
      <DocSearch
        appId="BR3WX4TQPD"
        apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
        indexName="wonderflow"
        placeholder="Search content across the website..."
      />
    </>
  )
}
