import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from 'layouts'
import { BlogIndex } from 'views/BlogIndex'
import { Query } from 'types/gatsby-graphql-types.d.ts'

export interface BlogIndexProps {
  data: Query
  location: {
    pathname: string
  }
}
export const BlogIndexPage = (props: BlogIndexProps) => {
  const { location, data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <BlogIndex />
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
