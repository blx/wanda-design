import React, { useState } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import { ThemeProvider, useThemeContext } from '@wonderflow/react-components'

export const LiveFrame: React.FC = ({
  children,
  ...props
}) => {
  const [pageHead] = useState(typeof document !== 'undefined' ? [...document.head.children as any] : [])
  const { theme } = useThemeContext()

  return (
    <Frame
      frameBorder={0}
      width="100%"
      height="100%"
      loading="lazy"
      {...props}
    >
      <ThemeProvider>
        <FrameContextConsumer>
          {
            ({ document }: { document: any }) => {
              pageHead.map(
                item => (
                  (item.nodeName === 'STYLE' || item.nodeName === 'LINK') && document.head.appendChild(item.cloneNode(true))
                )
              )

              document.documentElement.style.background = 'none'
              document.documentElement.dataset.theme = theme

              return children
            }
          }
        </FrameContextConsumer>
      </ThemeProvider>
    </Frame>
  )
}
