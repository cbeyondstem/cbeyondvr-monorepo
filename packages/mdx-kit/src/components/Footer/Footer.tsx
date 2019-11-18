import * as React from 'react'

import { SiteConfig } from 'components/SiteConfig'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Space } from 'components/Space'

const useStyles = makeStyles(theme => ({
  root: {
    bottom: '0em',
    flexGrow: 1
    // position: 'absolute'
  },
  caption: {
    fontSize: '12px !important'
  },
  span: {
    padding: theme.spacing(1.5, 2),
    marginTop: theme.spacing(1)
  }
}))

export interface FooterProps {
  brand: React.ReactNode
}

export function Footer(props: FooterProps) {
  const classes = useStyles(props)
  const { brand } = props
  return (
    <SiteConfig.Consumer>
      {({ title }) => {
        return (
          <div className={classes.root}>
            <Box p={2} />
            <Grid container>
              <Grid item xs={12}>
                <Typography align="center" variant="body1" className={classes.caption}>
                  {brand}
                  <span className={classes.span}>
                    &copy;
                    <Space cnt={1} />
                    {new Date().getFullYear()}
                    <Space cnt={1} />
                    {title}.
                    <Space cnt={1} />
                    All rights reserved.
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </div>
        )
      }}
    </SiteConfig.Consumer>
  )
}
