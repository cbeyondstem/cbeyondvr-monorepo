/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AllSvg } from 'components/mdx/AllSvg'
import { MdxProps } from 'components/mdx/AllMdx/AllMdx'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center'
  }
}))
export interface SvgProps {
  className: string
  src: string
  width: string
  height: string
}

export const Svg = (props: SvgProps) => {
  const classes = useStyles(props)
  const { className, src, width, height } = props
  return (
    <AllSvg.Consumer>
      {({ svgByPath }) => {
        if (!(src in svgByPath)) {
          return <em>{`<Svg src=${src}/> not found`}</em>
        }
        const { Svg: SvgRaw } = svgByPath[src]
        return (
          <Container className={className || classes.root}>
            <SvgRaw width={width} height={height} />
          </Container>
        )
      }}
    </AllSvg.Consumer>
  )
}

export const SvgAtMdxPath: (m: MdxProps) => React.FunctionComponent<SvgProps> = (m: MdxProps) => props => {
  const { src, ...others } = props
  return <Svg src={`${m.sourceInstanceName}/${src}`} {...others} />
}
