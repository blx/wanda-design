import clsx from 'clsx'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { Disclosure } from '../disclosure'
import { Stack, Separator, Text } from '@wonderflow/react-components'

import styles from './props.module.css'

type PropsProps = {
  open?: boolean;
  properties: Record<string, any>[];
} & PropsWithClass

export const Props: React.FC<PropsProps> = ({
  className,
  open = true,
  properties,
  ...props
}) => (
  <Stack
    className={clsx(styles.Props, className)}
    rowGap={24}
    {...props}
  >
    {properties.map(item => (
      <Disclosure
        key={Math.random()}
        open
        size="big"
        summary={(
          <Stack direction="row" fill={false} verticalAlign="center" columnGap={8}>
            <Markdown>{`\`${item.name}\``}</Markdown>
            {item.required && <small><Markdown>`required`</Markdown></small>}
          </Stack>
        )}
      >
        <Stack rowGap={8}>
          <Separator />
          {item.description && (
            <Stack direction="row" fill={false} wrap columnGap={16}>
              <Text as="b" size={14} className={styles.PropName}>Description:</Text>
              <Text size={14} className={styles.PropsValue}>{item.description}</Text>
            </Stack>
          )}

          <Stack direction="row" fill={false} wrap columnGap={16}>
            <Text as="b" size={14} className={styles.PropName}>Default:</Text>
            <Text size={14} className={styles.PropsValue}><Markdown>{`\`${item.default || 'null'}\``}</Markdown></Text>
          </Stack>

          {item.type && (
            <Stack direction="row" fill={false} wrap columnGap={16}>
              <Text as="b" size={14} className={styles.PropName}>Type:</Text>
              <Text size={14} className={styles.PropsValue}>
                {item.type.map((value: any, index: any) => <Markdown>{`${index !== 0 ? ', ' : ''}\`${value}\``}</Markdown>)}
              </Text>
            </Stack>
          )}
        </Stack>
      </Disclosure>
    ))}
  </Stack>
)
