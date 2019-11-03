import React from 'react'
import PropTypes from 'prop-types'

// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'

// @material-ui/icons

// core components and styles
import {
  Header,
  GridContainer
  // GridItem,
  // Button
  // Parallax
} from '@creative/material-kit'

// styles
import { landingPageStyles } from 'assets'

import { HeaderLinks } from 'components/Header/HeaderLinks'
import { Footer } from 'components/Footer/Footer'
import BrandSvg from 'assets/img/dmg-brand.comp.svg'
import { Link } from '@cbeyond/ui-kit'

const dashboardRoutes = []

const useStyles = makeStyles(landingPageStyles)
export const Layout = props => {
  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   Prism.highlightAll()
  // })
  const classes = useStyles()
  const { children } = props
  const Brand = () => (
    <Link to="/">
      <Button>
        <BrandSvg style={{ fill: '#FFF', stroke: '#FFF' }} viewBox="0 0 253.19 15.663" width="250" height="15" />
      </Button>
    </Link>
  )
  return (
    <>
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand={<Brand />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <Toolbar />
      <div className={classes.container}>
        <GridContainer>{children}</GridContainer>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} />
      </div>
      <Footer />
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
