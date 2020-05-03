declare module 'image-list' {
  export interface ServiceProps {
    folder: string
    service: string
    title: string
    details: string
    images: string[]
  }

  export interface CategoryProps {
    category: string
    details: string
    projects: string[]
  }

  export interface ProjectProps {
    folder: string
    project: string
    details: string
    year?: string
    location?: string
    company?: string
    copyright?: string
    images: string[]
  }

  export interface ImageProps {
    name: string
    title?: string
    caption?: string
    ext?: string
  }

  export interface ImageInfoDictProps {
    [project: string]: {
      [name: string]: ImageProps[]
    }
  }

  export interface OrderedImagesProps {
    [project: string]: string[]
  }

  export const services: ServiceProps[]
  export const projects: ProjectProps[]
  export const categories: CategoryProps[]
  export const images: ImageProps[]
  export const imageInfoDict: ImageInfoDictProps
  export const orderedImages: OrderedImagesProps
}
