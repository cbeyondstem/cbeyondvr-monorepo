/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { SiteConfig } from 'components/SiteConfig'
import { ImgProvider } from 'components/ImgProvider'
import theme from './theme'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// essentially all providers that must persist have to go there
export function TopLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      <SiteConfig.Provider>
        <ImgProvider.Provider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ImgProvider.Provider>
      </SiteConfig.Provider>
    </ThemeProvider>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
