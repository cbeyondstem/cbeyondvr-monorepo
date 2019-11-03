import * as _ from 'lodash'
import * as React from 'react'
import Img from 'gatsby-image'
import { style, TypeStyle } from 'typestyle'

import { ImageSharpFluidFilterInput } from 'types/gatsby-graphql-types.d.ts'
import { ImgProvider } from 'components/ImgProvider'
import { Carousel as CarouselBase } from '@cbeyond/ui-kit/src/components/Carousel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

/// <reference path="../../types/react-image-gallery.d.ts"/>
import { ImageItemProps } from 'react-image-gallery'

export interface CarouselViewProps {
  path: string
}

const useStyles = makeStyles({
  caption: {
    fontSize: '10px !important'
  }
})

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  const { path } = props
  const classes = useStyles(props)
  const renderImage = (item: ImageItemProps) => (
    <>
      <Img
        fluid={item.original}
        className={style({
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        })}
      />
      <Paper square>
        <Typography variant="subtitle2">TITLE</Typography>
        <Typography variant="caption" className={classes.caption}>
          Paper can be used to build surface for many and more of your application
        </Typography>
      </Paper>
    </>
  )

  return (
    <ImgProvider.Consumer>
      {({ images }) => {
        const viewImages = images.filter(img => img.path.search(path) > -1)
        return <CarouselBase images={viewImages} renderImage={renderImage} />
      }}
    </ImgProvider.Consumer>
  )
}
