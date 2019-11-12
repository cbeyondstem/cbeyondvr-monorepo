import React from 'react'
import { uid } from 'react-uid'
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Button } from '@material-ui/core'
import { Link } from 'components/Link'
import { AllMdx } from 'components/mdx/AllMdx'

// style
import styles from './headerLinksStyle'

const useStyles = makeStyles(styles)

export function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <AllMdx.Consumer>
      {({ mdxList }) => (
        <List className={classes.list}>
          {mdxList.map((mdx, idx) => {
            if (!mdx.route) {
              return null
            }
            if (mdx.category === 'pages') {
              return null
            }
            return (
              <ListItem key={uid(mdx, idx)} className={classes.listItem}>
                <Link to={mdx.slug}>
                  <Button target="_blank" className={classes.navLink}>
                    {mdx.title}
                  </Button>
                </Link>{' '}
              </ListItem>
            )
          })}
        </List>
      )}
    </AllMdx.Consumer>
  )
}
