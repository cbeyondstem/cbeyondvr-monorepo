import * as React from 'react'
import { Button, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { ContactUs as ContactUsEmail } from '@cbeyond/ui-kit'
import CallIcon from '@material-ui/icons/Call'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '30vh',
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

export const ContactUs: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const justify = 'flex-start'
  const alignItems = 'flex-start'
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12} spacing={4}>
        <Grid className={classes.grid} container spacing={1} justify={justify} alignItems={alignItems} direction="row">
          <Grid item xs={3} md={3}>
            Par Téléphone
          </Grid>
          <Grid item xs={8} md={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.href = `tel:+33607068856`
              }}
              startIcon={<CallIcon />}
            >
              +33 6 07 06 88 56 (Gérard Lainé)
            </Button>{' '}
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.location.href = `tel:+33689856122`
              }}
              startIcon={<CallIcon />}
            >
              +33 6 89 85 61 22 (Josette Lainé)
            </Button>{' '}
          </Grid>
        </Grid>
        <Grid className={classes.grid} container spacing={1} justify={justify} alignItems={alignItems} direction="row">
          <Grid item xs={3} md={3}>
            Par courriel
          </Grid>
          <Grid item xs={8} md={6}>
            <ContactUsEmail title="Villa Clémentine" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
