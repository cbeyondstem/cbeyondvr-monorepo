import * as React from 'react'

import { Box, Grid, Typography, useMediaQuery, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Space } from '../Space'

const useStyles = makeStyles(theme => ({
  root: {
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
  const xs = useMediaQuery((t: Theme) => t.breakpoints.down('xs'))

  const { brand, org } = props
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={6}
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
        {xs ? null : (
          <>
            <Box px={0}>&bull;</Box>
            <Box px={1}>All rights reserved</Box>
          </>
        )}
      </Box>
      {xs ? (
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
      ) : null}
    </Box>
  )
}
