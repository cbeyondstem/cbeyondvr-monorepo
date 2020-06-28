import * as _ from 'lodash'
import * as React from 'react'

/// <reference path="../../types/paths.macro.d.ts"/>
import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { BackgroundImg } from './BackgroundImg'
// import { sbDecorator } from '../../utils'

// const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: BackgroundImg,
  title: `story/BackgroundImg`
  // decorators: [sbDecorator]
}

export const $BackgroundImg = () => {
  console.log(`story`)
  return <BackgroundImg />
}
