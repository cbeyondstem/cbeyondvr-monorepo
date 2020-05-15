import * as _ from 'lodash'
import * as React from 'react'
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Theme,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
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

const { useState, useEffect } = React

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
function useWidth(theme: Theme) {
  const keys = [...theme.breakpoints.keys].reverse()
  const currentKey =
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'

  return theme.breakpoints.values[currentKey]
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
      // maxWidth: '90vw',
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

export const CarouselSvg: React.FunctionComponent<CarouselViewProps> = props => {
  let isLandscape = useMediaQuery('(orientation: landscape)')
  const {
    path,
    images: imgList,
    showPlayButton = true,
    autoplay = false,
    captions = false,
    renderHtml = renderHtmlDefault,
    imgOrientation = 'Responsive',
  } = props
  const theme = useTheme()
  let boxw = useWidth(theme) - 30
  const { width } = useWindowSize()
  if (boxw < 0) {
    boxw = width - 30
  }
  const classes = useStyles(props)
  if (imgOrientation !== 'Responsive') {
    isLandscape = imgOrientation === 'Landscape'
  }

  const renderImage = () => (item: ImageItemProps) => {
    const { Svg: SvgRaw, viewBox } = item.original.desktop as SvgProps
    const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)
    const aspectRatio = w / h
    const containerAspectRatio = 1.5
    const boxh = boxw / containerAspectRatio
    let svgw
    let svgh
    if (aspectRatio < containerAspectRatio) {
      svgh = boxh
      svgw = Math.floor(svgh * aspectRatio)
    } else {
      svgw = boxw
      svgh = Math.floor(svgw / aspectRatio)
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
        <Box
          className={classes.flex}
          minWidth={boxw}
          height={boxh}
          justifyContent="center"
          alignItems="center"
        >
          <UncontrolledReactSVGPanZoom width={svgw} height={svgh}>
            <SvgRaw width={svgw} height={svgh} />
          </UncontrolledReactSVGPanZoom>
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
              renderImage={renderImage()}
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
