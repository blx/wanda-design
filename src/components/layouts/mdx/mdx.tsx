import React from 'react'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { Prose, Stack } from '@wonderflow/react-components'
import { ToC } from '@/components/toc'

import { MdxLayout as Mdx } from './mdx.module.css'
import { DocHead, DocHeadProps } from '@/components/doc-head'

export const MdxLayout: React.FC<DocHeadProps & PropsWithClass> = ({
  children,
  className,
  title,
  description,
  ...props
}) => (
  <ShellLayout className={Mdx} {...props}>
    <Meta title={`${title} - Wanda Design System`} description={description} />
    <Stack rowGap={48}>
      <DocHead title={title} description={description} />
      <ToC.Table content={children} />
      <Prose>
        {children}
      </Prose>
    </Stack>
  </ShellLayout>
)
