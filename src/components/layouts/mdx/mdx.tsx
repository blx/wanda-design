import React, { ReactNode } from 'react'
import slugify from 'slugify'
import { ShellLayout } from '@/components/layouts/shell'
import { Meta } from '@/components/meta'
import { IconButton, Icon, Prose, Stack, Title, List } from '@wonderflow/react-components'
import { ToC } from '@/components/toc'
import { DocHead, DocHeadProps } from '@/components/doc-head'
import { Toolbar } from '@/components/toolbar'
import { Bleed } from '@/components/bleed'

import { MdxLayout as Mdx, Links, Hero, Action } from './mdx.module.css'
import Markdown from 'markdown-to-jsx'

type MdxLayoutProps = DocHeadProps & PropsWithClass & {
  tags?: ReactNode;
  hero?: ReactNode;
  features?: string[];
  links?: Record<string, any>[];
  showMeta?: boolean;
  showLinks?: boolean;
  showPlayground?: boolean;
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
  showPlayground = false,
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
              {(hero && showPlayground) && (
              <IconButton
                as="a"
                kind="flat"
                className={Action}
                aria-label="Edit con Codesanbox"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://codesandbox.io/s/wanda-ds-playground-w5c95?fontsize=14&hidenavigation=1&initialpath=%2F${slugName}&module=%2Fpages%2F${slugName}.tsx&theme=dark`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 6l10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z" />
                </svg>
              </IconButton>
              )}
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
