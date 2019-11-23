/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Box, Container, Button, CssBaseline } from '@material-ui/core'

import { HeaderBlog as Header } from 'components/HeaderBlog'
import { Footer } from 'components/Footer'
import { Link } from 'components/Link'
import { AllMdx } from 'components/mdx/AllMdx'
import { MdxProps } from 'components/mdx/AllMdx/AllMdx'
import { SEO, SEOProps } from './Seo'

export interface LayoutProps extends SEOProps {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

export const Layout = (props: LayoutProps & { brand: React.ReactNode }) => {
  const { brand, children, location, title: pageTitle, ...seoProps } = props
  const { pathname } = location
  // const classes = useStyles(props)

  const BrandButton = (
    <Link underline="none" to="/">
      <Button>{brand}</Button>
    </Link>
  )
  // const selectAsMenuItem = (subPathList: string[]) => {
  //   if (pathname === '/') {
  //     return subPathList.length === 3
  //   }
  //   return subPathList.length === 2
  // }
  // const compareMenuItems = (firstEl: MdxProps, secondEl: MdxProps) => firstEl.uid.localeCompare(secondEl.uid)
  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AllMdx.Consumer>
        {({ mdxBySlug }) => {
          let mdx: MdxProps
          let title = pageTitle
          let subtitle
          let parent
          if (pathname in mdxBySlug) {
            mdx = mdxBySlug[pathname]
            if (mdx.parent) {
              title = mdx.parent.title
              subtitle = mdx.title
              parent = mdx.parent.slug
            } else {
              title = mdx.title
              parent = '/'
            }
          }
          return (
            <>
              {' '}
              <Header brand={BrandButton} title={title} subtitle={subtitle} parent={parent} />
              <Box p={0.5} />
              <Container className="container-fluid">
                <SEO title={title} {...seoProps} />
                {children}
              </Container>
            </>
          )
        }}
      </AllMdx.Consumer>

      <Footer brand={brand} />
    </>
  )
}
