import Konva from 'konva'
import * as React from 'react'
import { Rect } from 'react-konva'

interface RectangleState {
  color: string
}

const initState = (props: Konva.RectConfig) => {
  return {
    color: props.fill || 'green'
  }
}

export class ColoredRect extends React.PureComponent<Konva.RectConfig, RectangleState> {
  public readonly state: RectangleState = initState(this.props)

  public handleClick(onClick: (evt: Konva.KonvaEventObject<MouseEvent>) => void) {
    return (evt: Konva.KonvaEventObject<MouseEvent>) => {
      if (onClick) onClick(evt)
      const color = Konva.Util.getRandomColor()
      this.setState({
        color
      })
    }
  }

  public render() {
    const { x, y, width, height, onClick, shadowBlur, ...others } = this.props
    const { color } = this.state

    // drop fill property from others
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, ...othersWithoutFill } = others

    return (
      <Rect
        x={x || 20}
        y={y || 20}
        width={width || 50}
        height={height || 50}
        fill={color}
        shadowBlur={shadowBlur || 5}
        onClick={this.handleClick(onClick)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...othersWithoutFill}
      />
    )
  }
}
