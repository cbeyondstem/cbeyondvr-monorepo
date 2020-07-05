// interfaces
export {
  ProviderProps,
  LinkProps,
  SEOProps,
  PageProps,
  LayoutProps,
  MenuItem,
  BrandProps,
  ImageItemProps,
} from './types/interfaces'

// reusable material-ui theme config
export {
  gatsbyHighlight,
  gatsbyHighlightLanguageBadges,
} from './assets/prismjs'

// reusable MDX style and globals
export {
  MDXLayoutComponents,
  MDXGlobalComponents,
  mdxLayoutStyles,
  Svg,
} from './components/mdx'

// reusable content sourcing components - React provider/consumer pattern
export {
  SiteConfig,
  SiteConfigConsumer,
  SiteConfigProvider,
  SiteConfigProps,
} from './components/providers/SiteConfig'

export {
  AllMdxConsumer,
  allMdxQueryRender,
  MdxProviderProps,
} from './components/providers/AllMdx'

export {
  AllSvgConsumer,
  allSvgQueryRender,
  SvgProviderProps,
} from './components/providers/AllSvg'

export {
  AllImgConsumer,
  AllImgProvider,
} from './components/providers/AllImages'

// reusable content sourcing components - rxjs services pattern
// rxjs services pattern is borrowed from angular framework
// and is much preferred for its model/view separation and ease of use.
// @cbeyond uses the service pattern react-implementation from '@mindspace-io/react'
export {
  UseAllSvgResponse,
  useAllSvgService,
  useHtmlAST,
  UseSvgHastResponse,
} from './services'

// reusable Layout components
export { SEO } from './components/ui/SEO'
export { getLayout as getLayoutBlog } from './components/ui/LayoutBlog'
export { getLayoutMdx } from './components/ui/LayoutMdx'
export { getLayoutFromMenuItems } from './components/ui/LayoutFromMenuItems'

// reusable View components
export { BlogIndex } from './views/BlogIndex'
export { Carousel as CarouselView } from './views/Carousel'
export { CarouselSvg as CarouselSvgView } from './views/CarouselSvg'

// Reusable material-ui UX components

export { Link } from './components/ui/Link'
export { Space } from './components/ui/Space'
export { ContactUs } from './components/ui/ContactUs'
export { ContactUs as ContactUs2 } from './components/ui/ContactUs2'
export { VisitUs } from './components/ui/VisitUs'

export {
  Header,
  getHeaderLinks,
  headerLinksStyle,
  headerStyle,
} from './components/ui/Header'
export { getHeader as getHeaderBlog } from './components/ui/HeaderBlog'
export { Footer } from './components/ui/Footer'
export {
  Carousel,
  CarouselImgProps,
  CarouselProps,
} from './components/ui/Carousel'
export {
  ResponsivePicture,
  LazyImageProps,
  LazyImage,
} from './components/ui/LazyImage'
