import * as _ from 'lodash'
import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { orderedImages } from '../../tools/image-list'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="HOME">
      <CarouselView path="home" images={_.get(orderedImages, 'home', null)} captions />
    </Layout>
  )
}

export default MyPage
