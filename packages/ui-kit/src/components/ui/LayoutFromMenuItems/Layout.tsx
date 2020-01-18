/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Box, Button, CssBaseline, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Header, getHeaderLinks } from '../Header'
import { Footer } from '../Footer'

import {
  SEOProps,
  LayoutProps,
  MenuItem,
  LinkProps,
  BrandProps,
} from '../../../types/interfaces'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100vw !important',
  },
}))

export const getLayout: (
  Link: React.FunctionComponent<LinkProps>,
  SEO: React.FunctionComponent<SEOProps>,
  Brand: React.FunctionComponent<BrandProps>,
  Org: React.FunctionComponent,
  menuItems: MenuItem[],
  withPrefix: (p: string) => string,
  Prolog?: React.FunctionComponent
) => React.FunctionComponent<LayoutProps> = (
  Link,
  SEO,
  Brand,
  Org,
  menuItems,
  withPrefix,
  Prolog
) => {
  const HeaderLinks = getHeaderLinks(Link, menuItems, withPrefix)
  return (props: LayoutProps) => {
    const classes = useStyles(props)
    const { children, location, title: pageTitle, ...seoProps } = props
    // const { pathname } = location

    const BrandButton = (
      <Link underline="none" to="/">
        <Button>
          <Brand type="header" />
        </Button>
      </Link>
    )
    return (
      <>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header
          brand={BrandButton}
          prolog={Prolog ? <Prolog /> : null}
          rightLinks={<HeaderLinks location={location} />}
        />
        <Box p={0.5} />
        <Container className="container-fluid">
          <SEO title={pageTitle} {...seoProps} />
          {children}
        </Container>
        <Footer brand={<Brand type="footer" />} org={<Org />} />
      </>
    )
  }
}
