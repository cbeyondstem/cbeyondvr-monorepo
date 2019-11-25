/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Box, Container, Button, CssBaseline } from '@material-ui/core'

import {
  LayoutProps,
  SEOProps,
  LinkProps,
  BrandProps,
} from '../../../types/interfaces'

import { AllMdxConsumer, MdxProps } from '../../content/AllMdx'
import { getHeader } from '../HeaderBlog'
import { Footer } from '../Footer'

export const getLayout: (
  Link: React.FunctionComponent<LinkProps>,
  SEO: React.FunctionComponent<SEOProps>,
  Brand: React.FunctionComponent<BrandProps>,
  Org: React.FunctionComponent,
  withPrefix: (p: string) => string
) => React.FunctionComponent<LayoutProps> = (
  Link,
  SEO,
  Brand,
  Org,
  withPrefix
) => {
  const Header = getHeader(Link)
  return (props: LayoutProps) => {
    const { children, location, title: pageTitle, ...seoProps } = props
    let { pathname } = location
    pathname = `/${pathname.replace(withPrefix('/'), '')}`
    // const classes = useStyles(props)
    const BrandButton = (
      <Link underline="none" to="/">
        <Button>
          <Brand type="header" />
        </Button>
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
        <AllMdxConsumer>
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
                <Header
                  brand={BrandButton}
                  title={title}
                  subtitle={subtitle}
                  parent={parent}
                />
                <Box p={0.5} />
                <Container className="container-fluid">
                  <SEO title={title} {...seoProps} />
                  {children}
                </Container>
              </>
            )
          }}
        </AllMdxConsumer>

        <Footer brand={<Brand type="footer" />} org={<Org />} />
      </>
    )
  }
}
