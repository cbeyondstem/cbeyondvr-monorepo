import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { Layout, SEO } from 'layouts'
import { Carousel } from 'views/Carousel'

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="INTERIORS" />
      <Container maxWidth="sm">
        <Box>
          <Carousel path="interiors" />
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
