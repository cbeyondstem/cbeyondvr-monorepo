import * as React from 'react'

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { SiteConfig, BrandProps } from '@cbeyond/ui-kit'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brand: {
      // color: theme.palette.primary.main,
      textTransform: 'none', // prevent brand name to be upper cased
      display: 'inline-flex',
      alignSelf: 'center',
      '& svg': {
        // marginBottom: theme.spacing(-2),
        paddingRight: theme.spacing(0.5),
        top: '0.125em',
        position: 'relative'
      }
      // "& p": {
      //   position: "absolute",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translate(-50%, -50%)"
      // }
      // '& >svg:nth-child(3)': {
      //   fill: '#fcfcfc !important',
      //   stroke: 'transparent !important',
      //   marginLeft: '1px',
      //   marginRight: '3px'
      // }
    }
  })
)
export const Brand = (props: BrandProps) => {
  const { type } = props
  const classes = useStyles({})
  const theme = useTheme()

  return type === 'header' ? (
    <div className={classes.brand}>
      <SiteConfig.Icon width={theme.spacing(6)} height={theme.spacing(6)} />
      <p>Villa Clémentine</p>
    </div>
  ) : (
    <div className={classes.brand}>
      <SiteConfig.Icon width={theme.spacing(6)} height={theme.spacing(6)} />
    </div>
  )
}
