import * as _ from 'lodash'
import * as React from 'react'
import Img from 'gatsby-image'
import { style } from 'typestyle'

import { Container } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { Carousel as CarouselBase } from '../../components/ui/Carousel'

import { ImageItemProps } from '../../types/interfaces'
import { AllImgConsumer } from '../../components/content/AllImages'

export interface CarouselViewProps {
  path: string
}

const useStyles = makeStyles({
  caption: {
    fontSize: '10px !important',
  },
})

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  const { path } = props
  const classes = useStyles(props)
  const renderImage = (item: ImageItemProps) => {
    const {
      aspectRatio = 1.5,
      src = '',
      srcSet = '',
      sizes = '',
      ...fluid
    } = item.original
    return (
      <>
        <Img
          fluid={{ aspectRatio, src, srcSet, sizes, ...fluid }}
          className={style({
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          })}
        />
        <Paper square>
          <Typography variant="subtitle2">TITLE</Typography>
          <Typography variant="caption" className={classes.caption}>
            Paper can be used to build surface for
          </Typography>
        </Paper>
      </>
    )
  }

  return (
    <AllImgConsumer>
      {({ images }) => {
        const viewImages = images.filter(img => img.path.search(path) > -1)
        return (
          <Container>
            <CarouselBase images={viewImages} renderImage={renderImage} />
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
