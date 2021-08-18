import React, { ChangeEvent, CSSProperties, useMemo, useState } from 'react'
import clsx from 'clsx'
import { Stack, Title, Select, Text, Icon } from '@wonderflow/react-components'
import { fromString } from 'css-color-converter'
import ColorContrastChecker from 'color-contrast-checker'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'

import { ContrastCalc as ContrastCalcClass, Preview, Badge } from './contrast-calc.module.css'

type ColorListProps = {
  label: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ColorList = ({
  label,
  onChange
}: ColorListProps) => {
  return (
    <Select id={label} label={label} defaultValue="placeholder" onChange={onChange}>
      <option value="placeholder" hidden disabled>
        Pick a color
      </option>
      {Object.keys(tkns.color).map((group: string) => (
        <optgroup key={group} label={group.charAt(0).toUpperCase() + group.slice(1)}>
          {Object.keys(tkns.color[group]).map((color: string) => (
            <option key={tkns.color[group][color]} value={`${group}-${color}`}>
              {group}
              -
              {color}
            </option>
          ))}
        </optgroup>
      ))}
    </Select>
  )
}

export const ContrastCalc = () => {
  const [bg, setBg] = useState('support-black')
  const [fg, setFg] = useState('support-white')
  const [fs, setFs] = useState('16')

  const HexColor = (color: string) => {
    const formattedColor = color.startsWith('hsl') ? color.split(' ').join(', ').replace('/,', '') : color
    const hexColor = fromString(formattedColor).toHexString()

    return hexColor
  }

  const nameToToken = (name: string) => {
    const splitName = name.split('-')
    return tkns.color[splitName[0]][splitName[1]]
  }

  const bgColor = HexColor(`hsl(${nameToToken(bg)})`)
  const fgColor = HexColor(`hsl(${nameToToken(fg)})`)

  const ccc = useMemo(() => new ColorContrastChecker(), [])

  const dynamicStyle: CSSProperties = {
    '--bg': bgColor,
    '--fg': fgColor
  }

  const isAA = useMemo(() => ccc.isLevelAA(bgColor, fgColor, parseInt(fs)), [fs, ccc, bgColor, fgColor])
  const isAAA = useMemo(() => ccc.isLevelAAA(bgColor, fgColor, parseInt(fs)), [fs, ccc, bgColor, fgColor])
  const isValid = useMemo(() => isAA || isAAA, [isAA, isAAA])

  return (
    <Stack
      direction="row"
      className={clsx(ContrastCalcClass)}
      columnGap={32}
      rowGap={32}
      verticalAlign="center"
      data-contrast-calc-valid={isValid}
      style={dynamicStyle}
      wrap
    >
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        fill={false}
        className={Preview}
      >
        <Title as="span" level="1">Aa</Title>
      </Stack>
      <Stack rowGap={32}>
        <Stack direction="row" columnGap={8} rowGap={8} wrap verticalAlign="start">
          <ColorList onChange={(event) => setBg(event.target.value)} label="Background color" />
          <ColorList onChange={(event) => setFg(event.target.value)} label="Foreground color" />
          <Select label="Font size" defaultValue={fs} onChange={(event: ChangeEvent<HTMLSelectElement>) => setFs(event.target.value)}>
            <option value="16">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="22">22</option>
            <option value="28">28</option>
          </Select>
        </Stack>
        <Stack horizontalAlign="start" verticalAlign="end" rowGap={24} fill={false}>
          <Stack inline direction="row" columnGap={8} verticalAlign="center" className={Badge}>
            <Text weight="bold" size={22}>{isAAA ? 'AAA' : isAA ? 'AA' : 'FAIL'}</Text>
            <Icon name={isValid ? 'check' : 'xmark'} size={24} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
