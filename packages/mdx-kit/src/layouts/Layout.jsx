import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// nodejs library that concatenates classes
// import classNames from 'classnames'
// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles'
// import { Toolbar } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box, Container, Button, CssBaseline } from '@material-ui/core'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Link } from 'components/Link'
import { Space } from 'components/Space'

import { HeaderLinks } from 'components/Header/HeaderLinks'

import IconSvg from 'assets/img/icon.comp.svg'
import { gatsbyHighlight, gatsbyHighlightLanguageBadges } from 'assets/prismjs'
// coy dark funky okaidia solarizedlight tomorrow twilight
// import 'prismjs/themes/prism-solarizedlight.css'
import 'assets/prismjs/prism_clear.css'
// import 'prismjs/plugins/command-line/prism-command-line.css'
// import 'prismjs/plugins/toolbar/prism-toolbar'
// import 'prismjs/plugins/show-language/prism-show-language'
// import 'prismjs/plugins/line-numbers/prism-line-numbers'

const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
}

const useStyles = makeStyles(theme => {
  const gh = gatsbyHighlight(theme)
  const gl = gatsbyHighlightLanguageBadges(theme)

  return {
    global: {
      '@global': {
        ...gh,
        ...gl,
        '*::-webkit-scrollbar': {
          width: theme.spacing(1),
          height: theme.spacing(1)
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.secondary.dark,
          outline: '1px solid slategrey'
        },
        containerKeep: {
          ...containerFluid,
          '@media (min-width: 576px)': {
            maxWidth: '540px'
          },
          '@media (min-width: 768px)': {
            maxWidth: '720px'
          },
          '@media (min-width: 992px)': {
            maxWidth: '960px'
          },
          '@media (min-width: 1200px)': {
            maxWidth: '1140px'
          }
        }
      }
    },
    brand: {
      flexGrow: 1,
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
  }
})

export const Layout = props => {
  // Similar to componentDidMount and componentDidUpdate:
  // React.useEffect(() => {
  //   Prism.highlightAll()
  // })
  const { children } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const brand = (
    <span className={classes.brand}>
      <Space cnt={1} />
      <IconSvg viewBox="0 0 20.015 20.091" width={theme.spacing(4)} height={theme.spacing(4)} />
      <Space cnt={1} />
      CBeyond<span style={{ color: '#ffa800' }}>S</span>
      <span style={{ color: '#1fd2ff' }}>T</span>
      <span style={{ color: '#ff007f' }}>E</span>
      <span style={{ color: '#00d400' }}>M</span>
    </span>
  )

  const BrandButton = () => (
    <Link to="/">
      <Button>{brand}</Button>
    </Link>
  )
  return (
    <div className={classes.global}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header color="light" brand={<BrandButton />} rightLinks={<HeaderLinks color="#fff" />} sticky />
      <Box p={0.5} />
      <Container>{children}</Container>
      <Footer brand={brand} />
    </div>
  )
}
Layout.propTypes = {
  // title: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}
