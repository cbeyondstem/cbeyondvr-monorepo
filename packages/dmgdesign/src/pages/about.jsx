import React from 'react'
import PropTypes from 'prop-types'
import { Layout, SEO } from 'layouts'
import { About } from 'views/About'

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="ABOUT" />
      <About />
    </Layout>
  )
}

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default MyPage
