import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'

import EuroIcon from '@material-ui/icons/Euro'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem !important',
    display: 'flex',
    fontSize: '120%',
    fontWeight: 500,
    alignSelf: 'center',
    textAlign: 'center',
    flexWrap: 'nowrap',
    '@supports not (-ms-ime-align:auto)': {
      justifyContent: 'space-evenly'
    },
    '@supports (-ms-ime-align:auto)': {
      /* Edge only as space-evenly is not supported by Microsoft Edge*/
      justifyContent: 'space-around'
    },
    '@media (max-width: 768px)': {
      minWidth: '80vw'
    }
  },
  svgWithText: {
    display: 'inline-flex',
    alignSelf: 'center',
    '& .MuiChip-label': {
      fontSize: '120%'
    },
    '& svg': {
      paddingRight: theme.spacing(0.5),
      bottom: '-4px',
      position: 'relative'
    },
    '& span': {
      lineHeight: `${theme.spacing(4)}px`
    },
    '& sup': {
      lineHeight: `${theme.spacing(3)}px`
    }
  }
}))

export const Price: React.FunctionComponent = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.svgWithText}>
        <span>
          Cette Villa est proposée au prix de{' '}
          <Chip
            label={
              <span>
                720000&nbsp;
                <EuroIcon fontSize="small" />
              </span>
            }
          />
        </span>
      </div>
    </div>
  )
}
