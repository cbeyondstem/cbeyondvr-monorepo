import React from 'react'
import PropTypes from 'prop-types'

import { SiteConfig } from 'components/SiteConfig'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from 'assets/img/logo.comp.svg'
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

export function Footer(props) {
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
                <Typography justify="center" align="center" variant="body1" className={classes.caption}>
                  {brand}
                  <span className={classes.span}>
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

Footer.propTypes = {
  // title: PropTypes.string,
  brand: PropTypes.node.isRequired
}
