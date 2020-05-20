import * as _ from 'lodash'
import * as React from 'react'
import { parse as svgParse, HASTElementProps } from 'svg-parser'

import { BehaviorSubject } from 'rxjs'
import { FileEdge, Query } from '../types/gatsby-graphql-types'
import { SvgProps } from '../components/content/AllSvg'
import { hastParse } from './svgHast'

/**
 * Use RxJS to push svg html AST changes to UI
 *
 * The BehaviorSubject stores the more recent, last emitted value...
 * We also use `useObservable(service.name$)` hook to watch
 * for new 'name' values
 *
 * BTW - this is called a 'push-based' API
 */

// export interface SvgProps {
//   id: string
//   path: string
//   sourceInstanceName: string
//   viewBox: string
//   title?: string
//   caption?: string
//   Svg: (p: React.SVGProps<SVGSVGElement>) => JSX.Element
//   content: string
//   hastElems: React.ReactNode[]
// }
export type SvgByPath = {
  [path: string]: SvgProps
}
export type SvgTitleByPath = {
  [path: string]: { title?: string; caption?: string }
}

export class AllSvgClass {
  private svgByPath = new BehaviorSubject<SvgByPath>({})

  public svgByPath$ = this.svgByPath.asObservable()

  setQuery(query: Query, svgTitleByPath: SvgTitleByPath) {
    const svgByPath: SvgByPath = {}
    query.allSvg.edges.forEach((edge: FileEdge) => {
      const id = _.get(edge, 'node.id', null)
      // note on the path field:
      // the ':' is a workaround due to a recent behavior of gatbsy graphql
      // which maps a path object instead of the string when the string
      // exactly matches a file. so to prevent the string to match we add a ':' prefix
      const path = _.get(edge, 'node.path', ':').slice(1)
      const content = _.get(edge, 'node.content', '')
      const sourceInstanceName = _.get(edge, 'node.sourceInstanceName', '')
      const svgInfo = _.get(svgTitleByPath, path, {})
      const title = _.get(svgInfo, 'title', undefined)
      const caption = _.get(svgInfo, 'caption', undefined)
      const hast: HASTElementProps = svgParse(content)
      const { viewBox } = hast.children[0].properties
      const Svg = (p: React.SVGProps<SVGSVGElement>) => {
        const hastElems = hastParse(hast.children[0].children)
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <svg viewBox={viewBox} {...p}>
            {hastElems}
          </svg>
        )
      }
      svgByPath[`${sourceInstanceName}/${path}`] = {
        id,
        path,
        sourceInstanceName,
        viewBox,
        Svg,
        title,
        caption,
        hast,
        hastElems: null,
      }
    })
    this.svgByPath.next(svgByPath)
  }
}
