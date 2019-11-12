import * as _ from 'lodash'
import * as React from 'react'
import { style } from 'typestyle'

interface SpaceProps extends React.ComponentPropsWithRef<'div'> {
  cnt?: number
}
export const Space: React.FunctionComponent<SpaceProps> = props => {
  const { cnt = 1 } = props
  const rem = 0.25 * cnt
  const classes = style({ paddingLeft: `${rem}rem` })
  return <span className={classes} />
}
