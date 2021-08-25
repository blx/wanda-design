import React from 'react'
import { Textfield } from '@wonderflow/react-components'
import NextScript from 'next/script'
import Head from 'next/head'
import { TextfieldProps } from '@wonderflow/react-components/textfield'

type SearchProps = TextfieldProps & {}

export const Search = ({
  className,
  dimension = 'regular',
  ...props
}: SearchProps) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" key="search" />
      </Head>

      <Textfield
        className={className}
        id="site-search"
        size={30}
        dimension={dimension}
        icon="magnifying-glass"
        iconPosition="left"
        type="search"
        placeholder="Search content across the website..."
        {...props}
      />

      <NextScript src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" strategy="beforeInteractive" />
      <NextScript strategy="afterInteractive">
        {`docsearch({
              apiKey: '9e6d8175d4b610a1441417e9a1d8ceda',
              indexName: 'wonderflow',
              inputSelector: '#site-search',
              debug: true
        })`}
      </NextScript>
    </>
  )
}
