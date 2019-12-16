/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { isUndefined } from 'util'

export interface ResponsivePicture {
  base64?: string
  tracedSVG?: string
  aspectRatio?: number
  src: string
  srcSet?: string
  srcSetWebp?: string
  sizes: string
}
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver
  }
}

// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
const imageCache = Object.create({})
const inImageCache = (src: string) => {
  // console.log(`LazyImage inImageCache ${JSON.stringify(imageCache)}`)
  return imageCache[src] || false
}

const activateCacheForImage = (src: string) => {
  imageCache[src] = true
  // console.log(`LazyImage activateCacheForImage ${JSON.stringify(imageCache)}`)
}

let io: IntersectionObserver
const listeners = new WeakMap()

function getIO() {
  if (
    typeof io === `undefined` &&
    typeof window !== `undefined` &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (listeners.has(entry.target)) {
            const cb = listeners.get(entry.target)
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(entry.target)
              listeners.delete(entry.target)
              cb()
            }
          }
        })
      },
      { rootMargin: `200px` }
    )
  }

  return io
}

const listenToIntersections = (el: Element, cb: () => void) => {
  const observer = getIO()

  if (observer) {
    observer.observe(el)
    listeners.set(el, cb)
  }

  return () => {
    observer.unobserve(el)
    listeners.delete(el)
  }
}

interface NoScriptImgProps {
  picture: ResponsivePicture
  alt: string
  title?: string
  width?: number
  height?: number
  opacity?: number
  transitionDelay?: number
  crossOrigin: string
}
const noscriptImg = (props: NoScriptImgProps) => {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  const { src } = props.picture // required attribute
  const { sizes } = props.picture
  const srcSetWebp = props.picture.srcSetWebp
    ? `<source type='image/webp' srcset="${props.picture.srcSetWebp}" ${sizes}/>`
    : ``
  const srcSet = props.picture.srcSet ? `srcset="${props.picture.srcSet}" ` : ``
  const title = props.title ? `title="${props.title}" ` : ``
  const alt = props.alt ? `alt="${props.alt}" ` : `alt="" ` // required attribute
  const width = props.width ? `width="${props.width}" ` : ``
  const height = props.height ? `height="${props.height}" ` : ``
  const crossOrigin = props.crossOrigin
    ? `crossorigin="${props.crossOrigin}" `
    : `anonymous`

  return `<picture>${srcSetWebp}<img ${width}${height}${sizes}${srcSet}${src}${alt}${title}${crossOrigin}style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`
}

interface ImgProps {
  onError?: () => void
  onLoad?: () => void
  title?: string
  alt?: string
  style?: object
  src: string
  srcSet?: string
  sizes?: string
}
interface SourceProps {
  // src: string,
  srcSet: string
  sizes: string
}
interface PictureProps {
  imgProps: ImgProps
  sourceProps: SourceProps
  ref: React.RefObject<HTMLImageElement>
}
const Img = React.forwardRef(
  (props: ImgProps, ref: React.RefObject<HTMLImageElement>) => {
    const {
      alt,
      sizes,
      srcSet,
      src,
      style,
      onLoad,
      onError,
      ...otherProps
    } = props

    return (
      <img
        alt={alt}
        sizes={sizes}
        srcSet={srcSet}
        src={src}
        {...otherProps}
        onLoad={onLoad}
        onError={onError}
        ref={ref}
        style={{
          position: `absolute` as `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          objectFit: `cover`,
          objectPosition: `center`,
          ...style,
        }}
      />
    )
  }
)

export interface LazyImageProps {
  className?: string | object
  onError?: () => void
  onLoad?: () => void
  onStartLoad?: (obj: object) => void
  title?: string
  alt?: string
  style?: object
  picture: ResponsivePicture
  imgStyle?: object
  placeholderStyle?: object
  placeholderClassName?: string
  fixed?: { width: number; height: number }
  backgroundColor?: string | boolean
  durationFadeIn?: number
  fadeIn?: boolean
  critical?: boolean
  Tag?: string
  itemProp?: string
  crossOrigin?: string
}

export class LazyImage extends React.Component<LazyImageProps> {
  state: {
    isVisible: boolean
    imgLoaded: boolean
    IOSupported: boolean
    fadeIn: boolean
    seenBefore: boolean
    hasNoScript: boolean
    imgCached: boolean
  } = {
    isVisible: true,
    imgLoaded: true,
    IOSupported: false,
    fadeIn: true,
    seenBefore: false,
    hasNoScript: false,
    imgCached: false,
  }

  imageRef: React.RefObject<HTMLImageElement> = React.createRef<
    HTMLImageElement
  >()

  cleanUpListeners: () => void

  constructor(props: LazyImageProps) {
    super(props)

    // default settings for browser without Intersection Observer available
    let isVisible = true
    const imgLoaded = false
    const imgCached = false
    let IOSupported = false
    const fadeIn = props.fadeIn || true

    // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.
    const seenBefore = inImageCache(props.picture.src)
    // if (typeof window !== `undefined`){
    //   console.log(`LazyImage window.IntersectionObserver ${window.IntersectionObserver?'exists':'does not exist'}`)
    // }

    // browser with Intersection Observer available
    if (
      !seenBefore &&
      typeof window !== `undefined` &&
      window.IntersectionObserver
    ) {
      isVisible = false
      IOSupported = true
    }

    // Never render image during SSR
    if (typeof window === `undefined`) {
      isVisible = false
    }

    // Force render for critical images
    if (props.critical) {
      isVisible = true
      IOSupported = false
    }

    const hasNoScript = !(props.critical && !props.fadeIn)

    this.state = {
      isVisible,
      imgLoaded,
      imgCached,
      IOSupported,
      fadeIn,
      hasNoScript,
      seenBefore,
    }
  }

  componentDidMount() {
    const { isVisible } = this.state
    const { onStartLoad, picture, critical } = this.props
    const { src } = picture
    if (isVisible && typeof onStartLoad === `function`) {
      onStartLoad({
        wasCached: inImageCache(src),
      })
    }
    if (critical) {
      const img = this.imageRef.current
      if (img && img.complete) {
        this.handleImageLoaded()
      }
    }
  }

  componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners()
    }
  }

  handleRef = (element: HTMLImageElement) => {
    const { IOSupported, isVisible } = this.state
    const { onStartLoad, picture } = this.props
    const { src } = picture
    // console.log('LazyImage handleRef')
    if (IOSupported && element) {
      this.cleanUpListeners = listenToIntersections(element, () => {
        const imageInCache = inImageCache(src)
        if (!isVisible && typeof onStartLoad === `function`) {
          onStartLoad({ wasCached: imageInCache })
        }

        // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.
        this.setState({ isVisible: true }, () =>
          this.setState({
            imgLoaded: imageInCache,
            imgCached: !!this.imageRef.current.currentSrc,
          })
        )
      })
    }
  }

  handleImageLoaded = () => {
    // console.log('LazyImage handleImageLoaded')
    const { seenBefore } = this.state
    const { onLoad, picture } = this.props
    const { src } = picture
    activateCacheForImage(src)
    let { fadeIn } = this.state
    if (seenBefore) {
      fadeIn = false
    }
    this.setState({ imgLoaded: true, fadeIn })
    if (onLoad) {
      onLoad()
    }
  }

  render() {
    // console.log(JSON.stringify(this.state,null,3))
    const {
      title = ``,
      alt = ``,
      className,
      style = {},
      imgStyle = {},
      placeholderStyle = {},
      placeholderClassName,
      fixed,
      backgroundColor,
      durationFadeIn = 500,
      crossOrigin = ``,
      picture,
      onError,
    } = this.props
    const { imgLoaded, fadeIn, imgCached, isVisible, hasNoScript } = this.state
    const fluid = isUndefined(fixed)
    const shouldReveal = imgLoaded || fadeIn === false
    const shouldFadeIn = fadeIn === true && !imgCached
    // console.log(`LazyImage shoudlReveal=${shouldReveal?'true':'false'} shouldFadeIn=${shouldFadeIn?'true':'false'}`)
    const imageStyle = {
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? `opacity ${durationFadeIn}ms` : `none`,
      ...imgStyle,
    }

    const bgColor =
      typeof backgroundColor === `boolean` ? `lightgray` : backgroundColor

    const delayHideStyle = {
      transitionDelay: `${durationFadeIn}ms`,
    }

    const imagePlaceholderStyle = {
      opacity: imgLoaded ? 0 : 1,
      ...(shouldFadeIn && delayHideStyle),
      ...imgStyle,
      ...placeholderStyle,
    }

    const placeholderImageProps = {
      title,
      alt: !isVisible ? alt : ``,
      style: imagePlaceholderStyle,
      className: placeholderClassName,
    }
    const image = picture
    const aspectRatio = image.aspectRatio || 1.507936507936508
    if (fluid) {
      return (
        <div
          className={`${className || ``} gatsby-image-wrapper`}
          style={{
            position: `relative` as `relative`,
            overflow: `hidden`,
            ...style,
          }}
          ref={this.handleRef}
          key={`fluid-${JSON.stringify(image.srcSet)}`}
        >
          {/* Preserve the aspect ratio. */}
          <div
            style={{
              width: `100%`,
              paddingBottom: `${100 / aspectRatio}%`,
            }}
          />

          {/* Show a solid background color. */}
          {bgColor && (
            <div
              title={title}
              style={{
                backgroundColor: bgColor,
                position: `absolute` as `absolute`,
                top: 0,
                bottom: 0,
                opacity: !imgLoaded ? 1 : 0,
                right: 0,
                left: 0,
                ...(shouldFadeIn && delayHideStyle),
              }}
            />
          )}

          {/* Show the blurry base64 image. */}
          {image.base64 && (
            <Img src={image.base64} {...placeholderImageProps} />
          )}

          {/* Show the traced SVG image. */}
          {image.tracedSVG && (
            <Img src={image.tracedSVG} {...placeholderImageProps} />
          )}

          {/* Once the image is visible (or the browser doesn't support IntersectionObserver),
              start downloading the image */}
          {isVisible && (
            <picture>
              {image.srcSetWebp && (
                <source
                  type="image/webp"
                  srcSet={image.srcSetWebp}
                  sizes={image.sizes}
                />
              )}

              <Img
                alt={alt}
                title={title}
                sizes={image.sizes}
                src={image.src}
                crossOrigin={crossOrigin}
                srcSet={image.srcSet}
                style={imageStyle}
                ref={this.imageRef}
                onLoad={this.handleImageLoaded}
                onError={onError}
                // itemProp={itemProp}
              />
            </picture>
          )}

          {/* Show the original image during server-side rendering if JavaScript is disabled */}
          {hasNoScript && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: noscriptImg({
                  alt,
                  title,
                  crossOrigin,
                  picture: image,
                }),
              }}
            />
          )}
        </div>
      )
    }

    if (fixed) {
      const divStyle = {
        position: `relative` as `relative`,
        overflow: `hidden`,
        display: `inline-block`,
        width: fixed.width,
        height: fixed.height,
        ...style,
      }
      if (_.get(style, 'display', '') === `inherit`) {
        _.set(divStyle, 'display', undefined)
      }

      return (
        <div
          className={`${className || ``} gatsby-image-wrapper`}
          style={divStyle}
          ref={this.handleRef}
          key={`fixed-${JSON.stringify(image.srcSet)}`}
        >
          {/* Show a solid background color. */}
          {bgColor && (
            <div
              title={title}
              style={{
                backgroundColor: bgColor,
                width: fixed.width,
                opacity: !imgLoaded ? 1 : 0,
                height: fixed.height,
                ...(shouldFadeIn && delayHideStyle),
              }}
            />
          )}

          {/* Show the blurry base64 image. */}
          {image.base64 && (
            <Img src={image.base64} {...placeholderImageProps} />
          )}

          {/* Show the traced SVG image. */}
          {image.tracedSVG && (
            <Img src={image.tracedSVG} {...placeholderImageProps} />
          )}

          {/* Once the image is visible, start downloading the image */}
          {isVisible && (
            <picture>
              {image.srcSetWebp && (
                <source
                  type="image/webp"
                  srcSet={image.srcSetWebp}
                  sizes={image.sizes}
                />
              )}

              <Img
                alt={alt}
                title={title}
                // width={fixed.width}
                // height={fixed.height}
                sizes={image.sizes}
                src={image.src}
                crossOrigin={crossOrigin}
                srcSet={image.srcSet}
                style={imageStyle}
                ref={this.imageRef}
                onLoad={this.handleImageLoaded}
                onError={onError}
                // itemProp={itemProp}
              />
            </picture>
          )}

          {/* Show the original image during server-side rendering if JavaScript is disabled */}
          {hasNoScript && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: noscriptImg({
                  alt,
                  title,
                  crossOrigin,
                  picture: image,
                }),
              }}
            />
          )}
        </div>
      )
    }
    return null
  }
}
