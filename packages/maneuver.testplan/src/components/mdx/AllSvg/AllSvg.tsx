/* eslint-disable no-new-func */
/* eslint-disable no-eval */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdge } from 'types/gatsby-graphql-types.d.ts'

/// <reference path="types/svg-parser.d.ts" />
import { parse as svgParse, HASTElementProps } from 'svg-parser'

export interface SvgProps {
  id: string
  path: string
  viewBox: string
  Svg: JSX.Element
}
export interface SvgListProps {
  svgList: SvgProps[]
}
const { Consumer, Provider } = React.createContext({
  svgList: []
} as SvgListProps)

export interface SvgProviderProps {
  children: React.ReactNode
}

const hastParse = (elems: HASTElementProps[]) => {
  const hastElems: React.ReactNode[] = []
  elems.forEach(el => {
    const { children: hastChildren } = el
    if (hastChildren) {
      const hastChildElems: React.ReactNode[] = []
      hastChildren.forEach(c => hastChildElems.push(hastParse([c])))
      const { style, ...others } = el.properties
      let styleObj = {}
      if (style) {
        // console.log(`${el.tagName} ${style}`)
        const styleProps = style.split(':')
        styleObj = JSON.parse(`{"${_.camelCase(styleProps[0])}":"${styleProps[1]}"}`)
      }
      const renamed = {}
      _.mapKeys(others, (v, k) => {
        let nk = _.camelCase(k)
        if (nk === 'class') {
          nk = 'className'
        }
        _.assign(renamed, { [nk]: v })
      })
      // console.log(`${el.tagName} ${JSON.stringify(renamed, null, 3)}`)
      hastElems.push(
        React.createElement(el.tagName, { key: uid(el, hastElems.length), style: styleObj, ...renamed }, hastChildElems)
      )
    }
  })
  return hastElems
}

const AllSvgComp: React.FunctionComponent<SvgProviderProps> = props => {
  const { children } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          allSvg {
            edges {
              node {
                content
                path
              }
            }
          }
        }
      `}
      render={data => {
        const svgList = data.allSvg.edges.map((edge: FileEdge, idx: number) => {
          const id = _.get(edge, 'node.id', null)
          const path = _.get(edge, 'node.path', '')
          const content = _.get(edge, 'node.content', '')
          const hast: HASTElementProps = svgParse(content)
          const { viewBox } = hast.children[0].properties
          const hastElems = hastParse(hast.children[0].children)
          const Svg = (p: React.SVGProps<SVGSVGElement>) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <svg viewBox={viewBox} {...p}>
              {hastElems}
            </svg>
          )

          return { id, path, viewBox, Svg }
        })
        return (
          <Provider
            value={{
              svgList
            }}
          >
            {children}
          </Provider>
        )
      }}
    />
  )
}

export const AllSvg = {
  Provider: AllSvgComp,
  Consumer
}
