import { Stack, Text, Title } from '@wonderflow/react-components'
import React from 'react'
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
      <Stack rowGap={16} className={Content}>
        <Title level="display">Wanda</Title>
        <Text size={28}>
          Wanda is Wonderflow’s open-source design system built for digital products and experiences.
        </Text>
      </Stack>
    </Stack>
  )
}
