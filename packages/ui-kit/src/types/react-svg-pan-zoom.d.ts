/* eslint-disable class-methods-use-this */
declare module 'react-svg-pan-zoom' {
  import * as React from 'react'

  export const MODE_IDLE = 'idle'
  export const MODE_PANNING = 'panning'
  export const MODE_ZOOMING = 'zooming'

  export enum ToolType {
    TOOL_AUTO = 'auto',
    TOOL_NONE = 'none',
    TOOL_PAN = 'pan',
    TOOL_ZOOM_IN = 'zoom-in',
    TOOL_ZOOM_OUT = 'zoom-out',
  }
  export enum PositionType {
    POSITION_NONE = 'none',
    POSITION_TOP = 'top',
    POSITION_RIGHT = 'right',
    POSITION_BOTTOM = 'bottom',
    POSITION_LEFT = 'left',
  }
  export enum ActionType {
    ACTION_ZOOM = 'zoom',
    ACTION_PAN = 'pan',
  }
  export enum SVGAlignXType {
    ALIGN_CENTER = 'center',
    ALIGN_LEFT = 'left',
    ALIGN_RIGHT = 'right',
  }
  export enum SVGAlignYType {
    ALIGN_CENTER = 'center',
    ALIGN_TOP = 'top',
    ALIGN_BOTTOM = 'bottom',
    ALIGN_COVER = 'cover',
  }

  export interface ToolbarProps {
    position?: PositionType
    SVGAlignX?: SVGAlignXType
    SVGAlignY?: SVGAlignYType
    activeToolColor?: string
  }

  export interface MiniatureProps {
    position?: PositionType
    background?: string
    width?: number
    height?: number
  }
  export interface ReactSVGPanZoomProps {
    width: number
    height: number
    value?: { [name: string]: number }
    tool?: ToolType
    onChangeTool?: (tool: ToolType) => void
    onChangeValue?: (value: { [name: string]: number }) => void
    toolbarProps?: ToolbarProps
    miniatureProps?: MiniatureProps
    children: React.ReactNode
  }
  // eslint-disable-next-line react/prefer-stateless-function
  export class ReactSVGPanZoom extends React.Component<
    React.PropsWithRef<ReactSVGPanZoomProps>
    > {
    fitToViewer: (SVGAlignX: string, SVGAlignY: string) => void
  }
}
