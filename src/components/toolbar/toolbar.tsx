import React, { HTMLAttributes, useCallback, useState } from 'react'
import clsx from 'clsx'
import { Toolbar as ToolbarClass, SearchLabel } from './toolbar.module.css'
import { IconButton, Stack, Modal, Button } from '@wonderflow/react-components'
import { SearchModal } from '@/components/search-modal'
import { useEvent } from 'react-use'

import dynamic from 'next/dynamic'

const DynThemeSwitcher = dynamic(
  import('@/components/theme-switcher').then(m => m.ThemeSwitcher),
  { ssr: false }
)

const DynPortal = dynamic(
  import('@/components/portal').then(m => m.Portal),
  { ssr: false }
)

type ToolbarProps = {
  showSearch?: boolean;
} & HTMLAttributes<HTMLDivElement>

export const Toolbar: React.FC<ToolbarProps> = ({
  children,
  className,
  showSearch = true,
  ...props
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation()
        event.preventDefault()
        setShowModal(true)
      }
    }, []
  )

  useEvent('keydown', onKeyDown)

  return (
    <Stack
      direction="row"
      fill={false}
      columnGap={8}
      horizontalAlign="end"
      verticalAlign="center"
      className={clsx(ToolbarClass, className)}
      {...props}
    >
      {showSearch && (
        <>
          <Button onClick={() => setShowModal(true)} kind="flat" icon="magnifying-glass">
            <span className={SearchLabel}>Quick search anything...</span>
            {' '}
            ⌘ K
          </Button>
        </>
      )}
      <IconButton
        as="a"
        href="https://github.com/wonderflow-bv/design"
        icon="github"
        target="_blank"
        rel="noopner noreferrer"
        kind="flat"
        aria-label="Github link to the source code"
      />
      <DynThemeSwitcher />
      {children}
      <DynPortal>
        <Modal overlayColor="auto" onClose={() => setShowModal(false)} visible={showModal}>
          <SearchModal />
        </Modal>
      </DynPortal>
    </Stack>
  )
}
