import React from 'react'
import { Stack, Title, Text } from '@wonderflow/react-components'

export type DocHeadProps = {
  title: string;
  description?: string;
}

export const DocHead: React.FC<DocHeadProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <Stack rowGap={16} {...props}>
      <Title as="h1" level="1">{title}</Title>
      <Text size={28}>{description}</Text>
    </Stack>
  )
}
