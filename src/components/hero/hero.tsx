import { Icon, Stack, Text, Title } from '@wonderflow/react-components'
import React from 'react'
import { Tile } from '@/components/tile'
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
      <Stack rowGap={80} className={Content}>
        <div>
          <Title level="display">Wanda</Title>
          <Text size={28}>
            Wanda is Wonderflow’s open-source design system built for digital products and experiences.
          </Text>
        </div>
        <Stack wrap direction="row" columnGap={8} rowGap={24}>
          <Tile as="a" href="/design/foundations/colors/">
            <Title as="h2" level="4">
              <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
                <Stack>
                  <Text size={16} color="positive">Start</Text>
                  Designing
                </Stack>
                <Icon name="arrow-right" dimension={24} />
              </Stack>
            </Title>
          </Tile>

          <Tile as="a" href="/develop/installation/">
            <Title as="h2" level="4">
              <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
                <Stack>
                  <Text size={16} color="positive">Start</Text>
                  Developing
                </Stack>
                <Icon name="arrow-right" dimension={24} />
              </Stack>
            </Title>
          </Tile>

          <Tile as="a" href="/develop/components/button//">
            <Title as="h2" level="4">
              <Stack direction="row" columnGap={16} horizontalAlign="space-between" fill={false} verticalAlign="center">
                <Stack>
                  <Text size={16} color="positive">Start from</Text>
                  Components
                </Stack>
                <Icon name="arrow-right" dimension={24} />
              </Stack>
            </Title>
          </Tile>
        </Stack>
      </Stack>
    </Stack>
  )
}
