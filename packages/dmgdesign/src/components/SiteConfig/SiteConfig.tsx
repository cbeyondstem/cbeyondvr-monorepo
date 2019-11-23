import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export interface SiteConfigProviderProps {
  title: string
  description: string
  siteUrl: string
  org: string
  contact: string
  authors: boolean
}

const { Consumer, Provider } = React.createContext({
  title: ``,
  description: ``,
  siteUrl: ``,
  org: ``,
  contact: ``,
  authors: false
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
              authors
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
