import * as _ from 'lodash'
import * as React from 'react'
import {
  ReactSVGPanZoomProps,
  ReactSVGPanZoom,
  TOOL_NONE,
} from 'react-svg-pan-zoom'

const { useState, useEffect } = React

export const UncontrolledSVGPanZoom = React.forwardRef(
  (props: ReactSVGPanZoomProps, ref: React.RefObject<ReactSVGPanZoom>) => {
    const { width, height, ...others } = props
    const [state, setState] = useState({
      value: { viewerWidth: width, viewerHeight: height },
      tool: TOOL_NONE,
    })
    const Viewer = ref
    const changeTool = (tool: string) => {
      setState({ value: state.value, tool })
    }

    const changeValue = (value: { [name: string]: number }) => {
      // console.log(`changeValue ${JSON.stringify(value, null, 2)}`)
      // fix bug in ReactSVGPanZoom where height and width are not updated
      const {
        viewerWidth: viewerWidth0,
        viewerHeight: viewerHeight0,
        ...otherValues
      } = value
      setState({
        tool: state.tool,
        value: { viewerWidth: width, viewerHeight: height, ...otherValues },
      })
    }

    // const pan = (SVGDeltaX, SVGDeltaY) => {
    //   Viewer.current.pan(SVGDeltaX, SVGDeltaY)
    // }

    // const zoom = (SVGPointX, SVGPointY, scaleFactor) => {
    //   Viewer.current.zoom(SVGPointX, SVGPointY, scaleFactor)
    // }

    // const fitSelection = (
    //   selectionSVGPointX,
    //   selectionSVGPointY,
    //   selectionWidth,
    //   selectionHeight
    // ) => {
    //   Viewer.current.fitSelection(
    //     selectionSVGPointX,
    //     selectionSVGPointY,
    //     selectionWidth,
    //     selectionHeight
    //   )
    // }

    // const zoomOnViewerCenter = scaleFactor => {
    //   Viewer.current.zoomOnViewerCenter(scaleFactor)
    // }

    // const setPointOnViewerCenter = (SVGPointX, SVGPointY, zoomLevel) => {
    //   Viewer.current.setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel)
    // }

    // const reset = () => {
    //   Viewer.current.reset()
    // }

    // const openMiniature = () => {
    //   Viewer.current.openMiniature()
    // }

    // const closeMiniature = () => {
    //   Viewer.current.closeMiniature()
    // }

    const fitToViewer = (SVGAlignX: string, SVGAlignY: string) => {
      if (Viewer.current) {
        Viewer.current.fitToViewer(SVGAlignX, SVGAlignY)
      }
    }

    useEffect(() => {
      fitToViewer('center', 'center')
    }, [state.value.viewerWidth, state.value.viewerHeight])
    // console.log(`ReactSVGPanZoom ${JSON.stringify(state.value, null, 2)}`)

    return (
      <ReactSVGPanZoom
        width={width}
        height={height}
        tool={state.tool}
        onChangeTool={changeTool}
        value={state.value}
        onChangeValue={changeValue}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      />
    )
  }
)
