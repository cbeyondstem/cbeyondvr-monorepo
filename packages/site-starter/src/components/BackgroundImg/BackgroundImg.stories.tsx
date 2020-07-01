import * as _ from 'lodash'
import * as React from 'react'

import base, { filename } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { BackgroundImg } from './index'

import portraitImage from '../../assets/stories/themePic.jpg'
import landscapeImage from '../../assets/stories/BeanToBar.jpg'
// import { sbDecorator } from '../../utils'

console.log(`base=${base} filename=${filename} __filename=${__filename}`)
export default {
  component: BackgroundImg,
  title: 'BackgroundImg'
  // decorators: [sbDecorator]
}
export const $NoRepeatContain = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="no-repeat" size="contain" />
}
export const $NoRepeatCover = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="no-repeat" size="cover" />
}
export const $RepeatXContain = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="repeat-x" size="contain" />
}
export const $RepeatXCover = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="repeat-x" size="cover" />
}
export const $RepeatYContain = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="repeat-y" size="contain" />
}
export const $RepeatYCover = () => {
  return <BackgroundImg portraitUrl={portraitImage} landscapeUrl={landscapeImage} repeat="repeat-y" size="cover" />
}
