import React, { Children, ReactNode } from 'react'
import { Icon, Stack, Text } from '@wonderflow/react-components'
import slugify from 'slugify'
import clsx from 'clsx'

import { ToC as ToCClass, ToCItem } from './toc.module.css'

type ToCTableProps = {
  content?: ReactNode;
} & PropsWithClass

type ToCItemProps = {
  text: string;
} & PropsWithClass

export const ToC: {
  Table: React.FC<ToCTableProps>;
  Li: React.FC<ToCItemProps>
} = {
  Table: ({ className, content, ...props }) => (
    <Stack as="ul" rowGap={8} className={clsx(ToCClass, className)} {...props}>
      {Children.toArray(content)
        .filter((item: { props: any }) => /h2/g.test(item.props.mdxType))
        .map((child: { props: any }) => (
          <ToC.Li key={child.props.children} text={child.props.children} />
        ))
      }
    </Stack>
  ),

  Li: ({ className, text, ...props }) => (
    <li className={clsx(ToCItem, className)} {...props}>
      <Icon name="turn-down-right" size={24} />
      <Text as="a" size={22} href={`#${slugify(text[0], { lower: true })}`}>{text[0].replace('#', '')}</Text>
    </li>
  )
}

ToC.Table.displayName = 'Toc.Table'
ToC.Li.displayName = 'Toc.Li'
