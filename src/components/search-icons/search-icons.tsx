import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Icon, Radio, Stack, Text, Textfield, Title, IconProps } from '@wonderflow/react-components'
import IconsList from '@wonderflow/react-components/icons/structure.json'
import { useDebounce, useCopyToClipboard } from 'react-use'
import { BlankButton } from '@/components/blank-button'
import { Bleed } from '@/components/bleed'
import { SearchIcons as SearchIconsClass, IconTile as IconTileClass, Grid, Label, IconPreview, ToolBar } from './search-icons.module.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'
import { IconNames } from '@wonderflow/react-components/icons/types'

type IconTileProps = {
  icon: IconNames;
  size: IconProps['dimension'];
}

const IconTile: React.FC<IconTileProps> = ({ icon, size }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(
    (icon: string) => () => {
      setCopied(true)
      copyToClipboard(icon)
      setTimeout(() => setCopied(false), 1000)
    },
    [copyToClipboard]
  )

  return (
    <Stack
      as={BlankButton}
      onClick={handleCopy(icon)}
      className={IconTileClass}
      horizontalAlign="center"
      data-icon-tile-copied={copied}
      verticalAlign="center"
      rowGap={24}
    >
      <Stack horizontalAlign="center" verticalAlign="center" rowGap={16} fill={false}>
        <Icon className={IconPreview} name={icon} dimension={size} />
        <Text size={14} weight="bold">{icon}</Text>
      </Stack>
      {(state.value && copied) && <Text size={14} weight="bold" className={Label}>COPIED</Text>}
    </Stack>
  )
}

export const SearchIcons = () => {
  const fieldRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [iconSize, setIconSize] = useState<TokensTypes['icon']['size']>(16)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('')
  const filteredIcons = useMemo(() => IconsList.filter(iconName => iconName.includes(debouncedSearchTerm)), [debouncedSearchTerm])

  const [isReady] = useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm)
    },
    300,
    [searchTerm]
  )

  const handleSearch = useCallback(
    ({ currentTarget }) => {
      setSearchTerm(currentTarget.value)
    },
    []
  )

  useEffect(() => {
    const currentValue = fieldRef?.current?.value
    if (currentValue) setSearchTerm(currentValue)
  }, [])

  return (
    <Stack rowGap={48} className={SearchIconsClass}>
      <Bleed className={ToolBar}>
        <Stack direction="row" verticalAlign="center" horizontalAlign="center" wrap columnGap={24} rowGap={16}>
          <Textfield
            ref={fieldRef}
            type="search"
            onChange={handleSearch}
            icon="magnifying-glass"
            iconPosition="left"
            data-search-icons-searched={isReady()}
            placeholder="Search icon names"
            dimension="big"
          />
          <Stack direction="row" fill={false} columnGap={24} inline>
            <Stack verticalAlign="center" direction="row" columnGap={8}>
              <Radio onChange={() => setIconSize(16)} dimension="small" id="SolidStyle" name="iconstyle" value="solid" defaultChecked />
              <Text as="label" htmlFor="SolidStyle"><b>Solid</b></Text>
            </Stack>
            <Stack verticalAlign="center" direction="row" columnGap={8}>
              <Radio onChange={() => setIconSize(24)} dimension="small" id="OutlineStyle" name="iconstyle" value="outline" />
              <Text as="label" htmlFor="OutlineStyle"><b>Outline</b></Text>
            </Stack>
          </Stack>
        </Stack>
      </Bleed>
      <Bleed>
        { filteredIcons.length === 0
          ? (
            <Stack horizontalAlign="center" verticalAlign="center" rowGap={16}>
              <Title as="h2" level="5">Nothing to show</Title>
              <Text color="informative">Make sure you entered the correct name.</Text>
            </Stack>
            )
          : (
            <div className={Grid}>
              {filteredIcons.map((icon: IconNames) => <IconTile key={icon + '16'} icon={icon} size={iconSize} />)}
            </div>
            )
          }
      </Bleed>
    </Stack>
  )
}
