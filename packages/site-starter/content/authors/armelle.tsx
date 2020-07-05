import * as React from 'react'
import { Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { Brand } from '../../src/layouts/Brand'

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

export const Title: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const justify = 'flex-start'
  const alignItems = 'flex-start'
  return (
    <Grid className={classes.grid} container spacing={1} justify={justify} alignItems={alignItems} direction="row">
      <Grid item xs={3} md={3}>
        <Brand />
      </Grid>
      <Grid item xs={8} md={6}>
        Founder
        <br />& Coding-for-Science Tutor
      </Grid>
    </Grid>
  )
}
