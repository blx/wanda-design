import React, { useCallback, useMemo, useState } from 'react'
import { Icon, Stack, Text, Textfield } from '@wonderflow/react-components'
import { IconProps } from '@wonderflow/react-components/icon'
import IconsList from '@wonderflow/react-components/icons/structure.json'
import { IconNames } from '@wonderflow/react-components/icons/types'
import { IconTile as IconTileClass, Grid, Label } from './search-icons.module.css'
import { useDebounce, useCopyToClipboard } from 'react-use'
import { BlankButton } from '../blank-button'
import { Bleed } from '@/components/bleed'

type IconTileProps = {
  icon: IconNames;
  size: IconProps['size'];
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
      <Stack horizontalAlign="center" rowGap={16} fill={false}>
        <Icon name={icon} size={size} />
        <Text size={14} weight="bold">{icon}</Text>
      </Stack>
      {(state.value && copied) && <Text size={14} weight="bold" className={Label}>COPIED</Text>}
    </Stack>
  )
}

export const SearchIcons = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
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

  return (
    <Stack rowGap={48}>
      <Textfield
        onChange={handleSearch}
        icon="magnifying-glass"
        iconPosition="left"
        size="big"
        data-search-icons-searched={isReady()}
        placeholder="Search icon names"
      />
      <Bleed maxWidth="90ch">
        <div className={Grid}>
          {filteredIcons.map((icon: IconNames) => (
            <IconTile key={icon + '16'} icon={icon} size={24} />
          ))}
        </div>
      </Bleed>
    </Stack>
  )
}
