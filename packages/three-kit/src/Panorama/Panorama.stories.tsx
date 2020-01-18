import * as _ from 'lodash'
import * as React from 'react'

import { base } from 'paths.macro'

// import { action } from '@storybook/addon-actions'
import { Panorama } from './Panorama'
import { sbDecorator } from '../utils'

const group = _.join(_.split(base, '/').slice(3), '/')

export default {
  component: Panorama,
  title: `${group}/Panorama`,
  decorators: [sbDecorator],
}

export const Qoocam360StillFromVideo = () => (
  <Panorama url="/still/still1_1.1.1.jpg" />
)
export const Qoocam360Still = () => <Panorama url="/still/still2.jpg" />
export const SphericalTexture = () => (
  <Panorama url="/still/spherical_texture.jpg" />
)
export const CubeMapTexture = () => (
  <Panorama
    url={[
      '/cubemap/px.jpg',
      '/cubemap/nx.jpg',
      '/cubemap/py.jpg',
      '/cubemap/ny.jpg',
      '/cubemap/pz.jpg',
      '/cubemap/nz.jpg',
    ]}
  />
)
