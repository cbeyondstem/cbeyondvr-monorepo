import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { HASTElementProps } from 'svg-parser'
import { useObservable } from '@mindspace-io/react'

import { BehaviorSubject } from 'rxjs'
import { SvgProps } from '../components/providers/AllSvg'

export const hastParse = (elems: HASTElementProps[]) => {
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
        const obj = JSON.parse(
          `{"${_.camelCase(keyvalue[0])}":"${keyvalue[1]}"}`
        )
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
        React.createElement(
          el.tagName,
          { key: uid(el, hastElems.length), style: styleObj, ...renamed },
          hastChildElems
        )
      )
    } else if (el.type === 'text') {
      hastElems.push(el.value.replace('&amp;', '&'))
    } else {
      hastElems.push(<em>svg hast parser unknowm element type {el.type}</em>)
    }
  })
  return hastElems
}

const hastGenerate = (svg: SvgProps) => {
  const hastElems = hastParse(svg.hast.children[0].children)
  return hastElems
}

/**
 * Use RxJS to push svg html AST changes to UI
 *
 * The BehaviorSubject stores the more recent, last emitted value...
 * We also use `useObservable(service.name$)` hook to watch
 * for new 'hast' values
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

type HastElemsById = {
  [id: string]: {
    subject: BehaviorSubject<React.ReactNode>
    fetched: boolean
  }
}
export class SvgHastClass {
  private hastElemsById: HastElemsById = {}

  // constructor() {
  //   console.log(`SvgHastClass:: new Instance`)
  // }

  useHtmlAST(svgp: SvgProps) {
    if (!(svgp.id in this.hastElemsById)) {
      this.hastElemsById[svgp.id] = {
        subject: new BehaviorSubject<React.ReactNode>(null),
        fetched: false,
      }
    }
    const [hastElems] = useObservable<React.ReactNode>(
      this.hastElemsById[svgp.id].subject // .pipe(shareReplay(2))
    )
    return hastElems
  }

  fetch(svgp: SvgProps) {
    if (svgp.id in this.hastElemsById) {
      if (!this.hastElemsById[svgp.id].fetched) {
        this.hastElemsById[svgp.id].subject.next(hastGenerate(svgp))
        this.hastElemsById[svgp.id].fetched = true
      }
    }
  }
}
