import * as React from 'react'

import { Layout } from '../layouts'

export interface MyPageProps {
  location: {
    pathname: string
  }
}
export const MyPage = (props: MyPageProps) => {
  const { location } = props
  return (
    <Layout location={location} title="404: NotFound">
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist!</p>
    </Layout>
  )
}

export default MyPage
