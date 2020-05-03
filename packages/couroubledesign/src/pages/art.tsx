import * as _ from 'lodash'
import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'

import { Layout } from '../layouts'
import { ActivityDomain } from '../views/ActivityDomain'

export const MyPage = (props: PageProps) => {
  const { location } = props
  const page = 'ART'
  return (
    <Layout location={location} title={page}>
      <ActivityDomain category={page} imgOrientation="Landscape" />
    </Layout>
  )
}

export default MyPage
