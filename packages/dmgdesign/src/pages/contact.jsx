import React from 'react'
import PropTypes from 'prop-types'

import { Layout, SEO } from 'layouts'
import { Contact } from 'views/Contact'

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="CONTACT" />
      <Contact />
    </Layout>
  )
}

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default MyPage
