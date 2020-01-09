import * as React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const ContactMeHref = React.lazy(() => import('./ContactUsHref'))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
)

// Make user click a button to show email adderss via lazy loading
export const ContactUs: React.FunctionComponent = props => {
  const classes = useStyles(props)

  const [showingEmail, setShowingEmail] = React.useState(false)

  const emailComp = showingEmail ? (
    <ContactMeHref />
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setShowingEmail(true)}
      startIcon={<MailOutlineIcon />}
      className={classes.button}
    >
      Click for contact info
    </Button>
  )
  const isSSR = typeof window === 'undefined'
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <div>{emailComp}</div>
        </React.Suspense>
      )}
    </>
  )
}
