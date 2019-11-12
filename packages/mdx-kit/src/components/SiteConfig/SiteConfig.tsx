import * as React from 'react'
import * as _ from 'lodash'
import { graphql, StaticQuery } from 'gatsby'
import { Space } from 'components/Space'
import Icon from 'assets/img/favicon.comp.svg'

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
  contact: ``
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

export const Get: (key: string) => React.FunctionComponent<React.ComponentPropsWithRef<'span'>> = (
  key: string
) => props => (
  <Consumer>
    {(cfg: SiteConfigProviderProps) => {
      const text = _.get(cfg, key, `unknown key ${key}`)
      // const sp = <Space cnt={1} />
      const st = <strong>{text}</strong>
      return React.createElement('span', { props }, [st])
    }}
  </Consumer>
)

export const SiteConfig = {
  Provider: SiteConfigComp,
  Org: Get('org'),
  SiteUrl: Get('siteUrl'),
  Contact: Get('contact'),
  Title: Get('title'),
  Description: Get('description'),
  Favicon: p => <Icon {...p} />,
  Consumer
}
