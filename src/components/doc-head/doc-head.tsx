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
      <Title fluid as="h1" level="1">{title}</Title>
      <Text size={22}>{description}</Text>
    </Stack>
  )
}
