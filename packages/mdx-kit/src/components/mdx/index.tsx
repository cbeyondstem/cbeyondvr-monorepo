import { Link } from 'components/Link'
import { SiteConfig } from 'components/SiteConfig'
import { FeatMap } from './FeatMap'
import { SvgAtMdxPath } from './Svg'
import { Toc } from './Toc'
import { MdxProps } from './AllMdx/AllMdx'

export { MDXLayoutComponents } from './mdxLayout'

export const MDXGlobalComponents = (m: MdxProps) => ({
  Link,
  FeatMap,
  Svg: SvgAtMdxPath(m),
  Toc: Toc(m),
  SiteConfig,
  Org: SiteConfig.Org,
  SiteUrl: SiteConfig.SiteUrl,
  Contact: SiteConfig.Contact,
  OrgTitle: SiteConfig.Title,
  OrgDesc: SiteConfig.Description,
  OrgFavicon: SiteConfig.Favicon,
  OrgIcon: SiteConfig.Icon,
  OrgLogo: SiteConfig.Logo
})
