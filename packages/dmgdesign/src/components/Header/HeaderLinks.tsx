import * as React from 'react'

// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Button } from '@material-ui/core'
import { Link } from '@cbeyond/mdx-kit/src/components/Link'

// style
import styles from '@cbeyond/mdx-kit/src/components/Header/headerLinksStyle'

const useStyles = makeStyles((theme: Theme) => ({
  ...styles(theme)
}))

export const HeaderLinks = (props: React.ComponentPropsWithRef<'div'>) => {
  const classes = useStyles(props)
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/about">
          <Button className={classes.navLink}>ABOUT</Button>
        </Link>{' '}
        <Link to="/architecture">
          <Button className={classes.navLink}>ARCHITECTURE</Button>
        </Link>
        <Link to="/interiors">
          <Button className={classes.navLink}>INTERIORS</Button>
        </Link>
        <Link to="/furniture">
          <Button className={classes.navLink}>FURNITURE/LIGHTS</Button>
        </Link>
        <Link to="/contact">
          <Button className={classes.navLink}>CONTACT</Button>
        </Link>{' '}
      </ListItem>
    </List>
  )
}
