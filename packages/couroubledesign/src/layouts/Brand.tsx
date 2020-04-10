import * as React from 'react'

import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { BrandProps } from '@cbeyond/ui-kit'
import { Logo, Icon } from '../gatsby/gatsby-svg/siteSvg.comp.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.primary.main,
      textTransform: 'none'
      // '& >svg:first-child': {
      //   marginBottom: theme.spacing(-0.5)
      // },
      // '& >svg:nth-child(2)': {
      //   fill: '#fcfcfc !important',
      //   stroke: 'transparent !important',
      //   marginLeft: '1px',
      //   marginRight: theme.spacing(2),
      //   marginBottom: theme.spacing(0.5)
      // }
    },
    footer: {
      '& >svg:first-child': {
        marginBottom: theme.spacing(-2)
      }
    }
  })
)
export const Brand = (props: BrandProps) => {
  const { type } = props
  const classes = useStyles({})
  const theme = useTheme()

  return type === 'header' ? (
    <span className={classes.header}>
      <Logo width="192px" height="60px" />
    </span>
  ) : (
    <span className={classes.footer}>
      <Icon width={theme.spacing(6)} height={theme.spacing(6)} />
    </span>
  )
}
