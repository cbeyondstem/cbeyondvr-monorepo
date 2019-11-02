import * as React from 'react'
import { uid } from 'react-uid'
import Konva from 'konva'
import { Star } from 'react-konva'

export class DragAStar extends React.PureComponent<React.ComponentPropsWithRef<'div'>> {
  public handleDragStart: (evt: Konva.KonvaEventObject<DragEvent>) => void = evt => {
    evt.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    })
  }

  public handleDragEnd: (evt: Konva.KonvaEventObject<DragEvent>) => void = evt => {
    evt.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    })
  }

  render() {
    return (
      <>
        {[...Array(10)].map((_, idx) => (
          <Star
            key={uid(idx)}
            x={Math.random() * window.innerWidth}
            y={Math.random() * window.innerHeight}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={Math.random() * 180}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
          />
        ))}
      </>
    )
  }
}
