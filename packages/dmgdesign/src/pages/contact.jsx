import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { Layout, SEO } from 'layouts'
import { Contact } from 'views/Contact'

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="CONTACT" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Contact />
        </Box>
      </Container>{' '}
    </Layout>
  )
}

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default MyPage
