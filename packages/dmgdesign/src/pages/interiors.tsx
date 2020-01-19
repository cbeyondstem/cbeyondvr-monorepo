import * as _ from 'lodash'
import * as React from 'react'
import { PageProps, CarouselView } from '@cbeyond/ui-kit'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Table, TableCell, TableRow } from '@material-ui/core'

import { orderedImages } from '../../tools/image-list'
import { Layout } from '../layouts'

const useStyles = makeStyles({
  table: {
    maxWidth: '95vw',
    display: 'block',
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
    </Layout>
  )
}

export default MyPage
