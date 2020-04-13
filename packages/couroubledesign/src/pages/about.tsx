import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { About } from '../views/About'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="ABOUT">
      <About />
    </Layout>
  )
}

export default MyPage
