/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { AllMdxQueryProvider } from '../gatsby/gatsby-gql/AllMdxQueryProvider'
import { AllSvgQueryProvider } from '../gatsby/gatsby-gql/AllSvgQueryProvider'
import { AllImgQueryProvider } from '../gatsby/gatsby-gql/AllImgQueryProvider'

import { SiteConfigQueryProvider } from '../gatsby/gatsby-gql/SiteConfigQueryProvider'
import theme from './theme'

// custom typefaces
// import 'typeface-michroma'
import '@cbeyond/ui-kit/dist/assets/prismjs/prism_clear.css'
import '@cbeyond/ui-kit/dist/assets/carousel/image-gallery.css'

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
          <AllSvgQueryProvider>
            <AllImgQueryProvider>{children}</AllImgQueryProvider>
          </AllSvgQueryProvider>
        </AllMdxQueryProvider>
      </SiteConfigQueryProvider>
    </ThemeProvider>
  )
}
