import * as _ from 'lodash'
import * as React from 'react'
import { Container, Box, useMediaQuery } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'
import { parse as svgParse, HASTElementProps } from 'svg-parser'
import { SvgProps, hastParse } from '../../components/content/AllSvg'

interface SVGPanZoomProps {
  content: string
  viewBox: string
  boxw: number
  boxh: number
  boxar: number
  load: boolean
}

const svgLoading = (
  <svg
    version="1.1"
    id="L3"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 0 0"
  >
    <circle
      fill="none"
      stroke="#fff"
      strokeWidth="4"
      cx="50"
      cy="50"
      r="44"
      style={{ opacity: 0.5 }}
    />
    {/* <circle fill="#fff" stroke="#e74c3c" strokeWidth="3" cx="8" cy="54" r="6">
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite"
      />
    </circle> */}
  </svg>
)

const { useRef, useEffect } = React

const useStyles = makeStyles(theme => {
  const color =
    theme.palette.type === 'light'
      ? theme.palette.primary.light
      : theme.palette.primary.dark
  // const colorSecondary = theme.palette.secondary.dark
  return {
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
      // backgroundColor: (props: CarouselViewProps) => props.backgroundColor,
    },
  }
})
const SVGPanZoom: React.FunctionComponent<SVGPanZoomProps> = props => {
  const { content, viewBox, boxw, boxh, boxar, load } = props
  const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)

  let hastElems = null
  if (load) {
    // hastElems = React.useMemo(() => {
    //   const hast: HASTElementProps = svgParse(content)
    //   return hastParse(hast.children[0].children)
    // }, [content])
    const hast: HASTElementProps = svgParse(content)
    hastElems = hastParse(hast.children[0].children)
  }
  const aspectRatio = w / h
  let svgw: number
  let svgh: number
  if (aspectRatio < boxar) {
    svgh = boxh - 50
    svgw = Math.floor(svgh * aspectRatio)
  } else {
    svgw = boxw - 50
    svgh = Math.floor(svgw / aspectRatio)
  }
  const Viewer = useRef(null)
  useEffect(() => {
    console.log(`fit to viewer ${boxw} ${boxh} ${svgw} ${svgh}`)
    if (Viewer.current) {
      Viewer.current.fitToViewer('center', 'center')
    }
  }, [boxw, load])
  return (
    <div>
      {load ? (
        <UncontrolledReactSVGPanZoom width={svgw} height={svgh} ref={Viewer}>
          <svg viewBox={viewBox} width={svgw} height={svgh}>
            {hastElems}
          </svg>
        </UncontrolledReactSVGPanZoom>
      ) : null}
    </div>
  )
}
interface CustomSvgProps extends SvgProps {
  boxw: number
  captions: boolean
  renderHtml: (
    rawHTML: string | React.ReactNode,
    idx?: number,
    key?: string
  ) => React.ReactNode
  load: boolean
}
const CustomSvg: React.FunctionComponent<CustomSvgProps> = props => {
  const containerAspectRatio = 1.5
  const {
    boxw,
    captions,
    renderHtml,
    load,
    caption,
    title,
    path,
    content,
    viewBox,
  } = props
  const boxh = Math.floor(boxw / containerAspectRatio)
  let captionText: string = null
  if (captions) {
    captionText = caption === '' ? null : caption || path
  }
  const isLandscape = useMediaQuery('(orientation: landscape)')
  const classes = useStyles(props)
  // console.log(`CustomSvg ${boxw} ${boxh} ${path}`)
  return (
    <Container className={classes.imgContainer}>
      <Box
        className={classes.flex}
        minWidth={boxw}
        height={boxh}
        justifyContent="center"
        alignItems="center"
      >
        <SVGPanZoom
          boxw={boxw}
          boxh={boxh}
          boxar={containerAspectRatio}
          content={content}
          viewBox={viewBox}
          load={load}
        />
      </Box>
      {captions ? (
        <div className={classes.paper}>
          <Typography align="center" variant="subtitle2">
            {renderHtml(
              title ||
                path
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
              {isLandscape ? null : <br />}
            </Typography>
          ) : null}
        </div>
      ) : null}
    </Container>
  )
}
function imagePropsAreEqual(
  prevProps: CustomSvgProps,
  nextProps: CustomSvgProps
) {
  const res =
    prevProps.path === nextProps.path &&
    prevProps.boxw === nextProps.boxw &&
    prevProps.load === nextProps.load
  // console.log(`imagePropsAreEqual ${nextProps.path} res=${res}`)
  return res
}
export const SvgLazy = React.memo(CustomSvg, imagePropsAreEqual)
