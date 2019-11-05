import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { Typography, Container, Divider, Box, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BrandIcon from 'assets/img/dmg-icon-color.comp.svg'

const useStyles = makeStyles(theme => ({
  // '@global': {
  //   body: {
  //     backgroundColor: theme.palette.common.white
  //   }
  // },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export const Contact: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  // <Container maxWidth="sm">
  // <Box my={4}>

  return (
    <Container>
      <Paper>
        <Typography component="h1" variant="h5">
          Call Us
        </Typography>
        <Box p={2}>
          <Typography variant="body1">415 810 8704</Typography>
        </Box>
        <Divider />
        <Typography component="h1" variant="h5">
          Email Us
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="message"
                label="Message"
                type="message"
                id="message"
                autoComplete="current-message"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Send email
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
