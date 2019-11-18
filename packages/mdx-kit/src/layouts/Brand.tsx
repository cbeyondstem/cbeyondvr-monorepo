import * as React from 'react'

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { SiteConfig } from 'components/SiteConfig'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brand: {
      color: theme.palette.primary.main,
      textTransform: 'none',
      '& svg': {
        marginBottom: theme.spacing(-0.3)
      }
      // '& >svg:nth-child(3)': {
      //   fill: '#fcfcfc !important',
      //   stroke: 'transparent !important',
      //   marginLeft: '1px',
      //   marginRight: '3px'
      // }
    }
  })
)
export const Brand = () => {
  const classes = useStyles({})
  const theme = useTheme()

  return (
    <span className={classes.brand}>
      <SiteConfig.Icon width={theme.spacing(4)} height={theme.spacing(4)} />
      CBeyond<span style={{ color: '#ffa800' }}>S</span>
      <span style={{ color: '#1fd2ff' }}>T</span>
      <span style={{ color: '#ff007f' }}>E</span>
      <span style={{ color: '#00d400' }}>M</span>
    </span>
  )
}
