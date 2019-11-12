import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export interface SiteConfigProviderProps {
  title: string
  description: string
  siteUrl: string
  org: string
  contact: string
}

const { Consumer, Provider } = React.createContext({
  title: ``,
  description: ``,
  siteUrl: ``,
  org: ``,
  contact: ``,
} as SiteConfigProviderProps)

export interface SiteConfigProps {
  children: React.ReactNode
}

const SiteConfigComp: React.FunctionComponent<SiteConfigProps> = props => {
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
            }
          }
        }
      `}
      render={data => {
        return (
          <Provider
            value={{
              ...data.site.siteMetadata
            }}
          >
            {children}
          </Provider>
        )
      }}
    />
  )
}

export const SiteConfig = {
  Provider: SiteConfigComp,
  Consumer
}
