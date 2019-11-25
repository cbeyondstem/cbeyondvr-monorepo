import * as React from 'react'
import { PageProps } from '@cbeyond/ui-kit'
import { Layout } from '../layouts'
import { Contact } from '../views/Contact'

export const MyPage = (props: PageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="CONTACT">
      <Contact />
    </Layout>
  )
}

export default MyPage
