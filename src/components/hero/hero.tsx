import { Stack, Text, Title } from '@wonderflow/react-components'
import React from 'react'
import { Hero as HeroClass, Tagline } from './hero.module.css'

export const Hero = () => {
  return (
    <Stack className={HeroClass} verticalAlign="end" fill={false}>
      <Stack rowGap={16}>
        <Title level="display">Wanda</Title>
        <Text size={28} className={Tagline}>
          Wanda is Wonderflow’s open-source design system built for digital products and experiences.
        </Text>
      </Stack>
    </Stack>
  )
}
