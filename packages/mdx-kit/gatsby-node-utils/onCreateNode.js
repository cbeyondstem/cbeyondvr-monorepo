/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash')

const { startCase } = _

async function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)
    let value = _.get(node, 'frontmatter.slug', null) || parent.relativePath.replace(parent.ext, '')
    if (!['pages', 'content'].includes(parent.sourceInstanceName)) {
      value = `${parent.sourceInstanceName}/${value}`
    }
    if (value === 'index') {
      value = ''
    }
    createNodeField({
      name: 'slug',
      node,
      value: `/${value}`
    })

    createNodeField({
      name: 'id',
      node,
      value: node.id
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name)
    })

    createNodeField({
      name: 'author',
      node,
      value: node.frontmatter.author
    })

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date
    })
  }
}

exports.onCreateNode = onCreateNode
