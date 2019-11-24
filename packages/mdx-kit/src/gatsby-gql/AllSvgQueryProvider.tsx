import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { SvgProviderProps, allSvgQueryRender } from '../components/AllSvg'

export const query = graphql`
  fragment SvgInfo on svgEdge {
    node {
      content
      path
      sourceInstanceName
      id
    }
  }
`

export const AllSvgQueryProvider: React.FunctionComponent<SvgProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          allSvg {
            edges {
              ...SvgInfo
            }
          }
        }
      `}
      render={allSvgQueryRender(children)}
    />
  )
}
