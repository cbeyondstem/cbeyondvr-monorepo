import * as React from 'react'
import { uid } from 'react-uid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { MdxProps } from 'components/mdx/AllMdx/AllMdx'
import { List, ListItem, Typography } from '@material-ui/core'
import { Link } from 'components/Link'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}))

export const Toc: (m: MdxProps) => React.FunctionComponent<React.ComponentPropsWithRef<'ul'>> = (
  m: MdxProps
) => props => {
  const theme = useTheme()
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="h5">
      <List {...props}>
        {m.children.map((c: MdxProps, idx: number) => (
          <ListItem key={uid(c, idx)}>
            <Link to={c.slug} color={theme.typography.h1.color}>
              {c.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Typography>
  )
}
