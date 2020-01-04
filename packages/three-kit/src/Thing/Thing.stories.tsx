import * as _ from 'lodash'
import * as React from 'react'

/// <reference path="../../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { Thing } from './Thing'
import { sbDecorator } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Thing,
  title: `${group}/Thing`,
  decorators: [sbDecorator]
}

export const simple = () => <Thing />
export const planeBufferGeometry2x2 = () => <Thing args={[2, 2]} />
export const planeBufferGeometry2x3 = () => <Thing args={[2, 3]} />
