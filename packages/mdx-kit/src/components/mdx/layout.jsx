/* eslint-disable react/jsx-props-no-spreading */
import _ from 'lodash'
import React from 'react'
import { Typography, Box, Paper, Container, List, ListItemText, Table, GridList, GridListTile } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const caretRight = '"\\25B8"'
const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
}

const useStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  container: {
    ...containerFluid,
    '@media (min-width: 576px)': {
      maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    }
  },
  table: {
    minWidth: 700,
    '& > thead > tr > th': {
      borderLeftColor: theme.palette.grey[300],
      borderLeftStyle: 'solid'
    }
  },
  paper: {
    '& svg:': {
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#000'
    }
  },
  header: {
    color: theme.typography.h1.color,
    overflowWrap: 'break-word'
  },
  em: { backgroundColor: red[100] },
  li: {
    '&:before': {
      content: caretRight,
      paddingRight: '8px',
      color: theme.palette.primary.main
    }
  }
}))

const StyledElem = (el, bookmarkIdx = '') => p => {
  const classes = useStyles(p)
  const { children, ...others } = p
  // console.log(`Generating element ${el}`)

  if (el === 'ul') {
    return <List>{children}</List>
  }
  if (el === 'ol') {
    return <List>{children}</List>
  }
  if (el === 'li') {
    return (
      <ListItemText inset className={classes.li}>
        {children}{' '}
      </ListItemText>
    )
  }
  if (el === 'p') {
    return (
      <Box p={2}>
        <Typography variant="body1">{children}</Typography>
      </Box>
    )
  }
  if (el === 'pre') {
    return (
      <Container className={classes.container}>
        <GridList cols={1} cellHeight="auto">
          <pre {...others}>{children}</pre>
        </GridList>
      </Container>
    )
  }
  if (el === 'em') {
    return <em className={classes.em}>{children}</em>
  }
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(el)) {
    return (
      <Box p={2} id={_.kebabCase(children) + bookmarkIdx}>
        <Typography variant={el} className={classes.header}>
          {children}
        </Typography>
      </Box>
    )
  }
  const element = React.createElement(el, p)
  return <Box p={2}>{element}</Box>
}

export const MDXLayoutComponents = {
  h1: StyledElem('h3'),
  h2: StyledElem('h4'),
  h3: StyledElem('h5'),
  h4: StyledElem('h6'),
  h5: StyledElem('h6'),
  h6: StyledElem('h6'),
  p: StyledElem('p'),
  // ol: StyledElem('ol'),
  // ul: StyledElem('ul'),
  // li: StyledElem('li'),
  pre: StyledElem('pre'),
  em: StyledElem('em')
  // table: p => <table className={css.mdxTable} {...p} />,
  // tr: p => <tr className={css.mdxTableRow} {...p} />,
}
