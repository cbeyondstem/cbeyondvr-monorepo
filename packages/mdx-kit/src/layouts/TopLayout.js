/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// essentially all providers that must persist have to go there
export function TopLayout(props) {
  return <>{props.children}</>
}

TopLayout.propTypes = {
  children: PropTypes.node
}
