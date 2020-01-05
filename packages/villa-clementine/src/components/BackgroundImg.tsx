import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { HomeBedBaths } from './HomeBedBaths'
import BackgroundHeader from '../assets/img/esterel.jpg'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${BackgroundHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    // objectFit:"scale-down",
    // objectPosition:"0% 100%",
    minHeight: '200px',
    // lineHeight: '200px',
    verticalAlign: 'middle',
    color: '#fff !important',
    position: 'relative',
    '& > div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '150% !important'
    }
  }
}))

export const BackgroundImg: React.FunctionComponent = props => {
  const classes = useStyles(props)

  return (
    <Typography align="center" variant="body1" className={classes.background}>
      <div>
        Maison de vacances à la Roquette/Siagne (06)
        <HomeBedBaths />
      </div>
    </Typography>
  )
}
