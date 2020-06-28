/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import {
  Typography,
  Box,
  List,
  ListItemText,
  GridList,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

const caretRight = '"\\25B8"'

export const mdxLayoutStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  table: {
    minWidth: 700,
    '& > thead > tr > th': {
      borderLeftColor: theme.palette.grey[300],
      borderLeftStyle: 'solid',
    },
  },
  paper: {
    '& svg:': {
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#000',
    },
  },
  header: {
    color: theme.palette.primary.contrastText,
    // backgroundColor: theme.palette.primary.dark,
    overflowWrap: 'break-word',
  },
  em: {
    backgroundColor: red[100],
  },
  hr: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  li: {
    '&.spanSimple > span::before': {
      content: caretRight,
      paddingRight: theme.spacing(2),
      color: theme.palette.primary.dark,
    },
    '&.spanSimple': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '&.spanComplex > span > div::before': {
      content: caretRight,
      paddingRight: theme.spacing(2),
      color: theme.palette.primary.dark,
    },
    '&.spanComplex > span > div': {
      paddingLeft: theme.spacing(2),
      padding: theme.spacing(0, 2, 0, 0),
    },
  },
}))

const StyledElem: (
  classes: Record<
    'gridList' | 'table' | 'paper' | 'header' | 'em' | 'li' | 'hr',
    string
  >,
  el: React.ElementType,
  bookmarkIdx?: string
) => React.FunctionComponent<React.ComponentPropsWithRef<React.ElementType>> = (
  classes,
  el,
  bookmarkIdx = ''
) => {
  // console.log(`Generating element ${el}`)
  if (el === 'ul') {
    return (p: React.ComponentPropsWithRef<'ul'>) => <List>{p.children}</List>
  }
  if (el === 'ol') {
    return (p: React.ComponentPropsWithRef<'ol'>) => (
      <Typography variant="body1">
        <ol>{p.children}</ol>
      </Typography>
    )
  }
  if (el === 'li') {
    return (p: React.ComponentPropsWithRef<'li'>) => {
      const { children } = p
      if (
        typeof children === 'string' ||
        (children instanceof Array && children.length > 1) ||
        (typeof children === 'object' &&
          (children as React.ReactElement).props.originalType === 'a')
      ) {
        return (
          <ListItemText inset className={classnames(classes.li, 'spanSimple')}>
            {children}
          </ListItemText>
        )
      }
      return (
        <ListItemText inset className={classnames(classes.li, 'spanComplex')}>
          {children}
        </ListItemText>
      )
    }
  }
  if (el === 'p') {
    return (p: React.ComponentPropsWithRef<'p'>) => (
      <Box p={2}>
        <Typography variant="body1">{p.children}</Typography>
      </Box>
    )
  }
  if (el === 'pre') {
    return (p: React.ComponentPropsWithRef<'pre'>) => {
      const { children, ...others } = p
      return (
        <GridList cols={1} cellHeight="auto">
          <pre {...others}>{children}</pre>
        </GridList>
      )
    }
  }
  if (el === 'em') {
    return (p: React.ComponentPropsWithRef<'em'>) => (
      <em className={classes.em}>{p.children}</em>
    )
  }
  if (el === 'hr') {
    return () => <hr className={classes.hr} />
  }
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(`${el}`)) {
    return (p: React.ComponentPropsWithRef<'h1'>) => (
      <Box p={2} id={_.kebabCase(`${p.children}`) + bookmarkIdx}>
        <Typography
          variant={el as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
          className={classes.header}
        >
          {p.children}
        </Typography>
      </Box>
    )
  }
  return () => null
}

export const MDXLayoutComponents = (
  classes: Record<
    'gridList' | 'table' | 'paper' | 'header' | 'em' | 'li' | 'hr',
    string
  >
) => ({
  h1: StyledElem(classes, 'h3'),
  h2: StyledElem(classes, 'h4'),
  h3: StyledElem(classes, 'h5'),
  h4: StyledElem(classes, 'h6'),
  h5: StyledElem(classes, 'h6'),
  h6: StyledElem(classes, 'h6'),
  p: StyledElem(classes, 'p'),
  ol: StyledElem(classes, 'ol'),
  ul: StyledElem(classes, 'ul'),
  li: StyledElem(classes, 'li'),
  hr: StyledElem(classes, 'hr'),
  pre: StyledElem(classes, 'pre'),
  em: StyledElem(classes, 'em'),

  // table: p => <table className={css.mdxTable} {...p} />,
  // tr: p => <tr className={css.mdxTableRow} {...p} />,
})
