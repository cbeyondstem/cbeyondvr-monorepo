import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import Img, { FluidObject } from 'gatsby-image'

import { Container, useTheme, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { calc } from 'csx'
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
  showPlayButton?: boolean
  autoplay?: boolean
  captions?: boolean
  renderHtml?: (
    rawHTML: string | React.ReactNode,
    idx?: number,
    key?: string
  ) => React.ReactNode
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
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
      '& button.image-gallery-left-nav': {
        paddingTop: `0px`,
        paddingBottom: `0px`,
        top: '50%',
        bottom: 'auto',
      },
      '& button.image-gallery-right-nav': {
        paddingTop: `0px`,
        paddingBottom: `0px`,
        bottom: 'auto',
        top: '50%',
      },
      '& button.image-gallery-play-button': {
        top: '80%', // calc('100vh/2'),
        bottom: 'auto',
        transform: 'none', // 'translateY(-70%)',
        right: '0px',
        left: 'auto',
        paddingLeft: `0px`,
        paddingRight: `0px`,
      },
      '& button.image-gallery-play-button::before': {
        paddingTop: `0px`,
        paddingBottom: `0px`,
        paddingLeft: `15px`,
        paddingRight: `15px`,
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
      fontSize: '14px !important',
      minHeight: theme.spacing(16),
    },
    paper: {
      backgroundColor: `${color} !important`,
      color: theme.palette.primary.contrastText,
      boxShadow: 'none',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      maxWidth: '90vw',
      whiteSpace: 'normal',
      textAlign: 'center',
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

const renderHtmlDefault = (
  rawHTML: string | React.ReactNode,
  idx?: number,
  key?: string
) =>
  rawHTML instanceof String ? (
    React.createElement('div', {
      key,
      dangerouslySetInnerHTML: { __html: rawHTML },
    })
  ) : (
    <div key={key}>{rawHTML}</div>
  )

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  let isLandscape = useMediaQuery('(orientation: landscape)')
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
  const {
    path,
    images: imgList,
    thumb = true,
    showPlayButton = true,
    autoplay = false,
    captions = false,
    renderHtml = renderHtmlDefault,
    imgOrientation = 'Responsive',
  } = props

  const theme = useTheme()
  const classes = useStyles(props)

  if (imgOrientation !== 'Responsive') {
    isLandscape = imgOrientation === 'Landscape'
  }

  const renderImage = (maxWidth: number) => (item: ImageItemProps) => {
    let sources
    if (item.original.mobile) {
      sources = isLandscape
        ? fixItem(item.original.desktop)
        : fixItem(item.original.mobile)
    } else {
      sources = fixItem(item.original.desktop)
    }
    let captionText: string = null
    if (captions) {
      captionText =
        item.original.caption === ''
          ? null
          : item.original.caption || item.original.path
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
              {renderHtml(
                item.original.title ||
                  item.original.path
                    .split('/')
                    .slice(-1)
                    .join('/')
                    .toUpperCase()
              )}
            </Typography>
            {captionText ? (
              <Typography
                align="center"
                variant="caption"
                className={classes.caption}
              >
                {renderHtml(captionText, 1)}
              </Typography>
            ) : null}
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
              showPlayButton={showPlayButton}
              autoplay={autoplay}
            />
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
