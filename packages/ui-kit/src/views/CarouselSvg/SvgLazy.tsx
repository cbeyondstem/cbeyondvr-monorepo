import * as _ from 'lodash'
import * as React from 'react'
import { Container, Box, useMediaQuery, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { parse as svgParse, HASTElementProps } from 'svg-parser'
import { ToolType, PositionType } from 'react-svg-pan-zoom'
import { UncontrolledSVGPanZoom } from './UncontrolledSvgPanZoom'
import { useHtmlAST } from '../../services'
import { SvgProps, hastParse } from '../../components/providers/AllSvg'
import { useTimeout } from '../../hooks/timeout'

import svgLoading from './spinning-circles'

interface SVGPanZoomProps {
  boxw: number
  boxh: number
  boxar: number
  load: boolean
  svg: SvgProps
}

const { useRef, useState, useEffect } = React

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
  const { boxw, boxh, boxar, load, svg: svgp } = props
  const { viewBox } = svgp
  const [s, e, w, h] = viewBox.match(/[\d.]+/g).map(Number)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const lg = matches && 'lg'
  // const hastElems = React.useMemo(() => {
  //   return hastParse(svgp.hast.children[0].children)
  // }, [svgp.hast])
  const [hastElems, fetch] = useHtmlAST(svgp)
  const aspectRatio = w / h
  let svgw: number
  let svgh: number
  if (aspectRatio < boxar) {
    svgh = boxh - 65
    svgw = Math.floor(svgh * aspectRatio)
  } else {
    svgw = boxw - 65
    svgh = Math.floor(svgw / aspectRatio)
  }
  const Viewer = useRef(null)
  useEffect(() => {
    if (Viewer.current) {
      // console.log(`fit to viewer ${boxw} ${boxh} ${svgw} ${svgh} ${svgw / w}`)
      Viewer.current.fitToViewer('center', 'center')
    }
  }, [svgw, hastElems, load])

  useEffect(() => {
    if (load) {
      fetch()
    }
  }, [load])
  // console.log(`re-render viewer ${boxw} ${boxh} ${svgw} ${svgh} ${svgw / w}`)
  if (load && hastElems) {
    return (
      <UncontrolledSVGPanZoom
        width={svgw}
        height={svgh}
        ref={Viewer}
        tool={'pan' as ToolType} // ToolType.TOOL_PAN
        miniatureProps={{
          position: lg ? ('bottom' as PositionType) : ('none' as PositionType),
          height: 120,
          width: 120 * aspectRatio,
        }}
        toolbarProps={{
          position: 'bottom' as PositionType, // PositionType.POSITION_RIGHT,
          // SVGAlignX: 'right' as SVGAlignXType, // SVGAlignXType.ALIGN_RIGHT,
          // SVGAlignY: 'bottom' as SVGAlignYType, // SVGAlignYType.ALIGN_BOTTOM,
          activeToolColor: '#cc3f3f',
        }}
      >
        <svg viewBox={viewBox}>{hastElems}</svg>
      </UncontrolledSVGPanZoom>
    )
  }
  return svgLoading
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
  const { boxw, captions, renderHtml, load, caption, title, path } = props
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
        width={boxw}
        height={boxh}
        justifyContent="center"
        alignItems="center"
      >
        <SVGPanZoom
          boxw={boxw}
          boxh={boxh}
          boxar={containerAspectRatio}
          load={load}
          svg={props as SvgProps}
        />
      </Box>
      {captions ? (
        <div className={classes.paper}>
          <Typography align="center" variant="subtitle2">
            <br />
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
  // if (!res) {
  //   console.log(`imagePropsAre NOT Equal ${nextProps.path} res=${res}`)
  // }
  return res
}
export const SvgLazy = React.memo(CustomSvg, imagePropsAreEqual)
