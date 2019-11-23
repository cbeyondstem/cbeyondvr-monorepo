import * as React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { LinkProps } from '../../types/interfaces'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colors: {
      color: theme.palette.primary.main,
      backgroundColor: `${theme.palette.primary.light} !important`,
      '& span': {
        color: theme.palette.primary.main,
      },
    },
    toolbar: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    svg: {
      width: '20px',
      height: '20px',
    },
    root: {
      flexGrow: 1,
    },
    brandButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'flex',
      flexGrow: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& div,h6': {
        textAlign: 'center',
      },
    },
  })
)

export interface HeaderProps {
  brand: React.ReactNode
  title: string
  subtitle?: string
  parent?: string
}

export const getHeader: (
  Link: React.FunctionComponent<LinkProps>
) => React.FunctionComponent<HeaderProps> = Link => (props: HeaderProps) => {
  const classes = useStyles(props)
  const { brand, title, subtitle, parent } = props
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.colors}>
        <Toolbar variant="dense" className={classes.toolbar}>
          {parent ? (
            <Link to={parent}>
              <IconButton size="medium" color="inherit" aria-label="back">
                <ArrowBackIosIcon className={classes.svg} />
              </IconButton>
            </Link>
          ) : (
            <div className={classes.brandButton}>{brand}</div>
          )}
          <div className={classes.title}>
            <Typography variant="h6">{title}</Typography>
            {subtitle ? (
              <Typography variant="caption">{subtitle}</Typography>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
