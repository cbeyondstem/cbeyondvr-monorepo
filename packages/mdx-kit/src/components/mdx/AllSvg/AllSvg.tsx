/* eslint-disable no-new-func */
/* eslint-disable no-eval */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { graphql, StaticQuery } from 'gatsby'
import { parse as svgParse, HASTElementProps } from 'svg-parser'
import { FileEdge } from '../../../types/gatsby-graphql-types'

export interface SvgProps {
  id: string
  path: string
  sourceInstanceName: string
  viewBox: string
  Svg: (p: React.SVGProps<SVGSVGElement>) => JSX.Element
}
export interface AllSvgProps {
  svgByPath: { [path: string]: SvgProps }
}
const { Consumer, Provider } = React.createContext({
  svgByPath: {}
} as AllSvgProps)

export interface SvgProviderProps {
  children: React.ReactNode
}

const hastParse = (elems: HASTElementProps[]) => {
  const hastElems: React.ReactNode[] = []
  elems.forEach(el => {
    const { children: hastChildren = [], properties = {} } = el
    const hastChildElems: React.ReactNode[] = []
    hastChildren.forEach(c => hastChildElems.push(hastParse([c])))
    const { style, ...others } = properties
    const styleObj: { [prop: string]: string } = {}
    if (style) {
      // console.log(`${el.tagName} ${style}`)
      style.split(';').forEach(styleProps => {
        const keyvalue = styleProps.split(':')
        const obj = JSON.parse(`{"${_.camelCase(keyvalue[0])}":"${keyvalue[1]}"}`)
        Object.assign(styleObj, obj)
      })
    }
    const renamed = {}
    _.mapKeys(others, (v, k) => {
      let nk = _.camelCase(k)
      if (nk === 'class') {
        nk = 'className'
      }
      _.assign(renamed, { [nk]: v })
    })
    if (el.type === 'element') {
      hastElems.push(
        React.createElement(el.tagName, { key: uid(el, hastElems.length), style: styleObj, ...renamed }, hastChildElems)
      )
    } else if (el.type === 'text') {
      hastElems.push(el.value)
    } else {
      hastElems.push(<em>svg hast parser unknowm element type {el.type}</em>)
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
                sourceInstanceName
                id
              }
            }
          }
        }
      `}
      render={data => {
        const svgByPath: { [path: string]: SvgProps } = {}
        data.allSvg.edges.forEach((edge: FileEdge) => {
          const id = _.get(edge, 'node.id', null)
          const path = _.get(edge, 'node.path', '')
          const content = _.get(edge, 'node.content', '')
          const sourceInstanceName = _.get(edge, 'node.sourceInstanceName', '')

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
            Svg
          }
        })
        return (
          <Provider
            value={{
              svgByPath
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
