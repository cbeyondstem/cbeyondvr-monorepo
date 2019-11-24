import { Link } from '../Link'
import { SiteConfig } from '../SiteConfig'
import { FeatMap } from './FeatMap'
import { SvgAtMdxPath } from './Svg'
import { Toc } from './Toc'
import { MdxProps } from './AllMdx'

export { MDXLayoutComponents, mdxLayoutStyles } from './mdxStyles'

export const MDXGlobalComponents = (m: MdxProps) => ({
  Link,
  FeatMap,
  Svg: SvgAtMdxPath(m),
  Toc: Toc(m),
  Org: SiteConfig.Org,
  SiteUrl: SiteConfig.SiteUrl,
  Contact: SiteConfig.Contact,
  OrgTitle: SiteConfig.Title,
  OrgDesc: SiteConfig.Description,
  OrgFavicon: SiteConfig.Favicon,
  OrgIcon: SiteConfig.Icon,
  OrgLogo: SiteConfig.Logo
})
