import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "@cbeyond/ui-kit";

import { Layout, SEO } from "layouts";

export const MyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="FURNITURE/LIGHTS" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Link to="/">HOME</Link>
        </Box>
      </Container>{" "}
    </Layout>
  );
};

MyPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default MyPage;
