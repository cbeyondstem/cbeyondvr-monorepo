/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import { ThemeProvider, Theme } from '@material-ui/core/styles'
// import { AllMdx, AllSvg, SiteConfig } from '@cbeyond/mdx-kit/src'

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

export const getTopLayout = (theme: Theme) => (props: TopLayoutProps) => {
  const { children } = props
  return children
  // <AllSvg.Provider>{children}</AllSvg.Provider>
  // <ThemeProvider theme={theme}>
  //   <SiteConfig.Provider>
  //     <AllMdx.Provider>
  //     </AllMdx.Provider>
  //   </SiteConfig.Provider>
  // </ThemeProvider>
}
