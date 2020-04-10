import * as _ from 'lodash'
import * as React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import {
  SiteConfigConsumer,
  SiteConfigProviderProps,
} from '../../content/SiteConfig'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
)
export interface ContactUsProps {
  title: React.ReactNode | string
}

export const ContactUsButton: React.FunctionComponent<ContactUsProps> = props => {
  const classes = useStyles(props)
  const { title } = props
  return (
    <SiteConfigConsumer>
      {(cfg: SiteConfigProviderProps) => {
        const text = _.get(cfg, 'contact', `unknown key 'contact'`)
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // window.location.href = `mailto:${text}`
              window.open(
                `mailto:${text}`,
                '_blank' // open in a new window.
              )
            }}
            startIcon={<MailOutlineIcon />}
            className={classes.button}
          >
            {title}
          </Button>
        )
      }}
    </SiteConfigConsumer>
  )
}

export default ContactUsButton
