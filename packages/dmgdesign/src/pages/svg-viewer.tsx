import * as _ from 'lodash'
import * as React from 'react'
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
import { PageProps, AllSvgConsumer, AllSvgProps, SvgProps } from '@cbeyond/ui-kit'
import { parse as svgParse, HASTElementProps } from 'svg-parser'
import { uid } from 'react-uid'

const { useRef, useEffect } = React

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
      hastElems.push(el.value.replace('&amp;', '&'))
    } else {
      hastElems.push(<em>svg hast parser unknowm element type {el.type}</em>)
    }
  })
  return hastElems
}

export const MyPage = (props: PageProps) => {
  const Viewer = useRef(null)
  useEffect(() => {
    Viewer.current.fitToViewer()
  })
  return (
    <AllSvgConsumer>
      {({ svgByPath }: AllSvgProps) => {
        const svgList = Object.values(svgByPath)
        const selectedSvgList = svgList.filter((svg: SvgProps) => svg.path.search('architecture') > -1)
        const { Svg: SvgRaw, viewBox, content } = selectedSvgList[0] as SvgProps
        const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)
        const hast: HASTElementProps = svgParse(content)
        const hastElems = hastParse(hast.children[0].children)
        return (
          <div>
            {/* <UncontrolledReactSVGPanZoom
              width={500}
              height={500}
              ref={Viewer}
              // onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
            >
              <svg width={617} height={316}>
                <g fillOpacity=".5" strokeWidth="4">
                  <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142" />
                  <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff" />
                  <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0" />
                  <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f" />
                </g>
              </svg>
            </UncontrolledReactSVGPanZoom>
            <hr /> */}
            <UncontrolledReactSVGPanZoom
              width={w / 2}
              height={h / 2}
              ref={Viewer}
              // onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
            >
              <svg viewBox={viewBox} width={w / 2} height={h / 2}>
                {hastElems}
              </svg>
            </UncontrolledReactSVGPanZoom>
          </div>
        )
      }}
    </AllSvgConsumer>
  )
}

export default MyPage
