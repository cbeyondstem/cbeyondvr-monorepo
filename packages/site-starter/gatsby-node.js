/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash')

const path = require(`path`)
const { startCase } = require('lodash')

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
        'node_modules/@cbeyond/material-kit/src'
      ]
    }
  })
}
exports.onCreateNode = async ({ node, getNode, actions }) => {
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/mdx-layout.jsx`)
  return graphql(
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          mdx: post.node,
          site: result.data.site,
          previous,
          next
        }
      })
    })
  })
}
