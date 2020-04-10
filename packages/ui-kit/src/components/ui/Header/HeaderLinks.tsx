import * as React from 'react'
import { uid } from 'react-uid'
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

// @material-ui/core components
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { List, ListItem, Button, IconButton } from '@material-ui/core'
import { LinkProps, HeaderLinkProps, MenuItem } from '../../../types/interfaces'
// style
import styles from './headerLinksStyle'

const svg = () =>
  createStyles({
    svg: {
      width: '20px',
      height: '20px',
    },
  })

const useStyles = makeStyles((theme: Theme) => ({
  ...styles(theme),
  ...svg(),
}))

export const getHeaderLinks: (
  Link: React.FunctionComponent<LinkProps>,
  menuItems: MenuItem[],
  withPrefix: (p: string) => string
) => React.FunctionComponent<HeaderLinkProps> = (
  Link,
  menuItems,
  withPrefix
) => (props: HeaderLinkProps) => {
  const classes = useStyles(props)
  const { onClick } = props
  // const { location } = props
  // let { pathname } = location
  // pathname = `/${pathname.replace(withPrefix('/'), '')}`
  // let parent = pathname === '/' ? '' : '/'
  return (
    <List className={classes.list}>
      {menuItems.map((m, idx) =>
        m.Icon ? (
          <ListItem key={uid(m, idx)} className={classes.listItem}>
            <Link to={m.path}>
              {m.name ? (
                <Button
                  className={classes.navLink}
                  startIcon={React.createElement(m.Icon)}
                  aria-label={m.name}
                  onClick={onClick}
                >
                  {m.name}
                </Button>
              ) : (
                <IconButton
                  className={classes.navLink}
                  size="medium"
                  color="inherit"
                  aria-label={m.name}
                  onClick={onClick}
                >
                  {React.createElement(m.Icon)}
                </IconButton>
              )}
            </Link>
          </ListItem>
        ) : (
          <ListItem key={uid(m, idx)} className={classes.listItem}>
            <Link to={m.path}>
              <Button
                className={classes.navLink}
                aria-label={m.name}
                onClick={onClick}
              >
                {m.name}
              </Button>
            </Link>{' '}
          </ListItem>
        )
      )}
    </List>
  )
}
