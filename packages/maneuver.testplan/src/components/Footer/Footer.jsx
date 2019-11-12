import React from 'react'
import { SiteConfig } from 'components/SiteConfig'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from 'assets/img/logo.comp.svg'
import { Space } from 'components/Space'

const useStyles = makeStyles({
  root: {
    bottom: '0em',
    flexGrow: 1
    // position: 'absolute'
  },
  caption: {
    fontSize: '10px !important'
  },
  span: {
    paddingBottom: '1rem !important',
    '& > svg': {
      marginBottom: '-0.5rem !important'
    }
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
            <Grid container>
              <Grid item xs={12}>
                <Typography justify="center" align="center" variant="body1" className={classes.caption}>
                  <span className={classes.span}>
                    <Icon viewBox="0 0 600 193" width="100px" height="30px" />
                    <Space cnt={2} />
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
