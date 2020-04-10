import * as _ from 'lodash'
import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { Home } from '../views/Home'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="HOME">
      <Home />
    </Layout>
  )
}

export default MyPage
