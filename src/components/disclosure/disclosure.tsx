import React, { CSSProperties, HTMLAttributes, ReactNode, useCallback, useState } from 'react'
import clsx from 'clsx'
import { Disclosure as DisclosureClass, Summary, ExpandIcon, Content } from './disclosure.module.css'
import { Icon, Text } from '@wonderflow/react-components'

type DisclosureProps = {
  open?: boolean;
  summary: ReactNode;
  padding?: boolean;
  contentMaxHeight?: string;
  size?: 'big' | 'regular';
  iconPosition?: 'left' | 'right';
} & HTMLAttributes<HTMLDetailsElement>

export const Disclosure: React.FC<DisclosureProps> = ({
  children,
  open = false,
  padding = true,
  className,
  summary,
  contentMaxHeight,
  size = 'regular',
  iconPosition = 'right',
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpen = useCallback(
    () => (event: any) => {
      event.preventDefault()
      setIsOpen(!isOpen)
    },
    [isOpen]
  )

  const dynamicStyle: CSSProperties = {
    '--maxHeight': contentMaxHeight
  }

  return (
    <details
      style={{ ...dynamicStyle, ...style }}
      className={clsx(DisclosureClass, className)}
      data-disclosure-icon-position={iconPosition}
      data-disclosure-size={size}
      aria-expanded={isOpen ? 'true' : 'false'}
      open={isOpen}
      {...props}
    >
      <Text
        as="summary"
        onClick={handleOpen()}
        className={Summary}
        fluid={false}
        size={size === 'regular' ? 16 : 22}
        weight="bold"
      >
        {summary}
        <Icon className={ExpandIcon} name="chevron-up" size={size === 'regular' ? 16 : 24} />
      </Text>
      <div
        className={Content}
        data-disclosure-padding={padding}
        data-disclosure-height={Boolean(contentMaxHeight)}
      >
        {children}
      </div>
    </details>
  )
}
