import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

export const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}
export default NotFoundPage
