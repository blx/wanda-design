import React, { ReactNode, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock } from '@/components/code-block'
import { Title, Text } from '@wonderflow/react-components'
import { useRouter } from 'next/router'
import NextScript from 'next/script'

import Link from 'next/link'
import '@wonderflow/react-components/themes/dark.css'
import '@wonderflow/react-components/core.css'
import './app.css'
import './shame.css'

/* eslint-disable react/display-name, react/destructuring-assignment */
const components = {
  code: CodeBlock,
  h1: (props: any) => <Title as="h1" level="2" {...props} />,
  h2: (props: any) => <Title as="h2" level="3" {...props} />,
  h3: (props: any) => <Title as="h3" level="4" {...props} />,
  h4: (props: any) => <Title as="h4" level="5" {...props} />,
  p: (props: any) => <Text size={22} {...props} />,
  a: (props: any) => <Link {...props}><a>{props.children}</a></Link>
}

const Providers = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
)

const App = ({ Component, pageProps }: any) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => { document.documentElement.dataset.htmlSmooth = 'false' })
    router.events.on('routeChangeComplete', () => { document.documentElement.dataset.htmlSmooth = 'true' })

    return () => {
      router.events.off('routeChangeStart', () => { document.documentElement.dataset.htmlSmooth = 'false' })
      router.events.off('routeChangeComplete', () => { document.documentElement.dataset.htmlSmooth = 'true' })
    }
  }, [router])

  return (
    <Providers>
      <NextScript src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
