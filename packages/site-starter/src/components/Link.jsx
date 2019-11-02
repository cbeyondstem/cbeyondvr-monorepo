/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import MuiLink from '@material-ui/core/Link'
import { Link as GatsbyLink } from 'gatsby'

export default React.forwardRef(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})
