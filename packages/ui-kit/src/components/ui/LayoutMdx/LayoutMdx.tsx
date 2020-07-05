import * as React from 'react'
import { Typography, Box, Paper } from '@material-ui/core'
import { withPrefix } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import { LayoutProps } from '../../../types/interfaces'
import {
  MDXLayoutComponents,
  MDXGlobalComponents,
  mdxLayoutStyles,
} from '../../mdx'

import { AllMdxConsumer } from '../../providers/AllMdx'

const useStyles = makeStyles({
  paper: {
    '& svg:': {
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#000',
    },
  },
})

export interface LayoutMdxProps extends LayoutProps {
  pageContext: {
    frontmatter: { title?: string; date?: string }
  }
}

export const getLayoutMdx: (
  Layout: React.FunctionComponent<LayoutProps>
) => React.FunctionComponent<LayoutMdxProps> = Layout => props => {
  const { location, children } = props
  let { pathname } = location
  const theme = useTheme()
  const classes = useStyles(props)
  const mdxClasses = mdxLayoutStyles(props)

  pathname = `/${pathname.replace(withPrefix('/'), '')}`
  return (
    <AllMdxConsumer>
      {({ mdxBySlug }) => {
        if (!(pathname in mdxBySlug)) {
          return null
        }
        const mdx = mdxBySlug[pathname]
        const { title } = mdx
        return (
          <Layout location={location} title={title}>
            <Paper className={classes.paper}>
              {title ? (
                <>
                  <Typography
                    variant="h3"
                    style={{
                      color: theme.palette.primary.contrastText,
                      // backgroundColor: theme.palette.primary.dark,
                      overflowWrap: 'break-word',
                      textAlign: 'center',
                      paddingTop: `${theme.spacing(4)}px`,
                      paddingBottom: `${theme.spacing(2)}px`,
                    }}
                  >
                    {title}
                  </Typography>
                  <Box p={1} />
                </>
              ) : null}
              <MDXProvider
                components={{
                  ...MDXLayoutComponents(mdxClasses),
                  ...MDXGlobalComponents(mdx),
                }}
              >
                {children}
              </MDXProvider>
            </Paper>
          </Layout>
        )
      }}
    </AllMdxConsumer>
  )
}
