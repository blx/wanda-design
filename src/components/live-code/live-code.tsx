import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LiveProviderProps, LivePreview } from 'react-live'
import { LiveArea } from '@/components/live-area'
import { LiveAreaProps } from '@/components/live-area/live-area'
import theme from '@/components/code-block/wonder-theme'

export type LiveCodeProps = LiveProviderProps & {
  liveAreaProps?: LiveAreaProps
}

export const LiveCode = ({
  liveAreaProps,
  code,
  scope = {}
}: LiveCodeProps) => {
  return (
    <LiveProvider theme={theme} scope={scope} code={code}>
      <LiveArea {...liveAreaProps}>
        <LivePreview />
        <LiveError />
      </LiveArea>
      <LiveEditor />
    </LiveProvider>
  )
}
