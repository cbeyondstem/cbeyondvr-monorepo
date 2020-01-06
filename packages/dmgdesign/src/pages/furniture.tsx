import * as _ from 'lodash'
import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { orderedImages } from '../../tools/image-list'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="FURNITURE/LIGHTS">
      <CarouselView path="furniture" images={_.get(orderedImages, 'furniture', null)} />
    </Layout>
  )
}

export default MyPage
