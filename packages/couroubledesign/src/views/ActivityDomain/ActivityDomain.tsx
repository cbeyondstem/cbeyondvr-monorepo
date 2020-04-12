/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { CarouselView } from '@cbeyond/ui-kit'
import { orderedImages } from '../../../tools/image-list'
import { renderHtml } from '../../layouts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // paddingLeft: '0 !important',
    // paddingRight: '0 !important',
    // paddingBottom: `2rem`
  },
  grid: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
  title: {
    paddingBottom: '0.5rem',
    paddingTop: '2rem'
  }
}))

export interface ActivityDomainProps extends React.ComponentPropsWithRef<'div'> {
  categories: string[]
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}
export const ActivityDomain: React.FunctionComponent<ActivityDomainProps> = props => {
  const classes = useStyles(props)
  const { categories, imgOrientation } = props
  return (
    <Grid className={classes.root} container alignItems="center" justify="center" direction="row" spacing={3}>
      {categories.map((cat, catIdx) => (
        <Grid item xs={12} lg={6} key={uid(cat, catIdx)}>
          <CarouselView
            images={_.get(orderedImages, cat, null)}
            renderHtml={renderHtml}
            imgOrientation={imgOrientation}
            captions
          />
        </Grid>
      ))}
    </Grid>
  )
}
export const ActivityUnified: React.FunctionComponent<ActivityDomainProps> = props => {
  const classes = useStyles(props)
  const { categories, imgOrientation } = props
  let images: string[] = []
  categories.forEach(cat => {
    const img = _.get(orderedImages, cat, [])
    images = images.concat(img)
  })
  return <CarouselView images={images} renderHtml={renderHtml} imgOrientation={imgOrientation} captions />
}
