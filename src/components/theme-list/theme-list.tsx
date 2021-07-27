import React, { Fragment } from 'react'
import { Swatch } from '@/components/swatch'
import { Stack, Title, Separator } from '@wonderflow/react-components'

type ThemeListProps = {
  theme: Record<string, string>
}

export const ThemeList: React.FC<ThemeListProps> = ({
  theme,
  ...props
}) => {
  const dataKeys = Object.keys(theme)

  const groupedData = dataKeys.reduce((result, currKey) => {
    // Pull out the group name from the key
    const group = currKey.split('-')[0]
    // Check if the group exists, if not, create it
    const hasGroup = result[group] !== undefined
    if (!hasGroup) result[group] = {}
    // Add the current entry to the result
    result[group][currKey] = theme[currKey]
    return result
  }, {})

  const themeKeys = Object.keys(groupedData)

  return (
    <Stack rowGap={56} {...props}>
      {
        themeKeys.map((item, i) => (
          <Fragment key={item}>
            {i !== 0 && <Separator />}
            <Stack rowGap={24}>
              <Title level="5">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {' '}
                colors
              </Title>
              <Stack rowGap={32} wrap>
                {Object.keys(groupedData[item]).map(color => (
                  <Swatch
                    showCopy={false}
                    key={groupedData[item][color] + color}
                    color={groupedData[item][color]}
                    name={`--${color}`}
                  />
                ))}
              </Stack>
            </Stack>
          </Fragment>
        ))
      }
    </Stack>
  )
}
