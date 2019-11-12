/* eslint-disable react/no-danger */
import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, SEO } from 'layouts'
import { BlogIndex } from 'views/BlogIndex'

export const BlogIndexPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <BlogIndex data={data} Link={Link} />
    </Layout>
  )
}

BlogIndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
