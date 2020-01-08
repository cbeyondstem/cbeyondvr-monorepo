import { Link } from '../ui/Link'
import { SiteConfig } from '../content/SiteConfig'
import { FeatMap } from './FeatMap'
import { SvgAtMdxPath } from './Svg'
import { Toc } from './Toc'
import { MdxProps } from '../content/AllMdx'
import { Carousel as CarouselView } from '../../views/Carousel'
import { ContactUs } from '../ui/ContactUs/ContactUs'

export { MDXLayoutComponents, mdxLayoutStyles } from './mdxStyles'

export const MDXGlobalComponents = (m: MdxProps) => ({
  Link,
  FeatMap,
  CarouselView,
  Svg: SvgAtMdxPath(m),
  Toc: Toc(m),
  Org: SiteConfig.Org,
  SiteUrl: SiteConfig.SiteUrl,
  Contact: ContactUs,
  OrgTitle: SiteConfig.Title,
  OrgDesc: SiteConfig.Description,
  OrgFavicon: SiteConfig.Favicon,
  OrgIcon: SiteConfig.Icon,
  OrgLogo: SiteConfig.Logo,
})
