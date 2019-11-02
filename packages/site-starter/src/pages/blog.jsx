/* eslint-disable react/no-danger */
import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";

import { Layout, SEO } from "layouts";

export const BlogIndex = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={
                {
                  // marginBottom: rhythm(1 / 4)
                }
              }
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
};
BlogIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any.isRequired
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
