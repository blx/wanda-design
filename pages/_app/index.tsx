import React, { ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock } from '@/components/code-block'
import { Title } from '@wonderflow/react-components'

import '@wonderflow/react-components/themes/light.css'
import '@wonderflow/react-components/core.css'
import './app.css'

/* eslint-disable react/display-name */
const components = {
  code: CodeBlock,
  h1: (props: any) => <Title as="h1" level="2" {...props} />,
  h2: (props: any) => <Title as="h2" level="3" {...props} />,
  h3: (props: any) => <Title as="h3" level="4" {...props} />,
  h4: (props: any) => <Title as="h4" level="5" {...props} />
}

const Providers = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
)

const App = ({ Component, pageProps }: any) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
