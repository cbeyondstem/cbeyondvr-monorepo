import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="INTERIORS">
      <CarouselView path="interiors" />
    </Layout>
  )
}

export default MyPage
