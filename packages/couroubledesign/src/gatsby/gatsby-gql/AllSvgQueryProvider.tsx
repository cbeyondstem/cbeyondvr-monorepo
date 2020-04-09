import * as React from 'react'
import * as _ from 'lodash'
import { graphql, StaticQuery } from 'gatsby'
import { SvgProviderProps, allSvgQueryRender } from '@cbeyond/ui-kit'
import { imageInfoDict } from '../../../tools/image-list'

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

  const svgTitleByPath: { [path: string]: { title?: string; caption?: string } } = {}
  _.forIn(imageInfoDict, (imgDict, category) => {
    const onlySvg = Object.keys(imgDict).filter(img => img.search('.svg') > -1)
    onlySvg.forEach((svg: string) => {
      const svgInfo = _.get(imgDict, svg, undefined)
      svgTitleByPath[`${category}/${svg}`] = {
        title: _.get(svgInfo, 'title', undefined),
        caption: _.get(svgInfo, 'location.address', undefined)
      }
    })
  })
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
      render={allSvgQueryRender(children, svgTitleByPath)}
    />
  )
}
