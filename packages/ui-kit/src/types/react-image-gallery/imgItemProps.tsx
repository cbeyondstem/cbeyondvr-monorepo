import { ImageSharpFluid } from '../gatsby-graphql-types'

export interface ImageItemProps {
  thumbnail?: string
  onThumbnailError?: () => void
  originalClass?: string
  thumbnailClass?: string
  renderItem?: () => React.ReactNode
  renderThumbInner?: () => React.ReactNode
  bulletOnClick?: () => void
  bulletClass?: string
  original?: {
    path: string
    desktop: ImageSharpFluid
    mobile?: ImageSharpFluid
    thumb: string
    title?: string
    caption?: string
  }
  originalTitle?: string
  description?: string
}
