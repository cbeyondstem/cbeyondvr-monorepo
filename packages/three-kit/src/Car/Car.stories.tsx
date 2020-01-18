import * as _ from 'lodash'
import * as React from 'react'

/// <reference path="../../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { CarWithControl as Car } from './Car'
import { sbDecorator } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Car,
  title: `${group}/3DCar`,
  decorators: [sbDecorator],
}

export const $3DCar = () => (
  <Car box={{ args: [2, 2, 2] }} control={{ autoRotate: true }} />
)
export const $WithPolarClamp = () => (
  <Car
    box={{ args: [2, 2, 2] }}
    control={{
      autoRotate: true,
      minPolarAngle: Math.PI / 3,
      maxPolarAngle: Math.PI / 2,
    }}
  />
)
