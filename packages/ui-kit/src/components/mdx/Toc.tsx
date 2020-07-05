/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { uid } from 'react-uid'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, Typography } from '@material-ui/core'
import { Link } from '../ui/Link'
import { MdxProps } from '../providers/AllMdx'

const caretRight = '"\\25B8"'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: theme.typography.h1.color,
    '& li': {
      '&:before': {
        content: caretRight,
        paddingRight: '8px',
        color: theme.palette.primary.light,
      },
    },
  },
}))

export const Toc: (
  m: MdxProps
) => React.FunctionComponent<React.ComponentPropsWithRef<'ul'>> = (
  m: MdxProps
) => props => {
  const classes = useStyles(props)
  return (
    <Typography variant="h5">
      <List {...props} className={classes.root}>
        {m.children.map((c: MdxProps, idx: number) => (
          <ListItem key={uid(c, idx)}>
            <Link to={c.slug}>{c.title}</Link>
          </ListItem>
        ))}
      </List>
    </Typography>
  )
}
