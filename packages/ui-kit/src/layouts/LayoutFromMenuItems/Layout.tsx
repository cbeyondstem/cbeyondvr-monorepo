/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Box, Button, CssBaseline, Container } from '@material-ui/core'

import { Header, getHeaderLinks } from '../../components/Header'
import { Footer } from '../../components/Footer'

import {
  SEOProps,
  LayoutProps,
  MenuItem,
  LinkProps,
} from '../../types/interfaces'

export const getLayout: (
  Link: React.FunctionComponent<LinkProps>,
  SEO: React.FunctionComponent<SEOProps>,
  Brand: React.FunctionComponent,
  Org: React.FunctionComponent,
  menuItems: MenuItem[],
  withPrefix: (p: string) => string
) => React.FunctionComponent<LayoutProps> = (
  Link,
  SEO,
  Brand,
  Org,
  menuItems,
  withPrefix
) => {
  const HeaderLinks = getHeaderLinks(Link, menuItems, withPrefix)
  return (props: LayoutProps) => {
    const { children, location, title: pageTitle, ...seoProps } = props
    // const { pathname } = location
    // const classes = useStyles(props)

    const BrandButton = (
      <Link underline="none" to="/">
        <Button>
          <Brand />
        </Button>
      </Link>
    )
    return (
      <>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header
          brand={BrandButton}
          rightLinks={<HeaderLinks location={location} />}
        />
        <Box p={0.5} />
        <Container className="container-fluid">
          <SEO title={pageTitle} {...seoProps} />
          {children}
        </Container>
        <Footer brand={<Brand />} org={<Org />} />
      </>
    )
  }
}
