import React from 'react'
import PropTypes from 'prop-types'

// nodejs library that concatenates classes
// import classNames from 'classnames'
// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles'
// import { Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

// core components and styles
import {
  Header
  // GridContainer
  // GridItem,
  // Button
  // Parallax
} from '@creative/material-kit'

import { HeaderLinks } from 'components/Header/HeaderLinks'
import { Footer } from 'components/Footer/Footer'
import BrandSvg from 'assets/img/dmg-brand.comp.svg'
import { Link } from '@cbeyond/ui-kit'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  brand: {
    fill: '#fcfcfc !important',
    stroke: 'transparent !important',
    marginLeft: '1px',
    marginRight: '3px'
  }
})

export const Layout = props => {
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   Prism.highlightAll()
  // })
  const { children } = props
  const classes = useStyles(props)

  const Brand = () => (
    <Link to="/">
      <Button>
        <BrandSvg className={classes.brand} viewBox="0 0 253.19 15.663" width="200" height="12" />
      </Button>
    </Link>
  )
  return (
    <>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header color="dark" brand={<Brand />} rightLinks={<HeaderLinks />} sticky />
      <Box p={0.5} />
      <Grid container justify="center" width={1} direction="column" alignItems="center">
        <Grid container item md>
          {children}
        </Grid>
        <Grid container item md>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}
Layout.propTypes = {
  // title: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}
