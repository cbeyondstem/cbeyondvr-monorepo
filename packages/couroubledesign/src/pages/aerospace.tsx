import * as _ from 'lodash'
import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'

import { Layout } from '../layouts'
import { ActivityUnified } from '../views/ActivityDomain'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="AEROSPACE">
      <ActivityUnified categories={['nanosat', 'vectorlaunch']} />
    </Layout>
  )
}

export default MyPage
