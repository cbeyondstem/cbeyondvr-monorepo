/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const mdxUtils = require('@cbeyond/mdx-kit/gatsby-node-utils')
const { siteMetadata } = require('./gatsby-config')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'content'),
        'node_modules',
        'node_modules/@creative/material-kit/src'
      ]
    }
  })
}

if (siteMetadata.mdx) {
  exports.onCreateNode = mdxUtils.onCreateNode

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await mdxUtils.getAllMdx(graphql)

    const mdxLayout = mdxUtils.getMdxLayout('mdx-layout-default')

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: mdxLayout,
        context: {
          slug: post.node.fields.slug,
          mdx: post.node,
          site: result.data.site,
          previous,
          next
        }
      })
    })
  }
}

exports.onPostBuild = function onPostBuild() {
  if (process.env.DEPLOY_TO) {
    fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, process.env.DEPLOY_TO))
  }
  // fs.mkdirSync(path.join(__dirname, 'public'))

  // fs.renameSync(path.join(__dirname, 'public-blog'), path.join(__dirname, 'public', 'blog'))
}
