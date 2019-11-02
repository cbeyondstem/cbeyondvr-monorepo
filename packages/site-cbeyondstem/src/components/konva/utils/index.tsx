/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { Stage, Layer, Text } from 'react-konva'

export const withStage = <P extends object>(Component: React.ComponentType<P>, text?: string) => {
  const W: React.FunctionComponent<P> = props => {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {text && <Text text={text} />}
          <Component {...(props as P)} />
        </Layer>
      </Stage>
    )
  }
  return W
}
