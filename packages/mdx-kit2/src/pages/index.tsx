import * as React from 'react'
import { graphql } from 'gatsby'

import { BlogIndex } from '@cbeyond/mdx-kit/src'
import { Layout } from '../layouts'
import { Query } from '../types/gatsby-graphql-types'

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
    <Layout location={location} title={siteTitle} keywords={[`blog`, `gatsby`, `mdx`]}>
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
