/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const mdxUtils = require('@cbeyond/ui-kit/gatsby-node-utils')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'content'),
        'node_modules'
        // path.resolve(__dirname, 'node_modules')
      ]
    }
  })
}

exports.onCreateNode = mdxUtils.onCreateNode
exports.onPostBuild = mdxUtils.getOnPostBuild(__dirname)
