import * as React from 'react'
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
import { PageProps, AllSvgConsumer, AllSvgProps, SvgProps } from '@cbeyond/ui-kit'

const { useRef, useEffect } = React

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
        const { Svg: SvgRaw, viewBox } = selectedSvgList[0] as SvgProps
        const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)
        return (
          <div>
            <UncontrolledReactSVGPanZoom
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
            <hr />
            <UncontrolledReactSVGPanZoom
              width={w / 2}
              height={h / 2}
              ref={Viewer}
              // onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
            >
              <SvgRaw width={w / 2} height={h / 2} />
            </UncontrolledReactSVGPanZoom>{' '}
          </div>
        )
      }}
    </AllSvgConsumer>
  )
}

export default MyPage
