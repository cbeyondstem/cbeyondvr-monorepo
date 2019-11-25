import * as React from 'react'

import { CarouselView } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'

export interface BlogIndexProps {
  location: {
    pathname: string
  }
}
export const ImagePage = (props: BlogIndexProps) => {
  const { location } = props
  return (
    <Layout location={location} title="images" keywords={[`gatsby-image`]}>
      <CarouselView path="/" />
    </Layout>
  )
}

export default ImagePage
