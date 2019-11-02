/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/destructuring-assignment */

import * as _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "components/Link";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO } from "layouts";

// const AuthorBioMdx = data => {
//   // check if there is a detailed author bio provided as part of an mdx
//   let authorBioMdx = _.get(data, 'mdxByAuthor', null)
//   if (!isNull(authorBioMdx)) {
//     authorBioMdx = authorBioMdx.edges.filter(mdx => {
//       const fname = _.get(mdx, 'node.fileAbsolutePath', '')
//       return fname.substring(fname.lastIndexOf('/') + 1).toLowerCase() === 'author.mdx'
//     })
//     if (authorBioMdx && authorBioMdx.length > 0) {
//       authorBioMdx = authorBioMdx[0].node.code.body
//     }
//   }
//   if (isNull(authorBioMdx) || authorBioMdx.length === 0) {
//     return null
//   }
//   return (
//     <MDXProvider components={mdxDesign()}>
//       <MDXRenderer scope={{ React, css }} key="MDXRenderBio">
//         {authorBioMdx}
//       </MDXRenderer>
//     </MDXProvider>
//   )
// }
const MyHeader = (hdr, bookmarkIdx = "") => p => {
  console.log(`Generating Header ${hdr} for bookmark ${bookmarkIdx}`);
  const { children, ...others } = p;
  return React.createElement(
    hdr,
    {
      id: _.kebabCase(p.children) + bookmarkIdx,
      style: { color: "blue" },
      ...others
    },
    p.children
  );
};

const BlogPostTemplate = ({ location, pageContext }) => {
  const post = pageContext.mdx;
  const siteTitle = pageContext.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const props = {
    pageContext: {
      site: pageContext.site
    },
    mdx: pageContext.mdx
  };
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.fields.title} description={post.fields.title} />
      <h1>{post.fields.title}</h1>
      <p
        style={{
          // ...scale(-1 / 5),
          display: `block`
          // marginBottom: rhythm(1),
          // marginTop: rhythm(-1)
        }}
      >
        {post.fields.date}
      </p>
      <MDXProvider
        components={{
          h1: MyHeader("h1"),
          h2: MyHeader("h2"),
          h3: MyHeader("h3"),
          h4: MyHeader("h4"),
          h5: MyHeader("h5"),
          h6: MyHeader("h6"),
          // table: p => <table className={css.mdxTable} {...p} />,
          // tr: p => <tr className={css.mdxTableRow} {...p} />,
          pre: p => <pre className="line-numbers" {...p} />
        }}
      >
        <MDXRenderer {...props}>{post.body}</MDXRenderer>
      </MDXProvider>
      <hr
        style={
          {
            // marginBottom: rhythm(1)
          }
        }
      />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.fields.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.fields.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

const MdxType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    author: PropTypes.object,
    title: PropTypes.string.isRequired,
    date: PropTypes.string
  }),
  body: PropTypes.string.isRequired
});

BlogPostTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      })
    }),
    mdx: MdxType,
    previous: MdxType,
    next: MdxType
  }).isRequired
};

export default BlogPostTemplate;
