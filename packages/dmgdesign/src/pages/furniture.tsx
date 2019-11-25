import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="FURNITURE/LIGHTS">
      <CarouselView path="furniture" />
    </Layout>
  )
}

export default MyPage
