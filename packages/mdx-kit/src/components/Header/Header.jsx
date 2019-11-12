import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, Drawer, Divider, Toolbar, AppBar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import headerStyle from './headerStyle'
import headerLinksStyle from './headerLinksStyle'

const useStyles = makeStyles(theme => ({
  colors: {
    color: `${theme.typography.h1.color}`,
    backgroundColor: `${theme.palette.primary.main} !important`,
    '& span': {
      color: `${theme.typography.h1.color}`
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  ...headerStyle(theme),
  ...headerLinksStyle(theme)
}))

export function Header(props) {
  const classes = useStyles(props)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const { rightLinks, leftLinks, brand } = props
  return (
    <AppBar position="sticky" variant="dense" className={classNames(classes.appBar, classes.colors)}>
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
            paper: classNames(classes.drawerPaper, classes.colors)
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <div className={classes.listItem}>
              <IconButton
                className={classes.navLink}
                size="medium"
                color="inherit"
                aria-label="close drawer"
                onClick={handleDrawerToggle}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

Header.defaultProps = {
  rightLinks: null,
  leftLinks: null
}

Header.propTypes = {
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.node.isRequired
}
