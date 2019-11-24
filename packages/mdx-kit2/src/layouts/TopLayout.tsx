import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { AllMdxQueryProvider } from '../gatsby-gql/AllMdxQueryProvider'
import { AllSvgQueryProvider } from '../gatsby-gql/AllSvgQueryProvider'
import { SiteConfigQueryProvider } from '../gatsby-gql/SiteConfigQueryProvider'
import theme from './theme'

// custom typefaces
import 'typeface-roboto'
import '@cbeyond/mdx-kit/src/assets/prismjs/prism_clear.css'

// import 'prismjs/plugins/command-line/prism-command-line.css'
// import 'prismjs/plugins/toolbar/prism-toolbar'
// import 'prismjs/plugins/show-language/prism-show-language'
// import 'prismjs/plugins/line-numbers/prism-line-numbers'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// essentially all providers that must persist have to go there

export interface TopLayoutProps {
  children: React.ReactNode
}

export const TopLayout = (props: TopLayoutProps) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <SiteConfigQueryProvider>
        <AllMdxQueryProvider>
          <AllSvgQueryProvider>{children}</AllSvgQueryProvider>
        </AllMdxQueryProvider>
      </SiteConfigQueryProvider>
    </ThemeProvider>
  )
}
