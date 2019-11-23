import PropTypes from 'prop-types'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Typography, Box, Paper } from '@material-ui/core'
import { withPrefix } from 'gatsby'

import { useTheme, makeStyles } from '@material-ui/core/styles'

import { MDXLayoutComponents, MDXGlobalComponents, mdxLayoutStyles } from 'components/mdx'
import { Layout } from '../layouts'
import { AllMdx } from '../components/mdx/AllMdx/AllMdx'

const useStyles = makeStyles({
  paper: {
    '& svg:': {
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#000'
    }
  }
})

const BlogPostTemplate = props => {
  const { location, children } = props
  let { pathname } = location
  const theme = useTheme(props)
  const classes = useStyles(props)
  const mdxClasses = mdxLayoutStyles(props)
  pathname = `/${pathname.replace(withPrefix('/'), '')}`
  return (
    <AllMdx.Consumer>
      {({ mdxBySlug }) => {
        if (!(pathname in mdxBySlug)) {
          return null
        }
        const mdx = mdxBySlug[pathname]
        const { title } = mdx
        return (
          <Layout location={location} title={title}>
            <Paper className={classes.paper}>
              <Typography
                variant="h3"
                style={{
                  color: theme.palette.primary.main,
                  overflowWrap: 'break-word'
                }}
              >
                {title}
              </Typography>
              <Box p={1} />
              <MDXProvider
                components={{
                  ...MDXLayoutComponents(mdxClasses),
                  ...MDXGlobalComponents(mdx)
                }}
              >
                {children}
              </MDXProvider>
            </Paper>
          </Layout>
        )
      }}
    </AllMdx.Consumer>
  )
}

const FrontmatterType = PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string
})

BlogPostTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: FrontmatterType.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default BlogPostTemplate
