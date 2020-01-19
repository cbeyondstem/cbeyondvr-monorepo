import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { Container, Box, useTheme, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { getThemeProps } from '@material-ui/styles'
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
  thumb?: boolean
  captions?: boolean
  backgroundColor?: string
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
  const isLandscape = useMediaQuery('(orientation: landscape)')
  const { path, images: imgList, thumb = false, captions = false } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const wsize = useWindowSize()
  const renderImage = (maxWidth: number) => (item: ImageItemProps) => {
    const { Svg: SvgRaw } = item.original.desktop as SvgProps
    // const presWidth = isLandscape
    //   ? item.original.desktop.presentationWidth
    //   : item.original.mobile.presentationWidth
    return (
      <Container className={classes.imgContainer}>
        {isLandscape ? null : <Box height={(wsize.width * 0.9) / 1.4 / 2} />}
        <Box
          className={classes.flex}
          width={wsize.width * (isLandscape ? 0.7 : 0.9)}
          height={(wsize.width * (isLandscape ? 0.7 : 0.9)) / 1.4}
        >
          <SvgRaw />
        </Box>
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
            <Typography
              align="center"
              variant="caption"
              className={classes.caption}
            >
              {(item.original.caption || item.original.path)
                .split(',')
                .map((t: string, idx: number) => (
                  <div key={uid(t, idx)}>{t}</div>
                ))}
            </Typography>
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
              thumb={false}
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
            />
          </Container>
        )
      }}
    </AllSvgConsumer>
  )
}
