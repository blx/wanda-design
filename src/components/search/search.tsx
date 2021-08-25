import React, { useEffect } from 'react'
import { Textfield } from '@wonderflow/react-components'
import { TextfieldProps } from '@wonderflow/react-components/textfield'
import Head from 'next/head'

type SearchProps = TextfieldProps & {
  size?: number;
}

declare const window: any

export const Search = ({
  className,
  dimension = 'regular',
  size = 30,
  ...props
}: SearchProps) => {
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '9e6d8175d4b610a1441417e9a1d8ceda',
        indexName: 'wonderflow',
        inputSelector: '#site-search',
        debug: false
      })
    } else {
      console.warn('Search has failed to load DocSearch')
    }
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" key="search" />
      </Head>
      <Textfield
        className={className}
        id="site-search"
        size={size}
        dimension={dimension}
        icon="magnifying-glass"
        iconPosition="left"
        type="search"
        placeholder="Search content across the website..."
        {...props}
      />
    </>
  )
}
