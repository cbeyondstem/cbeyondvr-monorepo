import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Layout, SEO } from 'layouts'
import { About } from 'views/About'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       Copyright ©
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{" "}
//       {new Date().getFullYear()}
//       '.'
//     </Typography>
//   );
// }

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="ABOUT" />
      <Container maxWidth="sm">
        <Box my={4}>
          <About />
        </Box>
      </Container>
    </Layout>
  )
}

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default MyPage
