/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { AllMdx } from 'components/mdx/AllMdx'
import { AllSvg } from 'components/mdx/AllSvg'
import { SiteConfig } from 'components/SiteConfig'
import theme from './theme'

// custom typefaces
import 'typeface-roboto'
import 'assets/prismjs/prism_clear.css'

// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/plugins/command-line/prism-command-line.css'
// import 'prismjs/plugins/toolbar/prism-toolbar'
// import 'prismjs/plugins/show-language/prism-show-language'
// import 'prismjs/plugins/line-numbers/prism-line-numbers'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// essentially all providers that must persist have to go there
export function TopLayout(props) {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <SiteConfig.Provider>
        <AllMdx.Provider>
          <AllSvg.Provider>{children}</AllSvg.Provider>
        </AllMdx.Provider>
      </SiteConfig.Provider>
    </ThemeProvider>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired
}
