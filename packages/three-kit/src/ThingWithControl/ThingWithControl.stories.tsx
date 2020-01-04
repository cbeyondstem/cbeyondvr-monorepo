import * as _ from 'lodash'
import * as React from 'react'

/// <reference path="../../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { ThingWithControl as Thing } from './ThingWithControl'
import { sbDecorator } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Thing,
  title: `${group}/ThingWithControl`,
  decorators: [sbDecorator]
}

export const dragToControl = () => <Thing />
export const $2x2x2WithAutoRotate = () => <Thing box={{ args: [2, 2, 2] }} control={{ autoRotate: true }} />
export const $WithPolarClamp = () => (
  <Thing
    box={{ args: [2, 2, 2] }}
    control={{
      autoRotate: true,
      minPolarAngle: Math.PI / 3,
      maxPolarAngle: Math.PI / 2
    }}
  />
)
