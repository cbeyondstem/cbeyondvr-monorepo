import * as React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Hidden, Drawer, Toolbar, AppBar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { PageProps, HeaderLinkProps } from '../../../types/interfaces'
import headerStyle from './headerStyle'
import headerLinksStyle from './headerLinksStyle'

const colors = (theme: Theme) => {
  const color = theme.palette.primary.main
  // theme.palette.type === 'light'
  //   ? theme.palette.primary.light
  //   : theme.palette.primary.dark
  return createStyles({
    colors: {
      color: theme.typography.h1.color,
      backgroundColor: `${color} !important`,
      '& span': {
        color: theme.typography.h1.color,
      },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
  })
}
const useStyles = makeStyles((theme: Theme) => ({
  ...colors(theme),
  ...headerStyle(theme),
  ...headerLinksStyle(theme),
}))

export interface HeaderProps extends PageProps {
  RightLinks?: React.FunctionComponent<HeaderLinkProps>
  LeftLinks?: React.FunctionComponent<HeaderLinkProps>
  brand: React.ReactNode
  prolog?: React.ReactNode
}
export const Header = (props: HeaderProps) => {
  const classes = useStyles(props)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const { RightLinks, LeftLinks, brand, prolog, location } = props
  return (
    <>
      {prolog}
      <AppBar
        position="sticky"
        className={classNames(classes.appBar, classes.colors)}
      >
        <Toolbar className={classes.container} variant="dense" disableGutters>
          {LeftLinks ? brand : null}
          <div className={classes.flex}>
            {LeftLinks ? (
              <Hidden smDown implementation="css">
                <LeftLinks location={location} />
              </Hidden>
            ) : (
              brand
            )}
          </div>
          <Hidden smDown implementation="css">
            {RightLinks ? <RightLinks location={location} /> : null}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
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
              paper: classNames(classes.drawerPaper, classes.colors),
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
              {LeftLinks ? (
                <LeftLinks location={location} onClick={handleDrawerToggle} />
              ) : null}
              {RightLinks ? (
                <RightLinks location={location} onClick={handleDrawerToggle} />
              ) : null}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    </>
  )
}
