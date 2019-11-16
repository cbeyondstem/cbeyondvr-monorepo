import * as React from 'react'
import { uid } from 'react-uid'
// import DeleteIcon from '@material-ui/icons/Delete'
// import IconButton from '@material-ui/core/IconButton'

// @material-ui/core components
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { List, ListItem, Button, IconButton } from '@material-ui/core'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight'
import { Link } from 'components/Link'
import { AllMdx, MdxProps } from 'components/mdx/AllMdx'

// style
import styles from './headerLinksStyle'

const svg = () =>
  createStyles({
    svg: {
      width: '20px',
      height: '20px'
    }
  })
const useStyles = makeStyles((theme: Theme) => ({
  ...styles(theme),
  ...svg()
}))

export interface HeaderLinksProps {
  path: string
  select: (subPathList: string[]) => boolean
  sortCompare: (firstEl: MdxProps, secondEl: MdxProps) => number
}
export const HeaderLinks = (props: HeaderLinksProps) => {
  const classes = useStyles(props)
  const { path, select, sortCompare } = props
  let parent = path === '/' ? '' : '/'
  return (
    <AllMdx.Consumer>
      {({ mdxList }) => {
        let selected: MdxProps[] = []
        const nodes = mdxList.filter(m => m.slug === path)
        if (nodes.length !== 0) {
          selected.push(...nodes[0].children)
          parent = nodes[0].parent ? nodes[0].parent.slug : parent
        } else {
          selected = mdxList.filter(mdx => {
            if (!mdx.route) {
              return false
            }
            if (mdx.category === 'pages') {
              return false
            }
            if (mdx.slug === path) {
              // this is not a sub-path - is not added to current menu
              return false
            }
            if (mdx.slug.search(path) !== 0) {
              // this is not a sub-path - is not added to current menu
              return false
            }
            const subPaths = mdx.slug.replace(`${path}`, '').split('/')
            if (!select(subPaths)) {
              return false
            }
            return true
          })
        }
        if (selected.length > 0) {
          selected.sort(sortCompare)
        }
        return (
          <List className={classes.list}>
            {parent === '' ? null : (
              <ListItem className={classes.listItem}>
                <Link to={parent}>
                  <IconButton className={classes.navLink} size="medium" color="inherit" aria-label="directory up">
                    <SubdirectoryArrowRightIcon className={classes.svg} transform="rotate(-90)" />
                  </IconButton>
                </Link>
              </ListItem>
            )}
            {selected.map((mdx, idx) => {
              return (
                <ListItem key={uid(mdx, idx)} className={classes.listItem}>
                  <Link to={mdx.slug}>
                    <Button className={classes.navLink}>{mdx.title}</Button>
                  </Link>{' '}
                </ListItem>
              )
            })}
          </List>
        )
      }}
    </AllMdx.Consumer>
  )
}
