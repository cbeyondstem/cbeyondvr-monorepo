/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const mdxUtils = require('@cbeyond/ui-kit/gatsby-node-utils')
const sharp = require('sharp')
const { siteMetadata } = require('./gatsby-config')

sharp.simd(false)
sharp.cache(false)

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

if (siteMetadata.mdx) {
  exports.onCreateNode = mdxUtils.onCreateNode
}

exports.onPostBuild = mdxUtils.onPostBuild
