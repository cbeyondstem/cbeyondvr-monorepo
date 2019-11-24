import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { SiteConfigProps, SiteConfigProvider } from '@cbeyond/mdx-kit/src'

export const SiteConfigQueryProvider: React.FunctionComponent<SiteConfigProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query SiteConfigQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
              org
              contact
              faviconSvg
              logo
              icon
            }
          }
        }
      `}
      render={data => {
        return (
          <SiteConfigProvider
            value={{
              ...data.site.siteMetadata
            }}
          >
            {children}
          </SiteConfigProvider>
        )
      }}
    />
  )
}
