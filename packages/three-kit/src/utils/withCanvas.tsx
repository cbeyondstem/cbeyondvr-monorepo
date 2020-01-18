/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as THREE from 'three'
import { Canvas, CanvasProps } from 'react-three-fiber'
import { style } from 'typestyle'
import * as csx from 'csx'

export const withCanvas = <P extends object>(
  Component: React.ComponentType<P>,
  canvasProps?: CanvasProps
) => {
  const W: React.FunctionComponent<P> = props => {
    const { camera, onCreated, ...others } = canvasProps || {}
    return (
      <div
        className={style({
          $nest: {
            '& > div > canvas': {
              width: '100%',
              height: csx.important('100%'),
              margin: 0,
              padding: 0,
            },
          },
        })}
      >
        <Canvas
          camera={camera || { position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl }) => {
            // eslint-disable-next-line no-param-reassign
            gl.shadowMap.enabled = true
            // eslint-disable-next-line no-param-reassign
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
          {...others}
        >
          <Component {...(props as P)} />
        </Canvas>
      </div>
    )
  }
  return W
}
