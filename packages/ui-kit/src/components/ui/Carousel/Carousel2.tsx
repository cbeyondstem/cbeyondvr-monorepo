import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import classNames from 'classnames'

import { Carousel as CarouselBase } from 'react-responsive-carousel'

import { ImageItemProps } from '../../../types/interfaces'
import { ImageSharpFluid } from '../../../types/gatsby-graphql-types'
import { SvgProps } from '../../content/AllSvg'
import { useTimeout } from '../../../hooks/timeout'

export interface CarouselImgProps {
  path: string
  desktop: ImageSharpFluid | SvgProps
  mobile?: ImageSharpFluid
  thumb: string
  title?: string
  caption?: string
}
export interface CarouselProps {
  images: CarouselImgProps[]
  maxWidth?: number
  renderImage?: (item: ImageItemProps) => React.ReactNode
  thumb?: boolean
  showPlayButton?: boolean
  autoplay?: boolean
}

export const Carousel: React.FunctionComponent<CarouselProps> = props => {
  const {
    images,
    renderImage,
    thumb = true,
    showPlayButton = true,
    autoplay = true,
  } = props

  const [autoplayState, toggleAutoplay] = React.useState(autoplay)
  const [playing, togglePlaying] = React.useState(autoplay)
  const onPlayButton = () => {
    togglePlaying(!playing)
  }
  // useTimeout(() => {
  //   toggleAutoplay(playing)
  // }, 100)
  const noop = () => null as React.ReactChild[]
  const renderThumbs = (children: React.ReactNode) =>
    images.map((image: CarouselImgProps) => (
      <img src={image.thumb} alt={image.title} key={uid(image.thumb)} />
    ))

  const ImageMemo: React.FunctionComponent<CarouselImgProps> = img =>
    React.useMemo(
      () => <div>{renderImage({ original: img } as ImageItemProps)}</div>,
      [img]
    )

  const FastCarousel = React.memo(
    () => (
      <CarouselBase
        // renderThumbs={thumb ? renderThumbs : noop}
        renderIndicator={noop}
        swipeable={false}
        // autoPlay={autoplayState}
        showThumbs={false}
        interval={2000}
        transitionTime={350}
        infiniteLoop
      >
        {images.map((image, idx) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ImageMemo key={uid(image, idx)} {...image} />
        ))}
      </CarouselBase>
    ),
    () => true
  )
  console.log(`playing=${playing} autoplayState=${autoplayState}`)
  return images.length === 0 ? (
    <div />
  ) : (
    <>
      <FastCarousel />
      {showPlayButton ? (
        <button
          type="button"
          aria-label="autoplay"
          className={classNames(
            'control-arrow',
            { 'play-button': !playing },
            { 'pause-button': playing }
          )}
          onClick={onPlayButton}
        />
      ) : null}
    </>
  )
}

// <ImageGallery

//   items={imgItems}
//   renderItem={renderImage}
//   autoPlay={autoplay}
//   // renderThumbInner={renderImage}
//   // lazyLoad
//   // onClick={this._onImageClick.bind(this)}
//   // onImageLoad={this._onImageLoad}
//   onSlide={onSlide}
//   // onImageLoad={onSlide}
//   // onPause={this._onPause.bind(this)}
//   onScreenChange={onScreenChange}
//   infinite
//   showBullets={false}
//   showFullscreenButton={false}
//   showThumbnails={thumb}
//   showIndex
//   showNav
//   showPlayButton={showPlayButton}
//   slideDuration={450}
//   slideInterval={2000}

//   // thumbnailPosition={this.state.thumbnailPosition}
//   // slideDuration={parseInt(this.state.slideDuration)}
//   // slideInterval={parseInt(this.state.slideInterval)}
//   // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
//   // additionalClass="app-image-gallery"
// />
