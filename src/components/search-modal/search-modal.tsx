import React, { useCallback, useState } from 'react'
import { Search } from '@/components/search'
import { QuickLinks } from '@/components/quicklinks'
import { IconButton, Stack, Text, useModalContext } from '@wonderflow/react-components'

import { SearchModal as SearchModalClass, Links } from './search-modal.module.css'

export const SearchModal = () => {
  const [isSearching, setIsSearching] = useState<string>('')
  const { onClose } = useModalContext()

  const handleSearch = useCallback(
    (value: string) => {
      setIsSearching(value)
    },
    []
  )

  return (
    <Stack horizontalAlign="center" verticalAlign="start" className={SearchModalClass} rowGap={80} fill={false}>
      <Stack rowGap={8} horizontalAlign="center">
        <Text dimmed={5} size={14}>
          Press
          {' '}
          <kbd>Esc</kbd>
          {' '}
          to close
        </Text>
        <Stack direction="row" columnGap={16} verticalAlign="center">
          <Search onChange={({ currentTarget }) => handleSearch(currentTarget.value)} size={50} />
          <IconButton icon="xmark" kind="secondary" dimension="big" onClick={onClose} />
        </Stack>
      </Stack>
      <div className={Links}>
        {!isSearching && <QuickLinks />}
      </div>
    </Stack>
  )
}
