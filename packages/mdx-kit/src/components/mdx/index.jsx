import { Link } from 'components/Link'
import { SiteConfig } from 'components/SiteConfig'
import { FeatMap } from './FeatMap'
import { Svg } from './Svg'

export { MDXLayoutComponents } from './layout'

export const MDXGlobalComponents = {
  Link,
  FeatMap,
  Svg,
  Org: SiteConfig.Org,
  SiteUrl: SiteConfig.SiteUrl,
  Contact: SiteConfig.Contact,
  OrgTitle: SiteConfig.Title,
  OrgDesc: SiteConfig.Description,
  OrgIcon: SiteConfig.Favicon
}
