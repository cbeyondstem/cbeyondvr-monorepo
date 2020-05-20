import * as React from 'react'
import * as _ from 'lodash'

import { graphql, useStaticQuery } from 'gatsby'

import { useAllSvgService } from '@cbeyond/ui-kit'
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

export function useAllSvgQuery() {
  const [ready, setReady] = React.useState(false)
  const [svgByPath, setQueryResult] = useAllSvgService()

  const doFetch = React.useCallback(() => {
    const data = useStaticQuery(graphql`
      query {
        allSvg {
          edges {
            ...SvgInfo
          }
        }
      }
    `)
    setReady(true)
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
    setQueryResult(data, svgTitleByPath)
  }, [])

  React.useEffect(() => {
    if (!ready) {
      doFetch()
    }
  }, [ready])

  return [svgByPath]
}
