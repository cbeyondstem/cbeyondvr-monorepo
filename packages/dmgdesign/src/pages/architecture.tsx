import * as _ from 'lodash'
import * as React from 'react'
import { PageProps, CarouselSvgView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { orderedImages } from '../../tools/image-list'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="ARCHITECTURE">
      <CarouselSvgView
        path="architecture"
        images={_.get(orderedImages, 'architecture', null)}
        // backgroundColor="#fff"
        captions
      />
    </Layout>
  )
}

export default MyPage
