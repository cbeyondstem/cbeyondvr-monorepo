/* eslint-disable class-methods-use-this */
declare module 'react-svg-pan-zoom' {
  import * as React from 'react'

  export const TOOL_NONE = 'none'
  export interface ReactSVGPanZoomProps {
    width: number
    height: number
    value?: { [name: string]: number }
    tool?: string
    onChangeTool?: (tool: string) => void
    onChangeValue?: (value: { [name: string]: number }) => void
    children: React.ReactNode
  }
  // eslint-disable-next-line react/prefer-stateless-function
  export class ReactSVGPanZoom extends React.Component<
    React.PropsWithRef<ReactSVGPanZoomProps>
    > {
    fitToViewer: (SVGAlignX: string, SVGAlignY: string) => void
  }
}
