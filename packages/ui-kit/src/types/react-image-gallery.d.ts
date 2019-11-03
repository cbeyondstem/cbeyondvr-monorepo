declare module 'react-image-gallery' {
  import * as React from 'react'

  export interface ImageItemProps {
    thumbnail?: string
    thumbnailAlt?: string
    thumbnailTitle?: string
    thumbnailLabel?: string
    onThumbnailError?: () => void
    originalClass?: string
    thumbnailClass?: string
    renderItem?: () => React.ReactNode
    renderThumbInner?: () => React.ReactNode
    bulletOnClick?: () => void
    bulletClass?: string
    imageSet?: {
      media: string
      srcSet: string
      type: string
    }
    srcSet?: string
    sizes?: string
    original?: any
    originalAlt?: string
    originalTitle?: string
    description?: string
  }

  export interface ImageGalleryProps {
    flickThreshold?: number
    items: ImageItemProps[]
    showNav?: boolean
    autoPlay?: boolean
    lazyLoad?: boolean
    infinite?: boolean
    showIndex?: boolean
    showBullets?: boolean
    showThumbnails?: boolean
    showPlayButton?: boolean
    showFullscreenButton?: boolean
    disableThumbnailScroll?: boolean
    disableArrowKeys?: boolean
    disableSwipe?: boolean
    useBrowserFullscreen?: boolean
    preventDefaultTouchmoveEvent?: boolean
    defaultImage?: string
    indexSeparator?: string
    thumbnailPosition?: string
    startIndex?: number
    slideDuration?: number
    slideInterval?: number
    slideOnThumbnailOver?: boolean
    swipeThreshold?: number
    swipingTransitionDuration?: number
    onSlide?: () => void
    onScreenChange?: (e?: Element) => void
    onPause?: () => void
    onPlay?: () => void
    onClick?: () => void
    onImageLoad?: () => void
    onImageError?: () => void
    onTouchMove?: () => void
    onTouchEnd?: () => void
    onTouchStart?: () => void
    onMouseOver?: () => void
    onMouseLeave?: () => void
    onThumbnailError?: () => void
    onThumbnailClick?: () => void
    renderCustomControls?: () => void
    renderLeftNav?: () => void
    renderRightNav?: () => void
    renderPlayPauseButton?: () => void
    renderFullscreenButton?: () => void
    renderItem?: (item: ImageItemProps) => React.ReactNode
    stopPropagation?: boolean
    additionalClass?: string
    useTranslate3D?: boolean
    isRTL?: boolean
  }

  declare class ImageGallery extends React.Component<ImageGalleryProps> {}

  export default ImageGallery
}
