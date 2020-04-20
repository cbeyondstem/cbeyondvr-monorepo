/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { BABYLON, DefaultViewer } from 'babylonjs-viewer'

export type SceneEventArgs = {
  engine: BABYLON.Engine
  scene: BABYLON.Scene
  canvas: HTMLCanvasElement
}

export type ViewerProps = {
  engineOptions?: BABYLON.EngineOptions
  adaptToDeviceRatio?: boolean
  onSceneMount?: (args: SceneEventArgs) => void
  width?: number
  height?: number
  model: string
}

export class Viewer extends React.Component<
  ViewerProps & React.HTMLAttributes<HTMLCanvasElement>,
  {}
> {
  private scene: BABYLON.Scene

  private engine: BABYLON.Engine

  private canvas: HTMLCanvasElement

  componentDidMount() {
    const {
      engineOptions,
      adaptToDeviceRatio,
      onSceneMount,
      model,
    } = this.props
    // this.engine = new BABYLON.Engine(
    //   this.canvas,
    //   true,
    //   engineOptions,
    //   adaptToDeviceRatio
    // )

    const viewer = new DefaultViewer(this.canvas, {
      model,
    })

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow)
  }

  onCanvasLoaded = (c: HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c
    }
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize()
    }
  }

  render() {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    const { width, height, ...rest } = this.props

    const opts: any = {}

    if (width !== undefined && height !== undefined) {
      opts.width = width
      opts.height = height
    }

    return <canvas {...opts} ref={this.onCanvasLoaded} />
  }
}
