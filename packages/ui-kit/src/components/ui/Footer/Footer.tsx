import * as React from 'react'

import { Box, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: '0em',
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: '12px !important',
  },
}))

export interface FooterProps {
  brand: React.ReactNode
  org: React.ReactNode
}

export function Footer(props: FooterProps) {
  const classes = useStyles(props)
  const { brand, org } = props
  return (
    <Box
      className={classes.footer}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={0}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box px={1}>{brand}</Box>
        <Box p={0}>&copy;{new Date().getFullYear()}</Box>
        <Box px={1}>{org}</Box>
        <Hidden xsDown>
          <Box px={0}>&bull;</Box>
          <Box px={1}>All rights reserved</Box>
        </Hidden>
      </Box>
      <Hidden smUp>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box px={1} pb={2}>
            All rights reserved
          </Box>
        </Box>
      </Hidden>
    </Box>
  )
}
