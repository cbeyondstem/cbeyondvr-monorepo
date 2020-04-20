import * as _ from 'lodash'
import * as React from 'react'

/// <reference path="../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { Viewer } from './Viewer'
// import { sbDecorator } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Viewer,
  title: `${group}/Viewer`,
  // decorators: [sbDecorator],
}

export const $Viewer = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Viewer />
  </div>
)
