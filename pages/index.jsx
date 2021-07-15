import { Meta } from '@/components/meta'
import { Button, Container } from '@wonderflow/react-components'
import React from 'react'

export default function Home ({ props }) {
  return (
    <div>
      <Meta />
      <Container size="medium">dio</Container>
      <Button type="primary">Click</Button>
    </div>
  )
}
