/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'

import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

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

export interface FeatMapProps {
  children: React.ReactNode[]
}

export const FeatMap = (props: FeatMapProps) => {
  const classes = useStyles(props)
  const { children } = props
  let addAlert = false
  const rowEl = 'ol'
  let currentRow: string
  let currentCol: string
  let currentKey: string
  const colEl = 'h2'
  const colRawNames: string[] = []
  const rowNames: string[] = []
  const items: { [rowCol: string]: (JSX.Element | string)[] } = {}
  children.forEach((child: JSX.Element) => {
    if (child.props.originalType === rowEl) {
      if (colRawNames.length === 0) {
        colRawNames[0] = 'variant'
      } else if (colRawNames[0] !== 'variant') {
        colRawNames.splice(0, 0, 'variant')
      }
      currentCol = 'variant'
      currentRow = `${child.props.children.props.children}`
      currentKey = `[${currentRow},${currentCol}]`
      if (!(currentKey in items)) {
        items[currentKey] = []
      }
      items[currentKey].push(<strong>{currentRow}</strong>)
      rowNames.push(currentRow)
    } else if (child.props.originalType === colEl) {
      currentCol = `${child.props.children}`
      if (colRawNames.indexOf(currentCol) === -1) {
        colRawNames.push(currentCol)
      }
      if (currentRow === undefined) {
        currentRow = ''
        rowNames.push(currentRow)
      }
      currentKey = `[${currentRow},${currentCol}]`
      items[currentKey] = []
    } else if (!currentKey || !(currentKey in items)) {
      // alert('FeatMap malformed: the first line must always be a second-level header ##')
      addAlert = true
    } else {
      items[currentKey].push(child)
    }
  })

  const colNames = colRawNames.map(r => {
    if (r.toLowerCase().search('route') > -1) {
      return 'Route Guidance'
    }
    if (r.toLowerCase().search('variant') > -1) {
      return 'SUT Variant'
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
              {colNames.map((c, idx) => (
                <StyledTableCell key={uid(c, idx)}>{c}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowNames.map((r, ridx) => (
              <TableRow key={uid(r, ridx)} className={classes.row}>
                {colRawNames.map((c, cidx) => {
                  return <StyledTableCell key={uid(c, cidx)}>{items[`[${r},${c}]`]}</StyledTableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}
