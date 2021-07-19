import React from 'react'
import { Stack } from '@wonderflow/react-components'
import { Logo } from '@/components/logo'

export const Home = () => {
  return (
    <Stack
      direction="row"
      style={{
        height: '100vh'
      }}
      horizontalAlign="center"
      verticalAlign="center"
    >
      <Logo style={{
        blockSize: '2.66rem',
        inlineSize: '9.83rem'
      }}
      />
    </Stack>
  )
}

export default Home
