/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import PropTypes from 'prop-types'
import { uid } from 'react-uid'

import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { MDXProvider } from '@mdx-js/react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  List,
  ListItemText
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { MDXLayoutComponents } from './layout'

const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell)

const caretRight = '"\\25B8"'
const whiteCircle = '"\\25CB"'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
    '& > thead > tr > th': {
      borderLeftColor: theme.palette.grey[300],
      borderLeftStyle: 'solid'
    }
  },
  row: {
    '& > td': {
      borderLeftColor: theme.palette.grey[300],
      borderLeftStyle: 'solid'
    },
    '& > td > ul > div': {
      paddingLeft: '0px !important'
    }
  },
  header: { color: theme.palette.primary.main },
  em: { backgroundColor: red[100] },
  li: {
    '&:before': {
      content: whiteCircle,
      fontSize: 'x-small',
      paddingRight: '8px'
      // color: theme.palette.primary.main
    }
  }
}))

export const FeatMap = props => {
  const classes = useStyles(props)
  const { children } = props
  const addCell = false
  let addAlert = false
  const rowEl = 'h2'
  const rowRawNames = []
  const rowItems = []
  children.forEach(child => {
    if (child.props.originalType === rowEl) {
      rowRawNames.push(child.props.children)
      rowItems.push([])
    } else if (rowItems.length === 0) {
      console.alert('FeatMap malformed: the first line must always be a second-level header ##')
      addAlert = true
    } else {
      rowItems[rowItems.length - 1].push(child)
    }
  })

  const rowNames = rowRawNames.map(r => {
    if (r.toLowerCase().search('route') > -1) {
      return 'Route Guidance'
    }
    if (r.toLowerCase().search('lane') > -1) {
      return 'Virtual Lane'
    }
    if (r.toLowerCase().search('strategy') > -1) {
      return 'Strategy Routing'
    }
    if (r.toLowerCase().search('selection') > -1) {
      return 'Maneuver Selection'
    }
    if (r.toLowerCase().search('decision') > -1) {
      return 'Maneuver Selection'
    }
    if (r.toLowerCase().search('execution') > -1) {
      return 'Maneuver Execution'
    }
    return r
  })
  return (
    <Box p={2}>
      <Paper className={classes.root}>
        {addAlert ? <em>Feature Map malformed: all text before the first second level header is ignored</em> : null}
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {rowNames.map((r, idx) => (
                <StyledTableCell key={uid(r, idx)}>{r}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              {rowItems.map((r, idx) => (
                <StyledTableCell key={uid(r, idx)}>{r}</StyledTableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}

FeatMap.propTypes = {
  children: PropTypes.node.isRequired
}
