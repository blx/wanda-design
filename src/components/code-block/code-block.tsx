/* eslint-disable react/no-array-index-key */
import { Button, Text, Stack } from '@wonderflow/react-components'
import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import rangeParser from 'parse-numeric-range'
import React, { useCallback, useRef } from 'react'
import { useCopyToClipboard } from 'react-use'

import { CodeBlock as CodeBlockClass, Action, Code, Toolbar, LineNumber, LineContent } from './code-block.module.css'
import theme from './wonder-theme'

type CodeBlockProps = {
  children: any;
  highlight?: string;
  hideCopy?: boolean;
  showLineNumbers?: boolean;
} & PropsWithClass

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  highlight,
  showLineNumbers = false,
  hideCopy = false,
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
    <div className={clsx(CodeBlockClass)} data-code-block-has-highlight={Boolean(highlight)}>
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
        {({
          className, style, tokens, getLineProps, getTokenProps
        }) => (
          <>
            <pre ref={CodeRef} className={clsx(Code, className)} style={{ ...style }}>
              {tokens.map((line, i) => (
                // Line
                <div
                  key={i}
                  style={{ display: 'table-row' }}
                  data-code-block-highlight={highlight && rangeParser(highlight).includes(i + 1)}
                  {...getLineProps({ line, key: i })}
                >
                  {/* Line number */}
                  {showLineNumbers && (
                    <span className={LineNumber}>
                      {i + 1}
                    </span>
                  )}
                  <span className={LineContent}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
            <Stack direction="row" fill={false} horizontalAlign="space-between" verticalAlign="center" className={Toolbar}>
              {language && <Text fluid={false} size={14} dimmed={5}>{language}</Text>}
              {!hideCopy && (
                <Button
                  className={Action}
                  dimension="small"
                  kind="flat"
                  onClick={copyContent()}
                >
                  Copy
                </Button>
              )}
            </Stack>
          </>
        )}
      </Highlight>
    </div>
  )
}
