import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import BedsIcon from '../assets/img/bedroomsIcon.comp.svg'
import BathsIcon from '../assets/img/bathroomIcon.comp.svg'
import SqftIcon from '../assets/img/sqftIcon.comp.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem !important',
    display: 'flex',
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
    },
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
  },
  svgWithText: {
    display: 'inline-flex',
    alignSelf: 'center',
    '& svg': {
      paddingRight: theme.spacing(0.5),
      top: '0em',
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

export const HomeBedBaths: React.FunctionComponent = props => {
  const classes = useStyles(props)
  const theme = useTheme()
  const iconSize = theme.spacing(4)
  return (
    <div className={classes.root}>
      <div className={classes.svgWithText}>
        <BedsIcon className={classes.beds} width={iconSize} height={iconSize} viewBox="0 0 24 24" />
        <span>3</span>
      </div>
      <div className={classes.svgWithText}>
        <BathsIcon className={classes.baths} width={iconSize} height={iconSize} viewBox="0 0 24 24" />
        <span>3</span>
      </div>
      <div className={classes.svgWithText}>
        <SqftIcon width={iconSize} height={iconSize} viewBox="0 0 130 130" />
        <span>140m</span>
        <sup>2</sup>
      </div>
    </div>
  )
}
