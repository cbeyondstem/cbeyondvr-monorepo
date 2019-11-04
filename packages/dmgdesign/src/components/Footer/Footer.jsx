import React from 'react'
import { SiteConfig } from 'components/SiteConfig'
import { Box, Grid, Typography } from '@material-ui/core'
import Icon from 'assets/img/dmg-icon-color.comp.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    bottom: '0em',
    flexGrow: 1
    // position: 'absolute'
  },
  caption: {
    fontSize: '10px !important'
  }
})

export function Footer(props) {
  const classes = useStyles(props)
  return (
    <SiteConfig.Consumer>
      {({ title }) => {
        return (
          <div className={classes.root}>
            <Box p={2} />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography align="right">
                  <Icon viewBox="0 0 14 14" width="25px" height="25px" />
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography align="left" variant="caption" className={classes.caption}>
                  Copyright: &copy; {1900 + new Date().getYear()}
                  &nbsp;&nbsp;&nbsp;
                  {title}.&nbsp; All rights reserved.
                </Typography>
              </Grid>
            </Grid>
            {/* <Box display="flex" p={1}>
              <Box p={1} m={2} flexGrow={1}>
                <Typography align="right">
                  <Icon viewBox="0 0 14 14" width="25px" height="25px" />
                </Typography>
              </Box>
              <Box p={1} m={2}>
                <Typography align="left" variant="caption" className={classes.caption}>
                  Copyright: &copy; {1900 + new Date().getYear()}
                  &nbsp;&nbsp;&nbsp;
                  {title}.&nbsp; All rights reserved.
                </Typography>
              </Box>
            </Box> */}
          </div>
        )
      }}
    </SiteConfig.Consumer>
  )
}
