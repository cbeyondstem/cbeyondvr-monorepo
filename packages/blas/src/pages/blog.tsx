import * as _ from 'lodash'
import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { orderedImages } from '../../tools/image-list'
import { Home } from '../views/Home'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="BLOG">
      <div>WORK IN PROGRESS</div>
    </Layout>
  )
}

export default MyPage
