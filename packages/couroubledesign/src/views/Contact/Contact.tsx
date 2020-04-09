import * as React from 'react'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import { ContactUs } from '@cbeyond/ui-kit'
// import BrandIcon from 'assets/img/dmg-icon-color.comp.svg'
import CallIcon from '@material-ui/icons/Call'

const useStyles = makeStyles(theme => ({
  // '@global': {
  //   body: {
  //     backgroundColor: theme.palette.common.white
  //   }
  // },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyCntent: 'center',
    fontSize: '150%',
    height: '50vh',
    '& button': {
      margin: theme.spacing(3),
      whiteSpace: 'nowrap'
    }
  }
}))

export const Contact: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  // <Container maxWidth="sm">
  // <Box my={4}>

  return (
    <div className={classes.paper}>
      <div>
        Call us
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href = `tel:+15628330209`
          }}
          startIcon={<CallIcon />}
        >
          +1 562 833 0209
        </Button>
      </div>
      <div>
        or Email us <ContactUs title="Frederick Courouble" />
      </div>
    </div>
  )
}

// <form className={classes.form} noValidate>
// <Grid container spacing={2}>
//   <Grid item xs={12} sm={6}>
//     <TextField
//       autoComplete="fname"
//       name="firstName"
//       variant="outlined"
//       required
//       fullWidth
//       id="firstName"
//       label="First Name"
//       autoFocus
//     />
//   </Grid>
//   <Grid item xs={12} sm={6}>
//     <TextField
//       variant="outlined"
//       required
//       fullWidth
//       id="lastName"
//       label="Last Name"
//       name="lastName"
//       autoComplete="lname"
//     />
//   </Grid>
//   <Grid item xs={12}>
//     <TextField
//       variant="outlined"
//       required
//       fullWidth
//       id="email"
//       label="Email Address"
//       name="email"
//       autoComplete="email"
//     />
//   </Grid>
//   <Grid item xs={12}>
//     <TextField
//       variant="outlined"
//       required
//       fullWidth
//       name="message"
//       label="Message"
//       type="message"
//       id="message"
//       autoComplete="current-message"
//     />
//   </Grid>
// </Grid>
// <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
//   Send email
// </Button>
// </form>
