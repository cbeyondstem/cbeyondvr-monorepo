import * as _ from 'lodash'
import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Table, TableCell, TableRow } from '@material-ui/core'

import { orderedImages } from '../../tools/image-list'
import { Layout } from '../layouts'

const useStyles = makeStyles({
  table: {
    '& tr > td:first-child': {
      width: '20vw',
      paddingRight: '0'
    }
  }
})

export const MyPage = (props: PageProps) => {
  const classes = useStyles(props)
  const { location } = props
  return (
    <Layout location={location} title="FURNITURE/LIGHTS">
      <CarouselView path="furniture" images={_.get(orderedImages, 'furniture', null)} captions />
      {false && (
        <>
          <Box m={8} />
          <Typography variant="h4">FURNITURE/LIGHTS</Typography>
          <Table className={classes.table}>
            <TableRow>
              <TableCell align="right">2013 -</TableCell>
              <TableCell>RECEPTION DESK, Bateau Hair Salon, 2 Townsend Street, Suite 4B, San Francisco.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2013 -</TableCell>
              <TableCell>C2H5OH/PENDANT LAMP, Private Home, Pacific Heights, San Francisco.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2013 -</TableCell>
              <TableCell>SERPENTINE/BOOK SHELF, Private Home, Cole Valley, San Francisco.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2013 -</TableCell>
              <TableCell>RECEPTION DESK, Next World Capital, 836 Montgomery Street, San Francisco.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2012 -</TableCell>
              <TableCell>STUDENT DESK, BED CONSOLE, Private Home, Pacific Heights, San Francisco.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2012 -</TableCell>
              <TableCell>2xC2H5OH/CHANDELIER, SCONCES, Am&eacute;lie Wine Bar, 22 W. 8th Street, New York.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">2009 -</TableCell>
              <TableCell>KIDS PENDERIE, Private Home, Cole Valley, San Francisco.</TableCell>
            </TableRow>
          </Table>
        </>
      )}
    </Layout>
  )
}

export default MyPage
