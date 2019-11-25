import * as _ from 'lodash'
import * as React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { FluidObject } from 'gatsby-image'
import { Container, Paper, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { Carousel as CarouselBase } from '../../components/ui/Carousel'

import { ImageItemProps } from '../../types/interfaces'
import { AllImgConsumer } from '../../components/content/AllImages'
import { ImageSharpFluid } from '../../types/gatsby-graphql-types'

export interface CarouselViewProps {
  path: string
}

const useStyles = makeStyles(theme => ({
  root: {
    '@media (min-width: 1200px)': {
      maxWidth: '1100px !important',
    },
    '& div.image-gallery-slide': {
      backgroundColor: `${theme.palette.primary.dark} !important`,
    },
  },
  caption: {
    fontSize: '10px !important',
  },
  paper: {
    backgroundColor: `${theme.palette.primary.dark} !important`,
  },
  imgContainer: {
    backgroundColor: `${theme.palette.primary.dark} !important`,
    color: `${theme.palette.primary.dark} !important`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    // overflow: 'hidden',
    // position: 'relative',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',
  },
}))

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  const fixItem: (img: ImageSharpFluid) => FluidObject = img => {
    const {
      aspectRatio = 1.5,
      src = '',
      srcSet = '',
      sizes = '',
      ...fluid
    } = img
    return { aspectRatio, src, srcSet, sizes, ...fluid }
  }
  const { path } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const renderImage = (item: ImageItemProps) => {
    const sources = [
      fixItem(item.original.mobile),
      {
        ...fixItem(item.original.desktop),
        media: `(min-width: 768px)`,
      },
    ]

    return (
      <Container className={classes.imgContainer}>
        <Container>
          <Img
            className={classes.img}
            fluid={sources}
            objectFit="scale-down"
            title={item.original.path}
            backgroundColor={
              theme.palette.type === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark
            }
          />
        </Container>
        <Paper square className={classes.paper}>
          <Typography variant="subtitle2">
            {item.original.path
              .split('/')
              .slice(-1)
              .join('/')
              .toUpperCase()}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            {item.original.path}
          </Typography>
        </Paper>{' '}
      </Container>
    )
  }

  return (
    <AllImgConsumer>
      {({ images }) => {
        const viewImages = images.filter(img => img.path.search(path) > -1)
        return (
          <Container className={classes.root}>
            <CarouselBase images={viewImages} renderImage={renderImage} />
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
