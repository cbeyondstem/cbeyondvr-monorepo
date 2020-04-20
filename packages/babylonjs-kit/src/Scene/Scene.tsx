/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as BABYLON from 'babylonjs'

export type SceneEventArgs = {
  engine: BABYLON.Engine
  scene: BABYLON.Scene
  canvas: HTMLCanvasElement
}

export type SceneProps = {
  engineOptions?: BABYLON.EngineOptions
  adaptToDeviceRatio?: boolean
  onSceneMount?: (args: SceneEventArgs) => void
  width?: number
  height?: number
}

export class Scene extends React.Component<
  SceneProps & React.HTMLAttributes<HTMLCanvasElement>,
  {}
> {
  private scene: BABYLON.Scene

  private engine: BABYLON.Engine

  private canvas: HTMLCanvasElement

  componentDidMount() {
    const { engineOptions, adaptToDeviceRatio, onSceneMount } = this.props
    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      engineOptions,
      adaptToDeviceRatio
    )

    const scene = new BABYLON.Scene(this.engine)
    this.scene = scene
    if (typeof onSceneMount === 'function') {
      onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas,
      })
    } else {
      console.error('onSceneMount function not available')
    }

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
