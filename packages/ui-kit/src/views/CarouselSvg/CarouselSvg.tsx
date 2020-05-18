import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Theme,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// import { Carousel as CarouselBase } from '../../components/ui/Carousel/Carousel2'
import { Carousel as CarouselBase } from 'react-responsive-carousel'
import classNames from 'classnames'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import { useTimeout } from '../../hooks/timeout'
import {
  AllSvgConsumer,
  AllSvgProps,
  SvgProps,
  hastParse,
} from '../../components/content/AllSvg'
import { SvgLazy } from './SvgLazy'

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
  const currentKey = keys.reduce((output, key) => {
    const matches = useMediaQuery(theme.breakpoints.up(key))
    return !output && matches ? key : output
  }, null)
  if (currentKey === null) {
    return null
  }
  // console.log(`useWidth ${currentKey} ${theme.breakpoints.values[currentKey]}`)
  return theme.breakpoints.values[currentKey]
}
const useStyles = makeStyles(theme => {
  return {
    root: {
      paddingLeft: '0',
      paddingRight: '0',
      '& div.MuiContainer-root': {
        paddingLeft: '0',
        paddingRight: '0',
      },
      '& div.carousel .carousel-status': {
        fontSize: '12px',
      },
      '& button.control-arrow:before': {
        borderTop: 'none', // '12px solid transparent',
        borderBottom: 'none', // '12px solid transparent',
        color: '#fff',
        fontSize: '30px',
        width: 'auto',
        height: 'auto',
      },
      '& button.control-next.control-arrow:before': {
        borderLeft: 'none', // '12px solid #fff',
        content: '"\\232a"',
        margin: '0 -15px 0 7px',
      },
      '& button.control-prev.control-arrow:before': {
        borderRight: 'none', // '12px solid #fff',
        content: '"\\2329"',
        margin: '0 7px 0 -15px',
      },
      '& button.control-arrow.play-button': {
        top: 'auto',
        bottom: '3%',
        right: '40px',
      },
      '& button.control-arrow.play-button:before': {
        margin: '0',
      },
      // '& button.control-arrow.pause-button': {
      //   top: 'auto',
      //   bottom: '3%',
      //   right: '3%',
      // },
      // '& button.control-arrow.play-button:before': {
      //   content: '"\\25B6"',
      //   margin: '0 7px',
      // },
      // '& button.control-arrow.pause-button:before': {
      //   content: '"\\23F8\\FE0F"',
      //   margin: '0 7px',
      // },
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
  // let isLandscape = useMediaQuery('(orientation: landscape)')
  const {
    path,
    images: imgList,
    showPlayButton = true,
    autoplay = false,
    captions = false,
    renderHtml = renderHtmlDefault,
    // imgOrientation = 'Responsive',
  } = props
  const theme = useTheme()
  const mediaWidth = useWidth(theme)
  const { width } = useWindowSize()
  let boxw: number
  if (mediaWidth === null) {
    boxw = 0
  } else if (mediaWidth === 0) {
    boxw = width - 30
  } else {
    boxw = mediaWidth - 30
  }
  const classes = useStyles(props)

  const noop = () => null as React.ReactChild[]
  const [playing, togglePlaying] = React.useState(autoplay)
  const [slideIndex, setSlideIndex] = React.useState(0)
  const [slideLoads, setSlideLoads] = React.useState({ 0: true, 1: true })

  const onPlayButton = () => {
    togglePlaying(!playing)
  }
  const onChange = (index: number, item: React.ReactNode) => {
    setSlideIndex(index)
    setSlideLoads({ ...slideLoads, [index + 1]: true })
    // console.log(`onChange ${index} ${JSON.stringify(slideLoads)}`)
  }
  const renderArrowNext = (
    onClickHandler: () => void,
    hasNext: boolean,
    label: string
  ) => (
    <>
      <button
        type="button"
        aria-label={label}
        className={classNames({
          'control-arrow control-next': true,
          'control-disabled': !hasNext,
        })}
        onClick={onClickHandler}
      />
      {showPlayButton ? (
        <IconButton
          aria-label={playing ? 'pause autoplay' : 'start autoplay'}
          edge="end"
          className={classNames('control-arrow', 'play-button')}
          onClick={onPlayButton}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      ) : null}
    </>
  )
  if (showPlayButton || autoplay) {
    useTimeout(() => {
      if (playing) {
        setSlideIndex(slideIndex + 1)
      }
    }, 2000)
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
            {mediaWidth !== null ? (
              <CarouselBase
                // renderThumbs={thumb ? renderThumbs : noop}
                renderIndicator={noop}
                renderArrowNext={renderArrowNext}
                swipeable={false}
                showThumbs={false}
                interval={2000}
                transitionTime={350}
                onChange={onChange}
                selectedItem={slideIndex}
                infiniteLoop
              >
                {sortedViewSvgList.map((image: SvgProps, idx) => (
                  <SvgLazy
                    key={uid(image.id)}
                    boxw={boxw}
                    captions={captions}
                    renderHtml={renderHtml}
                    load={_.get(slideLoads, idx, false)}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...image}
                  />
                ))}
              </CarouselBase>
            ) : (
              <div />
            )}
          </Container>
        )
      }}
    </AllSvgConsumer>
  )
}

// <CarouselBase
//   images={sortedViewSvgList.map(
//     s =>
//       ({
//         desktop: s,
//         thumb: null,
//         path: s.path,
//         title: s.title,
//         caption: s.caption,
//       } as CarouselImgProps)
//   )}
//   renderImage={renderImage}
//   showPlayButton={showPlayButton}
//   autoplay={autoplay}
//   thumb={false}
// />
