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
    <Layout location={location} title="INTERIORS">
      <CarouselView path="interiors" images={_.get(orderedImages, 'interiors', null)} captions />
      <Box m={8} />
      <Typography variant="h4">INTERIORS</Typography>
      <Table className={classes.table}>
        <TableRow>
          <TableCell align="right">1989 -</TableCell>
          <TableCell>CAFE BASTILLE, 22 Belden Place, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">1999 -</TableCell>
          <TableCell>METRO CAFE, 319 Divisadero Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2004 -</TableCell>
          <TableCell>KICTCHEN, Private Apartment, Pacific Heights, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2005 -</TableCell>
          <TableCell>GAR&Ccedil;ON RESTAURANT, 1101 Valencia Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2005 -</TableCell>
          <TableCell>ZIG ZAG RESTAURANT, 476 Castro Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2006 -</TableCell>
          <TableCell>CAFE CLAUDE/Bar Back Shelving/Lighting, 7 Claude Lane, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2006 -</TableCell>
          <TableCell>AMELIE WINE BAR/LOUNGE, 1754 Polk Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2007 -</TableCell>
          <TableCell>GEODESIC DOME HOUSE, 16901 Buckhorn Road, Sonora.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2008 -</TableCell>
          <TableCell>BONBON PATISSERIE, 308 Kearny Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2009 -</TableCell>
          <TableCell>BISOU (PANAM) RESTAURANT, 2367 Market Street, San Francisco.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2012 -</TableCell>
          <TableCell>AMELIE WINE BAR/RESTAURANT/LOUNGE, 22 West 8th Street, New York.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">2013 -</TableCell>
          <TableCell>BATEAU HAIR SALON, 2 Townsend Street, Suite 4B, San Francisco.</TableCell>
        </TableRow>
      </Table>
    </Layout>
  )
}

export default MyPage
