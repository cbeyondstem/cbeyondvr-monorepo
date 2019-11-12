/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const mdxUtils = require('./gatsby-node-utils')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'content'), 'node_modules']
    }
  })
}

exports.onCreateNode = mdxUtils.onCreateNode
exports.createPagesStatefully = mdxUtils.createPagesStatefully
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await mdxUtils.getAllMdx(graphql)

//   const mdxLayout = mdxUtils.getMdxLayout('mdx-layout-default')

//   // Create blog posts pages.
//   const posts = result.data.allMdx.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: post.node.fields.slug,
//       component: mdxLayout,
//       context: {
//         id: post.node.id,
//         slug: post.node.fields.slug,
//         mdx: post.node,
//         site: result.data.site,
//         previous,
//         next
//       }
//     })
//   })
// }
