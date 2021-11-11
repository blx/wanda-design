import { Icon, Stack, Text, Title } from '@wonderflow/react-components'
import React from 'react'
import { Tile } from '@/components/tile'
import Link from 'next/link'

export const QuickLinks = () => {
  return (
    <Stack wrap direction="row" columnGap={32} rowGap={32}>
      <Link href="/get-started/accessibility/" passHref>
        <Tile as="a">
          <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Learn</Text>
              <Title as="h2" level="4">
                <Text as="span">Accessibility</Text>
              </Title>
            </Stack>
            <Icon name="arrow-right" dimension={24} />
          </Stack>
          <Text dimmed={7} maxWidth="30ch">Learn how to design accessible digital products by taking care of everyone.</Text>
        </Tile>
      </Link>

      <Link href="/design/foundations/colors/" passHref>
        <Tile as="a">
          <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Start</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="positive">Designing</Text>
              </Title>
            </Stack>
            <Icon name="arrow-right" fill="var(--highlight-green-foreground)" dimension={24} />
          </Stack>
          <Text dimmed={7} maxWidth="30ch">Learn the foundations ow Wanda design system and how to design digital products.</Text>
        </Tile>
      </Link>

      <Link href="/develop/installation/" passHref>
        <Tile as="a">
          <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Start</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="warning">Developing</Text>
              </Title>
            </Stack>
            <Icon name="arrow-right" fill="var(--highlight-yellow-foreground)" dimension={24} />
          </Stack>
          <Text dimmed={7} maxWidth="30ch">Learn how to install and use the Wanda design system packages to build digital products.</Text>
        </Tile>
      </Link>

      <Link href="/components/overview/" passHref>
        <Tile as="a">
          <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Use</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="danger">Components</Text>
              </Title>
            </Stack>
            <Icon name="arrow-right" fill="var(--highlight-red-foreground)" dimension={24} />
          </Stack>
          <Text dimmed={7} maxWidth="30ch">Check all the available and ready to use UI components and learn how to use them inside your digital products.</Text>
        </Tile>
      </Link>

    </Stack>
  )
}
