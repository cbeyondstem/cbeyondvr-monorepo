import PropTypes from 'prop-types'
import React from 'react'
import { getLayoutMdx } from '@cbeyond/mdx-kit/src'
import { Layout } from '../layouts'

const BlogPostTemplate = props => {
  const LayoutMdx = getLayoutMdx(Layout)

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LayoutMdx {...props} />
}

const FrontmatterType = PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string
})

BlogPostTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.shape({
    frontmatter: FrontmatterType.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default BlogPostTemplate
