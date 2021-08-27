import React from 'react'
import { ShellLayout } from '@/components/layouts/shell'
import { Hero } from '@/components/hero'

export const Home = () => {
  return (
    <ShellLayout showFooter={false} header={<Hero />} />
  )
}

export default Home
