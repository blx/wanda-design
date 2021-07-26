import React from 'react'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { Prose, Stack } from '@wonderflow/react-components'
import { ToC } from '@/components/toc'

import styles from './mdx.module.css'
import { DocHead, DocHeadProps } from '@/components/doc-head'

export const MdxLayout: React.FC<DocHeadProps & PropsWithClass> = ({
  children,
  className,
  title,
  description,
  ...props
}) => (
  <ShellLayout className={styles.MdxLayout} {...props}>
    <Meta title={`${title} - Wanda Design System`} description={description} />
    <Stack rowGap={48}>
      <DocHead title={title} description={description} />
      <Prose>
        <ToC.Table />
        {children}
      </Prose>
    </Stack>
  </ShellLayout>
)
