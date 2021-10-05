import React, { useCallback, useState } from 'react'
import { Search } from '@/components/search'
import { QuickLinks } from '@/components/quicklinks'
import { Stack } from '@wonderflow/react-components'

import { SearchModal as SearchModalClass, Links } from './search-modal.module.css'

export const SearchModal = () => {
  const [isSearching, setIsSearching] = useState<string>('')

  const handleSearch = useCallback(
    (value: string) => {
      setIsSearching(value)
    },
    []
  )

  return (
    <Stack horizontalAlign="center" verticalAlign="start" className={SearchModalClass} rowGap={120} fill={false}>
      <Search onChange={({ currentTarget }) => handleSearch(currentTarget.value)} size={50} />
      <div className={Links}>
        {!isSearching && <QuickLinks />}
      </div>
    </Stack>
  )
}
