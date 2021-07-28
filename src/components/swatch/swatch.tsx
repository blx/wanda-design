import React, {
  useState, CSSProperties, useCallback, Fragment
} from 'react'
import { fromString } from 'css-color-converter'
import { Text, Title, Stack, Button } from '@wonderflow/react-components'

import styles from './swatch.module.css'

type SwatchProps = {
  color: string;
  name: string;
  showCopy?: boolean;
}

export const Swatch: React.FC<SwatchProps> = ({
  color,
  showCopy = true,
  name
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const formattedColor = color.startsWith('hsl') ? color.split(' ').join(', ').replace('/,', '') : color
  const hexColor = fromString(formattedColor).toHexString()
  const hslColor = color

  const changeLabel = useCallback(() => {
    const timer = setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = useCallback(
    c => () => {
      navigator.clipboard.writeText(c)
      setIsCopied(true)
      changeLabel()
    },
    [changeLabel]
  )

  const dynamicStyle: CSSProperties = {
    '--backgroundColor': hslColor
  }

  return (
    <Stack rowGap={8} className={styles.Swatch} style={dynamicStyle}>
      <Stack
        direction="row"
        columnGap={16}
        className={styles.Color}
        verticalAlign="center"
        horizontalAlign="center"
        fill={false}
      >
        {isCopied
          ? <Text as="b" weight="bold" size={16}>COPIED</Text>
          : showCopy && (
            <Fragment>
              <Button type="flat" size="small" className={styles.CopyColor} onClick={copyToClipboard(hexColor)}>
                <b>COPY HEX</b>
              </Button>
              <Button type="flat" size="small" className={styles.CopyColor} onClick={copyToClipboard(hslColor)}>
                <b>COPY HSL</b>
              </Button>
            </Fragment>
          )}
      </Stack>
      <Stack
        rowGap={4}
        verticalAlign="center"
        horizontalAlign="start"
        fill={false}
      >
        {name && <Title level="6">{name}</Title>}
        <Stack className={styles.Values} direction="row" columnGap={4}>
          <Text size={14}>{hslColor}</Text>
          ｜
          <Text size={14}>{hexColor}</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
