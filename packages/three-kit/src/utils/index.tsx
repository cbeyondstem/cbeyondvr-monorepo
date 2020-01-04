/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { Canvas, CanvasProps } from 'react-three-fiber'
import { style } from 'typestyle'
import * as csx from 'csx'

export const withCanvas = <P extends object>(
  Component: React.ComponentType<P>,
  canvasProps?: CanvasProps
) => {
  const W: React.FunctionComponent<P> = props => {
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
        <Canvas {...(canvasProps as CanvasProps)}>
          <Component {...(props as P)} />
        </Canvas>
      </div>
    )
  }
  return W
}
