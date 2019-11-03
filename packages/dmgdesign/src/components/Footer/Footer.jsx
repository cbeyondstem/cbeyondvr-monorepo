import React from 'react'
import { SiteConfig } from 'components/SiteConfig'
import { Box } from '@material-ui/core'
import Icon from 'assets/img/dmg-icon-color.comp.svg'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    bottom: '0em'
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
          // <Grid container spacing={1} direction="row" justify="center" alignItems="center">
          //   <Grid item sm>
          //     <Icon viewBox="0 0 14 14" width="25px" height="25px" />
          //   </Grid>
          //   <Grid item sm>
          //     Copyright: &copy; {1900 + new Date().getYear()}
          //     &nbsp;&nbsp;
          //     {title}. All rights reserved.
          //   </Grid>
          // </Grid>
          <div className={classes.root}>
            <Box display="flex" p={1}>
              <Box p={1} m={2} flexGrow={1}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Icon viewBox="0 0 14 14" width="25px" height="25px" />
              </Box>
              <Box p={1} m={2}>
                <Typography variant="caption" className={classes.caption}>
                  Copyright: &copy; {1900 + new Date().getYear()}
                  &nbsp;&nbsp;&nbsp;
                  {title}.&nbsp; All rights reserved.
                </Typography>
              </Box>
            </Box>
          </div>
        )
      }}
    </SiteConfig.Consumer>
  )
}
