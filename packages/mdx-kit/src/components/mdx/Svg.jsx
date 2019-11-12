import * as React from 'react'
import PropTypes from 'prop-types'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AllSvg } from 'components/mdx/AllSvg'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  }
}))

export const Svg = props => {
  const classes = useStyles(props)
  const { className, src, width, height } = props
  return (
    <AllSvg.Consumer>
      {({ svgList }) => {
        const nodes = svgList.filter(s => s.path === src)
        if (nodes.length === 0) {
          return <em>{`<Svg src=${src}/> not found`}</em>
        }
        const { Svg: SvgRaw } = nodes[0]
        return (
          <Container className={className || classes.root}>
            <SvgRaw width={width} height={height} />
          </Container>
        )
      }}
    </AllSvg.Consumer>
  )
}

Svg.defaultProps = {
  width: null,
  height: null,
  className: null
}
Svg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}
