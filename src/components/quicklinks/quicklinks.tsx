import { Icon, Stack, Text, Title, Card } from '@wonderflow/react-components'
import Link from 'next/link'

export const QuickLinks = () => {
  return (
    <Stack wrap direction="row" columnGap={32} rowGap={32}>
      <Link href="/get-started/accessibility/" passHref>
        <Card as="a" right={<Icon name="compass" dimension={24} />} vibrant highlightOnHover>
          <Stack rowGap={32}>
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Learn</Text>
              <Title as="h2" level="4">
                <Text as="span">Accessibility</Text>
              </Title>
            </Stack>
            <Text dimmed={7} maxWidth="30ch">Learn how to design accessible digital products by taking care of everyone.</Text>
          </Stack>
        </Card>
      </Link>

      <Link href="/design/foundations/colors/" passHref>
        <Card as="a" right={<Icon name="compass" fill="var(--highlight-green-foreground)" dimension={24} />} vibrant highlightOnHover>
          <Stack rowGap={32}>
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Start</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="positive">Designing</Text>
              </Title>
            </Stack>
            <Text dimmed={7} maxWidth="30ch">Learn the foundations ow Wanda design system and how to design digital products.</Text>
          </Stack>
        </Card>
      </Link>

      <Link href="/develop/installation/" passHref>
        <Card as="a" right={<Icon name="compass" fill="var(--highlight-yellow-foreground)" dimension={24} />} vibrant highlightOnHover>
          <Stack rowGap={32}>
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Start</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="warning">Developing</Text>
              </Title>
            </Stack>
            <Text dimmed={7} maxWidth="30ch">Learn how to install and use the Wanda design system packages to build digital products.</Text>
          </Stack>
        </Card>
      </Link>

      <Link href="/components/overview/" passHref>
        <Card as="a" right={<Icon name="compass" fill="var(--highlight-red-foreground)" dimension={24} />} vibrant highlightOnHover>
          <Stack rowGap={32}>
            <Stack>
              <Text size={16} dimmed={6} weight="bold">Use</Text>
              <Title as="h2" level="4">
                <Text as="span" sentiment="danger">Components</Text>
              </Title>
            </Stack>
            <Text dimmed={7} maxWidth="30ch">Check all the available and ready to use UI components and learn how to use them inside your digital products.</Text>
          </Stack>
        </Card>
      </Link>

    </Stack>
  )
}
