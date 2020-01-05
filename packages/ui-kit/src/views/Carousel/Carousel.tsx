import * as _ from 'lodash'
import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import { Container, Paper, useTheme, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { Carousel as CarouselBase } from '../../components/ui/Carousel'

import { ImageItemProps } from '../../types/interfaces'
import { AllImgConsumer } from '../../components/content/AllImages'
import { ImageSharpFluid } from '../../types/gatsby-graphql-types'

export interface CarouselViewProps {
  path?: string
  images?: string[]
  thumb?: boolean
  captions?: boolean
}

const useStyles = makeStyles(theme => {
  const color =
    theme.palette.type === 'light'
      ? theme.palette.primary.light
      : theme.palette.primary.dark
  const colorSecondary = theme.palette.secondary.dark
  return {
    root: {
      paddingLeft: '0',
      paddingRight: '0',
      '@media (min-width: 1200px)': {
        maxWidth: '1100px !important',
      },
      '& div.MuiContainer-root': {
        paddingLeft: '0',
        paddingRight: '0',
      },
      '& div.image-gallery-slide': {
        backgroundColor: `${color} !important`,
      },
      '& a.image-gallery-fullscreen-button:hover::before': {
        color: `${colorSecondary} !important`,
      },
      '& a.image-gallery-play-button:hover::before': {
        color: `${colorSecondary} !important`,
      },
      '& a.image-gallery-left-nav:hover::before': {
        color: `${colorSecondary} !important`,
      },
      '& a.image-gallery-right-nav:hover::before': {
        color: `${colorSecondary} !important`,
      },
      '& a.image-gallery-thumbnail.active': {
        border: `4px solid ${colorSecondary}`,
      },
      '@media (max-width: 768px)': {
        'a.image-gallery-thumbnail.active': {
          border: `3px solid ${colorSecondary}`,
        },
      },
    },
    caption: {
      fontSize: '10px !important',
    },
    paper: {
      backgroundColor: `${color} !important`,
      boxShadow: 'none',
    },
    imgContainer: {
      backgroundColor: `${color} !important`,
      color: `${color} !important`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '0',
      paddingRight: '0',
    },
    img: {
      maxHeight: '70vh !important',
    },
  }
})

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  const isLandscape = useMediaQuery('(orientation: landscape)')
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
  const { path, images: imgList, thumb = true, captions = false } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const renderImage = (maxWidth: number) => (item: ImageItemProps) => {
    let sources
    if (item.original.mobile) {
      sources = isLandscape
        ? fixItem(item.original.desktop)
        : fixItem(item.original.mobile)
    } else {
      sources = fixItem(item.original.desktop)
    }

    // const presWidth = isLandscape
    //   ? item.original.desktop.presentationWidth
    //   : item.original.mobile.presentationWidth
    return (
      <Container className={classes.imgContainer}>
        <Container>
          <Img
            className={classes.img}
            fluid={sources}
            title={item.original.path}
            backgroundColor={
              theme.palette.type === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark
            }
            style={{
              maxWidth,
              margin: '0 auto', // Used to center the image
            }}
          />
        </Container>
        {captions ? (
          <Paper square className={classes.paper}>
            <Typography align="center" variant="subtitle2">
              {item.original.path
                .split('/')
                .slice(-1)
                .join('/')
                .toUpperCase()}
            </Typography>
            <Typography
              align="center"
              variant="caption"
              className={classes.caption}
            >
              {item.original.path}
            </Typography>
          </Paper>
        ) : null}
      </Container>
    )
  }

  return (
    <AllImgConsumer>
      {({ images, maxWidth = 1200 }) => {
        const viewImages = images.filter(img =>
          path
            ? img.path.search(path) > -1
            : imgList.includes(img.path.split('/').slice(-1)[0])
        )
        return (
          <Container className={classes.root}>
            <CarouselBase
              images={viewImages}
              renderImage={renderImage(maxWidth)}
              thumb={thumb}
            />
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
