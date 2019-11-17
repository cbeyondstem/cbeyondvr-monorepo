import * as React from 'react'

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { Box, Container, Button, CssBaseline, Typography } from '@material-ui/core'
import { Header, HeaderLinks } from 'components/HeaderBlog'
import { Footer } from 'components/Footer'
import { Link } from 'components/Link'
import { Space } from 'components/Space'
import { MdxProps, AllMdx } from 'components/mdx/AllMdx'
import IconSvg from 'assets/img/icon.comp.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brand: {
      color: theme.typography.h1.color,
      textTransform: 'none',
      '& svg': {
        marginBottom: theme.spacing(-0.3)
      }
      // '& >svg:nth-child(3)': {
      //   fill: '#fcfcfc !important',
      //   stroke: 'transparent !important',
      //   marginLeft: '1px',
      //   marginRight: '3px'
      // }
    },
    item: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important'
    }
  })
)

export interface LayoutProps {
  children: React.ReactNode
  title: string
  location: {
    pathname: string
  }
}
export const Layout = (props: LayoutProps) => {
  // Similar to componentDidMount and componentDidUpdate:
  // React.useEffect(() => {
  //   Prism.highlightAll()
  // })
  const { children, location, title: pageTitle } = props
  const { pathname } = location
  const classes = useStyles(props)
  const theme = useTheme()
  const brand = (
    <Typography variant="body1">
      <span className={classes.brand}>
        <Space cnt={1} />
        <IconSvg viewBox="0 0 20.015 20.091" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Space cnt={1} />
        CBeyond<span style={{ color: '#ffa800' }}>S</span>
        <span style={{ color: '#1fd2ff' }}>T</span>
        <span style={{ color: '#ff007f' }}>E</span>
        <span style={{ color: '#00d400' }}>M</span>
      </span>
    </Typography>
  )

  const BrandButton = () => (
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
              <Header brand={<BrandButton />} title={title} subtitle={subtitle} parent={parent} />
              <Box p={0.5} />
              <Container className="container-fluid">{children}</Container>
            </>
          )
        }}
      </AllMdx.Consumer>

      <Footer brand={brand} />
    </>
  )
}
