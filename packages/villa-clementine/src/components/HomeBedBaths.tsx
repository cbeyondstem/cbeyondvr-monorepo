import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import BedsIcon from '../assets/img/bedroomsIcon.comp.svg'
import BathsIcon from '../assets/img/bathroomIcon.comp.svg'
import SqftIcon from '../assets/img/sqftIcon.comp.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem !important',
    // '& > svg': {
    //   marginLeft: '1px',
    //   marginRight: '3px'
    // },
    // '& > span': {
    //   whiteSpace: 'nowrap'
    // },
    // '& > span > span': {
    //   fontSize: 'smaller'
    // }
    '& path': {
      fill: '#fff !important',
      stroke: '#fff !important'
    }
  },
  baths: {
    strokeWidth: '1 !important',
    marginLeft: '1px',
    marginRight: '3px'
  },
  beds: {
    '& > g > path': {
      fill: 'none !important',
      stroke: '#fff !important'
    },
    marginRight: '3px'
  }
}))

export const HomeBedBaths: React.FunctionComponent = props => {
  const classes = useStyles(props)

  return (
    <Typography align="center" variant="body1" className={classes.root}>
      <BedsIcon className={classes.beds} width="20" height="20" viewBox="0 0 24 24" />
      3&nbsp;&nbsp;
      <BathsIcon className={classes.baths} width="20" height="20" viewBox="0 0 24 24" />
      3&nbsp;&nbsp;
      <span>
        <SqftIcon width="20" height="20" viewBox="0 0 130 130" />
        &nbsp;130
        <span>
          &nbsp;m<sup>2</sup>
        </span>
      </span>
    </Typography>
  )
}
