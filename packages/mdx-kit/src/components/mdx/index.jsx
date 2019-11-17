import { Link } from 'components/Link'
import { SiteConfig } from 'components/SiteConfig'
import { FeatMap } from './FeatMap'
import { Svg } from './Svg'
import { Toc } from './Toc'

export { MDXLayoutComponents } from './mdxLayout'

export const MDXGlobalComponents = m => ({
  Link,
  FeatMap,
  Svg,
  Toc: Toc(m),
  Org: SiteConfig.Org,
  SiteUrl: SiteConfig.SiteUrl,
  Contact: SiteConfig.Contact,
  OrgTitle: SiteConfig.Title,
  OrgDesc: SiteConfig.Description,
  OrgIcon: SiteConfig.Favicon
})
