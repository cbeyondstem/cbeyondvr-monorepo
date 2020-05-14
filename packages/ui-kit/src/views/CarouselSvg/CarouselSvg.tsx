import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { Container, Box, useTheme, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import {
  Carousel as CarouselBase,
  CarouselImgProps,
} from '../../components/ui/Carousel'

import { ImageItemProps } from '../../types/interfaces'
import {
  AllSvgConsumer,
  AllSvgProps,
  SvgProps,
} from '../../components/content/AllSvg'

export interface CarouselViewProps {
  path?: string
  images?: string[]
  showPlayButton?: boolean
  autoplay?: boolean
  captions?: boolean
  backgroundColor?: string
  renderHtml?: (
    rawHTML: string | React.ReactNode,
    idx?: number,
    key?: string
  ) => React.ReactNode
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}
const { useState, useEffect } = React

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
        // paddingTop: `0px`,
        // paddingBottom: `0px`,
        top: '50%',
        bottom: 'auto',
      },
      '& button.image-gallery-right-nav': {
        // paddingTop: `0px`,
        // paddingBottom: `0px`,
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
    flex: {
      display: 'flex',
      backgroundColor: (props: CarouselViewProps) => props.backgroundColor,
      '& svg': {
        width: '100%',
      },
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
// Hook
function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }
  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    if (!isClient) {
      return null
    }
    function handleResize() {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
export const CarouselSvg: React.FunctionComponent<CarouselViewProps> = props => {
  let isLandscape = useMediaQuery('(orientation: landscape)')
  const {
    path,
    images: imgList,
    thumb = false,
    showPlayButton = true,
    autoplay = false,
    captions = false,
    renderHtml = renderHtmlDefault,
    imgOrientation = 'Responsive',
  } = props

  const theme = useTheme()
  const classes = useStyles(props)
  const wsize = useWindowSize()
  if (imgOrientation !== 'Responsive') {
    isLandscape = imgOrientation === 'Landscape'
  }

  const renderImage = (maxWidth: number) => (item: ImageItemProps) => {
    const { Svg: SvgRaw, viewBox } = item.original.desktop as SvgProps
    const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)
    const aspectRatio = w / h
    const boxw = wsize.width * (isLandscape ? 0.7 : 0.8)
    const boxh = boxw / 1.6
    let svgw = boxw
    if (aspectRatio < 1.6) {
      svgw = (boxw * aspectRatio * 0.8) / 1.6
    } else {
      svgw = boxw * 0.8
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
        {isLandscape ? null : <Box height={(wsize.width * 0.9) / 1.6 / 2} />}
        <Box
          className={classes.flex}
          width={boxw}
          height={boxh}
          justifyContent="center"
          alignItems="center"
        >
          <SvgRaw
            width={svgw}
            height={svgw / aspectRatio}
            // style={{ border: '1px solid black' }}
          />
        </Box>
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
    <AllSvgConsumer>
      {({ svgByPath }: AllSvgProps) => {
        let selectedSvgList: SvgProps[]
        const svgList = Object.values(svgByPath)
        if (path) {
          selectedSvgList = svgList.filter(
            (svg: SvgProps) => svg.path.search(path) > -1
          )
        } else {
          selectedSvgList = svgList
        }
        let sortedViewSvgList: SvgProps[] = []
        if (imgList) {
          imgList.forEach(imgName => {
            const entry = _.find(
              selectedSvgList,
              svg => imgName === svg.path.split('/').slice(-1)[0]
            )
            if (entry) {
              sortedViewSvgList.push(entry)
            }
          })
        } else {
          sortedViewSvgList = selectedSvgList
        }
        return (
          <Container className={classes.root}>
            <CarouselBase
              images={sortedViewSvgList.map(
                s =>
                  ({
                    desktop: s,
                    thumb: null,
                    path: s.path,
                    title: s.title,
                    caption: s.caption,
                  } as CarouselImgProps)
              )}
              renderImage={renderImage(1200)}
              showPlayButton={showPlayButton}
              autoplay={autoplay}
              thumb={false}
            />
          </Container>
        )
      }}
    </AllSvgConsumer>
  )
}
