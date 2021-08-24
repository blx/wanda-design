/* eslint-disable react/no-array-index-key */
import { Button } from '@wonderflow/react-components'
import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React, { useCallback, useRef } from 'react'
import { useCopyToClipboard } from 'react-use'

import { CodeBlock as CodeBlockClass, Action, Code } from './code-block.module.css'
import theme from './wonder-theme'

type CodeBlockProps = {
  children: any;
} & PropsWithClass

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className
}) => {
  const language = className?.replace(/language-/, '') as Language
  const CodeRef = useRef<any>('')
  const [, copyToClipboard] = useCopyToClipboard()

  const copyContent = useCallback(
    () => () => {
      copyToClipboard(CodeRef.current.innerText)
    },
    [CodeRef, copyToClipboard]
  )

  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({
        className, style, tokens, getLineProps, getTokenProps
      }) => (
        <div className={clsx(CodeBlockClass)}>
          <Button
            className={Action}
            dimension="small"
            kind="flat"
            onClick={copyContent()}
          >
            Copy
          </Button>

          <div className={clsx(Code, className)} style={{ ...style }}>
            <div ref={CodeRef}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Highlight>
  )
}
