import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { style } from 'typestyle'

const { useEffect, useRef } = React

export const HtmlComment: React.FunctionComponent<
  React.ComponentPropsWithRef<'div'>
> = props => {
  const el = useRef<HTMLDivElement>(null)
  useEffect(() => {
    el.current.outerHTML = `<!-- ${props.children} -->`
  }, [])
  return <div ref={el} />
}

interface SpaceProps extends React.ComponentPropsWithRef<'div'> {
  cnt?: number
}
export const Space: React.FunctionComponent<SpaceProps> = props => {
  const { cnt = 1 } = props
  const rem = 0.25 * cnt
  const classes = style({ paddingLeft: `${rem}rem` })
  return (
    <span className={classes} />
    //   {_.range(0, cnt).map((i, idx) => (
    //     <span key={uid(i, idx)} className={classes}>
    //       {' '}
    //     </span>
    //   ))}
    // </span>
  )
}
