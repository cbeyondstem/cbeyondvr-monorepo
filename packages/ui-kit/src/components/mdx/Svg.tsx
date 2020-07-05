/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as URI from 'uri-js'
import { AllSvgConsumer } from '../providers/AllSvg'
import { MdxProps } from '../providers/AllMdx'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}))
export interface SvgProps {
  className?: string
  src: string
  width: string
  height: string
}

export const Svg = (props: SvgProps) => {
  const classes = useStyles(props)
  const { className, src, width, height } = props
  return (
    <AllSvgConsumer>
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
    </AllSvgConsumer>
  )
}

export const SvgAtMdxPath: (
  m: MdxProps
) => React.FunctionComponent<SvgProps> = (m: MdxProps) => props => {
  const { src, ...others } = props
  let asrc = src // absolute
  if (src[0] === '.') {
    // relative to the mdx in which svg is imported
    const dirname = m.path
      .split('/')
      .slice(0, -1)
      .join('/')
    asrc = URI.normalize(`${dirname}/${src}`)
  }
  return <Svg src={`${m.sourceInstanceName}/${asrc}`} {...others} />
}
