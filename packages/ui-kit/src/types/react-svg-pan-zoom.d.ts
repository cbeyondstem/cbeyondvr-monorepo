declare module 'react-svg-pan-zoom' {
  import * as React from 'react'

  export interface ReactSVGPanZoomProps {
    scaleFactor?: number
    width: number
    height: number
    ref: React.MutableRefObject<unknown>
  }
  // eslint-disable-next-line react/prefer-stateless-function
  export class UncontrolledReactSVGPanZoom extends React.Component<
    ReactSVGPanZoomProps
    > { }
}
