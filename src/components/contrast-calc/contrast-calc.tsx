import React, { ChangeEvent, CSSProperties, forwardRef, Ref, useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Stack, Title, Select, Text, Icon } from '@wonderflow/react-components'
import { fromString } from 'css-color-converter'
import ColorContrastChecker from 'color-contrast-checker'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'

import { ContrastCalc as ContrastCalcClass, Preview, Badge } from './contrast-calc.module.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

type ColorListProps = {
  label: string;
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ColorList = forwardRef(({
  label,
  onChange,
  defaultValue = 'placeholder',
  ...props
}: ColorListProps, ref: Ref<HTMLSelectElement>) => {
  return (
    <Select ref={ref} id={label} label={label} onChange={onChange} defaultValue={defaultValue} {...props}>
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
})

ColorList.displayName = 'ColorList'

export const ContrastCalc = () => {
  const [bg, setBg] = useState('support-black')
  const [fg, setFg] = useState('support-white')
  const [fs, setFs] = useState(28)
  const bgRef = useRef<any>(null)
  const fgRef = useRef<any>(null)

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

  const isAA = useMemo(() => ccc.isLevelAA(bgColor, fgColor, fs), [fs, ccc, bgColor, fgColor])
  const isAAA = useMemo(() => ccc.isLevelAAA(bgColor, fgColor, fs), [fs, ccc, bgColor, fgColor])
  const isValid = useMemo(() => isAA || isAAA, [isAA, isAAA])

  useEffect(() => {
    setBg(bgRef.current.value)
    setFg(fgRef.current.value)
  }, [])

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
        <Title as="span" level="1"><Text size={fs as TokensTypes['font']['size']}>Preview</Text></Title>
      </Stack>
      <Stack rowGap={32}>
        <Stack direction="row" columnGap={8} rowGap={8} wrap verticalAlign="start">
          <ColorList ref={bgRef} onChange={() => setBg(bgRef.current.value)} defaultValue={bg} label="Background color" />
          <ColorList ref={fgRef} onChange={() => setFg(fgRef.current.value)} defaultValue={fg} label="Foreground color" />
          <Select label="Font size" defaultValue={fs} onChange={(event: ChangeEvent<HTMLSelectElement>) => setFs(parseInt(event.target.value))}>
            <option value="16">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="22">22</option>
            <option value="28">28</option>
          </Select>
        </Stack>
        <Stack horizontalAlign="start" verticalAlign="end" rowGap={24} fill={false}>
          <Stack inline direction="row" columnGap={8} verticalAlign="center" className={Badge}>
            <Text weight="bold" size={28}>{isAAA ? 'AAA' : isAA ? 'AA' : 'FAIL'}</Text>
            <Icon name={isValid ? 'check' : 'xmark'} dimension={24} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
