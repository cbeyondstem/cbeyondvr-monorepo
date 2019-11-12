async function getAllMdx(graphqlPromise) {
  try {
    return await graphqlPromise(
      `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              org
              contact
              favicon
            }
          }
          allMdx(sort: { fields: [frontmatter___title], order: DESC }, limit: 1000) {
            edges {
              node {
                id
                fileAbsolutePath
                excerpt(pruneLength: 160)
                fields {
                  slug
                  title
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
