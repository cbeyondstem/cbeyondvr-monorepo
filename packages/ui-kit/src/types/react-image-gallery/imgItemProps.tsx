import { ImageSharpFluid } from '../gatsby-graphql-types'

export interface ImageItemProps {
  thumbnail?: string
  onThumbnailError?: () => void
  originalClass?: string
  thumbnailClass?: string
  renderItem?: () => React.ReactNode
  renderThumbInner?: () => React.ReactNode
  bulletClass?: string
  original?: {
    path: string
    desktop: ImageSharpFluid
    mobile?: ImageSharpFluid
    thumb: string
    title?: string
    caption?: string
  }
  onSlide?: () => void
  originalTitle?: string
  description?: string
  key?: string
}
