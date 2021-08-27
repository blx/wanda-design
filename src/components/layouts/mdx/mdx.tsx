import React, { ReactNode } from 'react'
import slugify from 'slugify'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { Prose, Stack, Title } from '@wonderflow/react-components'
import { ToC } from '@/components/toc'
import { MdxLayout as Mdx, Links } from './mdx.module.css'
import { DocHead, DocHeadProps } from '@/components/doc-head'
import { Toolbar } from '@/components/toolbar'
import { Bleed } from '@/components/bleed'
import { Checklist } from '@/components/checklist'

type MdxLayoutProps = DocHeadProps & PropsWithClass & {
  hero?: ReactNode;
  features?: string[];
  links?: Record<string, any>[];
  showMeta?: boolean;
}

export const MdxLayout: React.FC<MdxLayoutProps> = ({
  children,
  className,
  title,
  description,
  features,
  links,
  hero,
  showMeta = false,
  ...props
}) => (
  <ShellLayout
    className={Mdx}
    stickyHeader
    header={(
      <Toolbar />
      )}
    {...props}
  >
    <Meta title={`${title} - Wanda Design System`} description={description} />
    <Stack rowGap={48}>
      <DocHead title={title} description={description} />
      <ToC.Table content={children} />
      <Stack rowGap={168}>
        <Prose>
          <Stack rowGap={48}>
            <Bleed>{hero}</Bleed>
            {showMeta && (
            <Stack
              direction="row"
              wrap
              fill={false}
              horizontalAlign="space-between"
              columnGap={40}
              rowGap={40}
            >
              {features && (
              <Stack rowGap={24} horizontalAlign="start" fill={false}>
                <Title as="h2" level="5">
                  Features
                </Title>
                <Checklist.List>
                  {features.map(feat => <Checklist.Li key={feat}>{feat}</Checklist.Li>)}
                </Checklist.List>
              </Stack>
              )}

              <Stack rowGap={24} horizontalAlign="start" fill={false}>
                <Title as="h2" level="5">
                  Links
                </Title>
                <Stack horizontalAlign="start" rowGap={8} className={Links}>
                  <a
                    href={`https://github.com/wonderflow-bv/react-components/tree/main/src/${slugify(title, { lower: true })}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source
                  </a>
                  <a
                    href="https://github.com/wonderflow-bv/react-components/issues/new/choose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report an issue
                  </a>
                  {links && links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </Stack>

              </Stack>
            </Stack>
            )}
          </Stack>
          {children}
        </Prose>
      </Stack>
    </Stack>
  </ShellLayout>
)
