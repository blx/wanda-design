/* eslint-disable react/no-array-index-key */
import { Button, Text, Stack } from '@wonderflow/react-components'
import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React, { useCallback, useRef } from 'react'
import { useCopyToClipboard } from 'react-use'

import { CodeBlock as CodeBlockClass, Action, Code, Toolbar } from './code-block.module.css'
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
    <div className={clsx(CodeBlockClass)}>
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
        {({
          className, style, tokens, getLineProps, getTokenProps
        }) => (
          <>
            <Stack direction="row" fill={false} horizontalAlign="space-between" verticalAlign="center" className={Toolbar}>
              {language && <Text fluid={false} size={14} dimmed={6}>{language}</Text>}
              <Button
                className={Action}
                dimension="small"
                kind="flat"
                onClick={copyContent()}
              >
                Copy
              </Button>
            </Stack>

            <pre className={clsx(Code, className)} style={{ ...style }}>
              <div ref={CodeRef}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </div>
            </pre>
          </>
        )}
      </Highlight>
    </div>
  )
}
