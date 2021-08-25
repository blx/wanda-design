import { Icon, Stack, Text, Title } from '@wonderflow/react-components'
import React from 'react'
import { Tile } from '@/components/tile'
import { Search } from '@/components/search'
import Link from 'next/link'
import { Hero as HeroClass, Video, Content } from './hero.module.css'

export const Hero = () => {
  return (
    <Stack className={HeroClass} verticalAlign="end" fill={false}>
      <video
        className={Video}
        autoPlay
        loop
        muted
        playsInline
        height="220"
        width="390"
        poster="/hero-poster.png"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <Stack rowGap={160} className={Content}>
        <Stack rowGap={32}>
          <Title level="display">Wanda</Title>
          <Text size={28} maxWidth="50ch">
            Wanda is Wonderflow’s open-source design system built for digital products and experiences.
          </Text>
          <Search size={50} dimension="big" />
        </Stack>
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
                <Icon name="arrow-right" dimension={24} />
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
                <Icon name="arrow-right" dimension={24} />
              </Stack>
              <Text dimmed={7} maxWidth="30ch">Learn how to install and use the Wanda design system packages to build digital products.</Text>
            </Tile>
          </Link>

          <Link href="/develop/components/button/" passHref>
            <Tile as="a">
              <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
                <Stack>
                  <Text size={16} dimmed={6} weight="bold">Use</Text>
                  <Title as="h2" level="4">
                    <Text as="span" sentiment="danger">Components</Text>
                  </Title>
                </Stack>
                <Icon name="arrow-right" dimension={24} />
              </Stack>
              <Text dimmed={7} maxWidth="30ch">Check all the available and ready to use UI components and learn how to use them inside your digital products.</Text>
            </Tile>
          </Link>

        </Stack>
      </Stack>
    </Stack>
  )
}
