import React, { useState } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'

export const LiveFrame: React.FC = ({
  children,
  ...props
}) => {
  const [pageHead] = useState(typeof document !== 'undefined' ? [...document.head.children as any] : [])

  return (
    <Frame
      frameBorder={0}
      width="100%"
      height="100%"
      loading="lazy"
      {...props}
    >
      <FrameContextConsumer>
        {
          ({ document }: { document: any }) => {
            pageHead.map(
              item => (
                (item.nodeName === 'STYLE' || item.nodeName === 'LINK') && document.head.appendChild(item.cloneNode(true))
              )
            )

            document.documentElement.style.background = 'none'

            return children
          }
        }
      </FrameContextConsumer>
    </Frame>
  )
}
