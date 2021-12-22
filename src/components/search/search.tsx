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
        apiKey="627f4f52ba7b2a907ae06723932589b3"
        indexName="wonderflow"
        placeholder="Search content across the website..."
      />
    </>
  )
}
