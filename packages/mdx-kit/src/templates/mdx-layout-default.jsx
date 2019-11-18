import PropTypes from 'prop-types'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Typography, Box, Paper } from '@material-ui/core'

import { useTheme, makeStyles } from '@material-ui/core/styles'

import { MDXLayoutComponents, MDXGlobalComponents } from 'components/mdx'
import { AllMdx } from 'components/mdx/AllMdx'
import { Layout } from 'layouts'
import { SiteConfig } from 'components/SiteConfig'
import { Svg } from 'components/mdx/Svg'

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
  const { location, uri, children } = props
  const theme = useTheme(props)
  const classes = useStyles(props)
  return (
    <AllMdx.Consumer>
      {({ mdxList }) => {
        const nodes = mdxList.filter(m => m.slug === uri)
        if (nodes.length === 0) {
          return null
        }
        const { title } = nodes[0]
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
                  ...MDXLayoutComponents,
                  ...MDXGlobalComponents(nodes[0])
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
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    frontmatter: FrontmatterType.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default BlogPostTemplate
