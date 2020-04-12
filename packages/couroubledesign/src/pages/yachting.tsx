import * as _ from 'lodash'
import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'

import { Layout } from '../layouts'
import { ActivityDomain } from '../views/ActivityDomain'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="YACHTING">
      <ActivityDomain
        categories={['gf42', 'racer44', 'offshore47', 'surfboard', 'concepts']}
        imgOrientation="Landscape"
      />
    </Layout>
  )
}

export default MyPage
