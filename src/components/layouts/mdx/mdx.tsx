import React, { ReactNode } from 'react'
import slugify from 'slugify'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { Icon, Prose, Stack, Title, List } from '@wonderflow/react-components'
import { ToC } from '@/components/toc'
import { DocHead, DocHeadProps } from '@/components/doc-head'
import { Toolbar } from '@/components/toolbar'
import { Bleed } from '@/components/bleed'

import { MdxLayout as Mdx, Links, Hero } from './mdx.module.css'
import Markdown from 'markdown-to-jsx'

type MdxLayoutProps = DocHeadProps & PropsWithClass & {
  tags?: ReactNode;
  hero?: ReactNode;
  features?: string[];
  links?: Record<string, any>[];
  showMeta?: boolean;
  showLinks?: boolean;
}

export const MdxLayout: React.FC<MdxLayoutProps> = ({
  children,
  className,
  title,
  description,
  features,
  links,
  hero,
  showLinks = true,
  showMeta = false,
  tags,
  ...props
}) => {
  const slugName = slugify(title, { lower: true })

  return (
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
        <DocHead title={title} description={description}>
          {tags}
        </DocHead>
        <ToC.Table content={children} />
        <Stack rowGap={88}>
          <Stack rowGap={48}>
            {hero && (
            <Bleed className={Hero}>
              {hero}
            </Bleed>
            )}
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
                <List marker="check" markerColor="var(--highlight-green-foreground)">
                  {features.map(feat => (
                    <li key={feat}><Markdown>{feat}</Markdown></li>
                  ))}
                </List>
              </Stack>
              )}

              {showLinks && (
              <Stack rowGap={24} horizontalAlign="start" fill={false}>
                <Title as="h2" level="5">
                  Links
                </Title>
                <Stack horizontalAlign="start" rowGap={8} className={Links}>
                  <a
                    href={`https://github.com/wonderflow-bv/react-components/tree/main/src/${slugName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source
                    {' '}
                    <Icon name="arrow-up-right" dimension={14} />
                  </a>
                  <a
                    href="https://github.com/wonderflow-bv/react-components/issues/new/choose"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report an issue
                    {' '}
                    <Icon name="arrow-up-right" dimension={14} />
                  </a>
                  {links && links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      {' '}
                      <Icon name="arrow-up-right" dimension={14} />
                    </a>
                  ))}
                </Stack>
              </Stack>
              )}
            </Stack>
            )}
          </Stack>
          <Prose>
            {children}
          </Prose>
        </Stack>
      </Stack>
    </ShellLayout>
  )
}
