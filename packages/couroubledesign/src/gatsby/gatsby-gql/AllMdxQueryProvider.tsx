import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { MdxProviderProps, allMdxQueryRender } from '@cbeyond/ui-kit'

export const query = graphql`
  fragment MdxInfo on MdxEdge {
    node {
      id
      fileAbsolutePath
      excerpt(pruneLength: 160)
      fields {
        slug
        uid
        route
        category
        sourceInstanceName
        relativePath
      }
      frontmatter {
        title
        date
      }
    }
  }
`

export const AllMdxQueryProvider: React.FunctionComponent<MdxProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(sort: { fields: [fields___uid], order: ASC }) {
            edges {
              ...MdxInfo
            }
          }
        }
      `}
      render={allMdxQueryRender(children)}
    />
  )
}
