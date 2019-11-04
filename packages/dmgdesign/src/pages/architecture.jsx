import React from 'react'
import PropTypes from 'prop-types'

import { Layout, SEO } from 'layouts'
import { Carousel } from 'views/Carousel'

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="ARCHITECTURE" />
      <Carousel path="architecture" />
    </Layout>
  )
}

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default MyPage
