import React, { ReactNode, useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock } from '@/components/code-block'
import { Title, Text, Separator, IdProvider, List } from '@wonderflow/react-components'
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar'
import { useRouter } from 'next/router'
import NextScript from 'next/script'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import Link from 'next/link'
import '@wonderflow/react-components/themes.css'
import '@wonderflow/react-components/core.css'
import '@/styles/app.css'
import '@/styles/shame.css'

/* eslint-disable react/display-name, react/destructuring-assignment */
const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  h1: (props: any) => <Title as="h1" level="2" {...props} />,
  h2: (props: any) => <Title as="h2" level="3" {...props} />,
  h3: (props: any) => <Title as="h3" level="4" {...props} />,
  h4: (props: any) => <Title as="h4" level="5" {...props} />,
  p: (props: any) => <Text size={22} {...props} />,
  a: (props: any) => <Link {...props}><a>{props.children}</a></Link>,
  ul: (props: any) => <List markerColor="var(--dimmed-5)" {...props}>{props.children}</List>,
  ol: (props: any) => <List as="ol" {...props}>{props.children}</List>,
  hr: Separator
}

const Providers = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>
    <ThemeProvider defaultTheme="system" disableTransitionOnChange>
      <IdProvider>
        {children}
      </IdProvider>
    </ThemeProvider>
  </MDXProvider>
)

const App = ({ Component, pageProps }: any) => {
  const router = useRouter()

  const setScrollSmooth = (value: string) => {
    document.documentElement.dataset.htmlSmooth = value
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => { setScrollSmooth('false') })
    router.events.on('routeChangeComplete', () => { setScrollSmooth('true') })
    router.events.on('routeChangeError', () => { setScrollSmooth('true') })

    return () => {
      router.events.off('routeChangeStart', () => { setScrollSmooth('false') })
      router.events.off('routeChangeComplete', () => { setScrollSmooth('true') })
      router.events.off('routeChangeError', () => { setScrollSmooth('true') })
    }
  }, [router])

  return (
    <Providers>
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextScript id="docsearch-core" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" strategy="beforeInteractive" />
      <NextNprogress
        color="var(--cta-default)"
        startPosition={0.3}
        stopDelayMs={100}
        height={2}
        showOnShallow
        options={{
          showSpinner: false
        }}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Providers>
  )
}

export default App
