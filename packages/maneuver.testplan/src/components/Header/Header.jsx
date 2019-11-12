import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
// @material-ui/icons
import { Menu } from '@material-ui/icons'
// core components
import styles from './headerStyle'

const useStyles = makeStyles(styles)

export function Header(props) {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const { rightLinks, leftLinks, brand } = props
  const appBarClasses = classNames({
    [classes.appBar1]: true
    // [classes[color]]: color,
  })
  return (
    <AppBar position="sticky" variant="dense" className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brand : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brand
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

Header.defaultProp = {
  color: 'dark'
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark'])
      .isRequired
  })
}
