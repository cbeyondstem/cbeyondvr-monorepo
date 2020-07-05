import * as _ from 'lodash'
import * as React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import MapIcon from '@material-ui/icons/Map'

import {
  SiteConfigConsumer,
  SiteConfigProviderProps,
} from '../../providers/SiteConfig'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
)
export interface VisitUsProps {
  title: React.ReactNode | string
}

export const VisitUsButton: React.FunctionComponent<VisitUsProps> = props => {
  const classes = useStyles(props)
  const { title } = props
  return (
    <SiteConfigConsumer>
      {(cfg: SiteConfigProviderProps) => {
        const url = _.get(cfg, 'map', `unknown key 'map'`)
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.open(
                url,
                '_blank' // open in a new window.
              )
            }}
            startIcon={<MapIcon />}
            className={classes.button}
          >
            {title}
          </Button>
        )
      }}
    </SiteConfigConsumer>
  )
}

export default VisitUsButton
