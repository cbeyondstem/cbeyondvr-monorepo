/* eslint-disable react/no-danger */
import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, SEO } from 'layouts'
import { BlogIndex } from 'views/BlogIndex'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const MyTypo = (el, bookmarkIdx = '') => p => {
  const { children, ...others } = p
  // console.log(`Generating element ${el}`)
  console.log(`${el} ${children}`)
  if (el === 'pre') {
    return <pre {...others}>{children}</pre>
  }
  if (el === 'code') {
    return <code {...others}>{children}</code>
  }
  if (el === 'span') {
    return <span {...others}>{children}</span>
  }
  return null
}

export const MdxTest = props => {
  const { data, Link } = props
  const { node } = data.allMdx.edges[0]
  return (
    <>
      <MDXProvider
        components={{
          pre: MyTypo('pre'),
          code: MyTypo('code'),
          span: MyTypo('span')
        }}
      >
        <MDXRenderer>{node.body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

MdxTest.propTypes = {
  Link: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired
}

export const BlogIndexPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <MdxTest data={data} Link={Link} />
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
          body
        }
      }
    }
  }
`
