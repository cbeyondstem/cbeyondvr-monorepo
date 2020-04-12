import * as React from 'react'
import { Button, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { ContactUs, VisitUs } from '@cbeyond/ui-kit'
import CallIcon from '@material-ui/icons/Call'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '50vh',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    paddingBottom: `2rem`
  },
  grid: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    '& button': {
      margin: theme.spacing(1)
    },
    '& MuiGrid-item': {
      lineHeight: '3rem',
      height: '3rem'
    },
    '& div:first-child': {
      textAlign: 'right'
    }
  }
}))

export const Contact: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)

  return (
    <Grid container justify="center" alignItems="center" className={classes.root} spacing={1}>
      <Grid item xs={12} spacing={4}>
        <Grid className={classes.grid} container spacing={1} alignItems="center" justify="center" direction="row">
          <Grid item xs={3} md={3}>
            Call Us
          </Grid>
          <Grid item xs={8} md={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.href = `tel:+15628330209`
              }}
              startIcon={<CallIcon />}
            >
              +1 562 833 0209
            </Button>{' '}
          </Grid>
        </Grid>
        <Grid className={classes.grid} container spacing={1} alignItems="center" justify="center" direction="row">
          <Grid item xs={3} md={3}>
            Email Us
          </Grid>
          <Grid item xs={8} md={6}>
            <ContactUs title="Frederick Courouble" />
          </Grid>
        </Grid>
        <Grid className={classes.grid} container spacing={1} alignItems="center" justify="center" direction="row">
          <Grid item xs={3} md={3}>
            Visit Us
          </Grid>
          <Grid item xs={8} md={6}>
            <VisitUs title="Lakewood workshop" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
