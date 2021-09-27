import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Toolbar as ToolbarClass } from './toolbar.module.css'
import { Search } from '@/components/search'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { IconButton, Stack } from '@wonderflow/react-components'

type ToolbarProps = {
  showSearch?: boolean;
} & HTMLAttributes<HTMLDivElement>

export const Toolbar: React.FC<ToolbarProps> = ({
  children,
  className,
  showSearch = true,
  ...props
}) => {
  return (
    <Stack
      direction="row"
      fill={false}
      columnGap={16}
      horizontalAlign="end"
      verticalAlign="center"
      className={clsx(ToolbarClass, className)}
      {...props}
    >
      <ThemeSwitcher />
      {showSearch && <Search />}
      <IconButton
        as="a"
        href="https://github.com/wonderflow-bv/design"
        icon="github"
        target="_blank"
        rel="noopner noreferrer"
        kind="flat"
        aria-label="Github link to the source code"
      />
      {children}
    </Stack>
  )
}
