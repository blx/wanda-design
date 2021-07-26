import React, { useEffect, useState } from 'react'
import { Icon, Stack } from '@wonderflow/react-components'
import slugify from 'slugify'
import clsx from 'clsx'

import styles from './toc.module.css'

type ToCItemProps = {
  text: string;
} & PropsWithClass

export const ToC: {
  Table: React.FC<PropsWithClass>;
  Li: React.FC<ToCItemProps>
} = {
  Table: ({ className, children, ...props }) => {
    const [headings, setHeadings] = useState<HTMLElement[]>([])

    useEffect(() => {
      const headingElements = [...document.querySelectorAll('h2')]
      setHeadings(headingElements)
    }, [])

    return headings.length > 0
      ? (
        <Stack as="ul" rowGap={8} className={clsx(styles.ToC, className)} {...props}>
          {headings.map(item => item && <ToC.Li key={item.innerText} text={item.innerText} />)}
        </Stack>
        )
      : <></>
  },

  Li: ({ className, text, ...props }) => (
    <li className={clsx(styles.ToCItem, className)} {...props}>
      <Icon name="turn-down-right" size={24} />
      <a href={`#${slugify(text, { lower: true })}`}>{text.replace('#', '')}</a>
    </li>
  )
}

ToC.Table.displayName = 'Toc.Table'
ToC.Li.displayName = 'Toc.Li'
