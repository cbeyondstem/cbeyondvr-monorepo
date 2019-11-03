async function getAllMdx(graphqlPromise) {
  try {
    return await graphqlPromise(
      `
        {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
              org
              contact
              favicon
            }
          }
          allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
              node {
                id
                fileAbsolutePath
                excerpt(pruneLength: 160)
                fields {
                  slug
                  author {
                    id
                    bio
                    twitter
                    avatar {
                      childImageSharp {
                        fixed {
                          src
                          srcSet
                        }
                      }
                    }
                  }
                  title
                  date(formatString: "MMMM DD, YYYY")
                }
                body
              }
            }
          }
        }
      `
    )
  } catch (err) {
    alert(err)
    throw err
  }
}
exports.getAllMdx = getAllMdx
