import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { Link } from 'gatsby'

require('../assets/prismjs/prism_clear.css')
// require('prismjs/themes/prism-solarizedlight.css')
require('prismjs/plugins/command-line/prism-command-line.css')
require('prismjs/plugins/toolbar/prism-toolbar')
require('prismjs/plugins/show-language/prism-show-language')
require('prismjs/plugins/line-numbers/prism-line-numbers')

export const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  let header
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    Prism.highlightAll()
  })
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          // marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
          //          marginBottom: rhythm(-1)
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`
        // maxWidth: rhythm(24),
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      {header}
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}
