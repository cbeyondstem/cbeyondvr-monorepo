/* eslint-disable @typescript-eslint/no-var-requires */
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
  exports.createPagesStatefully = mdxUtils.createPagesStatefully
}

exports.onPostBuild = mdxUtils.onPostBuild
