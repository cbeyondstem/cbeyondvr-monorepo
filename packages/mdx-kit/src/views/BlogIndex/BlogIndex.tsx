/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import * as React from 'react'
import { uid } from 'react-uid'
import { Typography, List, ListItem, ListItemText, Theme, makeStyles, createStyles } from '@material-ui/core'
import { Link } from '../../components/Link'
import { AllMdx } from '../../components/mdx/AllMdx'
import { MdxProps } from '../../components/mdx/AllMdx/AllMdx'

const caretRight = '"\\25B8"'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4),
      '& a:before': {
        content: caretRight,
        paddingRight: '8px',
        color: theme.palette.primary.light
      }
    }
  })
)
export const BlogIndex = () => {
  const classes = useStyles({})
  return (
    <List className={classes.root}>
      <AllMdx.Consumer>
        {({ mdxList }) => (
          <>
            {mdxList.map((m: MdxProps, idx: number) => {
              if (m.category !== 'blog') {
                return null
              }
              if (!m.route) {
                return null
              }
              if (m.parent) {
                // list only the top-level blogs in the index
                return null
              }
              return (
                <div key={uid(m, idx)}>
                  <ListItem key={uid(m, idx)}>
                    <ListItemText
                      primary={
                        <h3>
                          <Link to={m.slug} style={{ boxShadow: `none` }}>
                            {m.title}
                          </Link>
                        </h3>
                      }
                      secondary={
                        <Typography variant="body1">
                          {/* {m.frontmatter.date}
                          <br /> */}
                          {m.excerpt}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {m.children.map((c: MdxProps, cidx: number) => (
                    <ListItem key={uid(c, cidx)} className={classes.nested}>
                      <ListItemText
                        primary={
                          <h4>
                            <Link to={c.slug} style={{ boxShadow: `none` }}>
                              {c.title}
                            </Link>
                          </h4>
                        }
                        secondary={<Typography variant="body1">{c.excerpt}</Typography>}
                      />
                    </ListItem>
                  ))}
                </div>
              )
            })}
          </>
        )}
      </AllMdx.Consumer>
    </List>
  )
}
