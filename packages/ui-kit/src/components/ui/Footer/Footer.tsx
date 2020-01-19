import * as React from 'react'

import { Box, Grid, Typography, useMediaQuery, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Space } from '../Space'

const useStyles = makeStyles(theme => ({
  root: {
    bottom: '0em',
    flexGrow: 1,
    alignSelf: 'center',
    // position: 'absolute'
  },
  footer: {
    // display: 'inline-flex',

    fontSize: '12px !important',
    '& > span': {
      top: theme.spacing(-2.5),
      position: 'relative',
      paddingLeft: theme.spacing(1.5),
      // verticalAlign: 'middle',
    },
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
    <div className={classes.root}>
      <Box p={2} />
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="body1" className={classes.footer}>
            {brand}
            <span>
              &copy;
              <Space cnt={1} />
              {new Date().getFullYear()}
              <Space cnt={1} />
              {org}.
              {xs ? null : (
                <>
                  <Space cnt={1} />
                  All rights reserved.
                </>
              )}
            </span>
            {xs ? (
              <>
                <br />
                <span>All rights reserved.</span>
              </>
            ) : null}{' '}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
