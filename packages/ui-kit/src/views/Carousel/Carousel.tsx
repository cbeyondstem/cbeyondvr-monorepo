import * as _ from 'lodash'
import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import { Container, Paper, useTheme, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import {
  Carousel as CarouselBase,
  CarouselImgProps,
} from '../../components/ui/Carousel'

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
      '& button.image-gallery-play-button': {
        bottom: (props: CarouselViewProps) =>
          props.captions ? theme.spacing(8) : 0,
        transform: 'none', // 'translateY(-70%)',
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
      textAlign: 'center',
    },
    paper: {
      backgroundColor: `${color} !important`,
      color: theme.palette.primary.contrastText,
      boxShadow: 'none',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
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
            title={item.original.title || item.original.path}
            alt={item.original.title || item.original.path}
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
          <div className={classes.paper}>
            <Typography align="center" variant="subtitle2">
              {item.original.title ||
                item.original.path
                  .split('/')
                  .slice(-1)
                  .join('/')
                  .toUpperCase()}
            </Typography>
            <p className={classes.caption}>
              {item.original.caption || item.original.path}
            </p>
          </div>
        ) : null}
      </Container>
    )
  }

  return (
    <AllImgConsumer>
      {({ images, maxWidth = 1200 }) => {
        let selectedImages: CarouselImgProps[]
        if (path) {
          selectedImages = images.filter(img => img.path.search(path) > -1)
        } else {
          selectedImages = images
        }
        let sortedViewImages: CarouselImgProps[] = []
        if (imgList) {
          imgList.forEach(imgName => {
            const entry = _.find(
              selectedImages,
              img => imgName === img.path.split('/').slice(-1)[0]
            )
            if (entry) {
              sortedViewImages.push(entry)
            }
          })
        } else {
          sortedViewImages = selectedImages
        }
        return (
          <Container className={classes.root}>
            <CarouselBase
              images={sortedViewImages}
              renderImage={renderImage(maxWidth)}
              thumb={thumb}
            />
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
