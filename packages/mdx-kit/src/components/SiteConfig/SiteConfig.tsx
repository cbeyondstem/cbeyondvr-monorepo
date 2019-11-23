/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as _ from 'lodash'
import { graphql, StaticQuery } from 'gatsby'
import { AllSvg } from '../mdx/AllSvg'

export interface SiteConfigProviderProps {
  title: string
  description: string
  siteUrl: string
  org: string
  contact: string
  favicon: string
  logo: string
}

const { Consumer, Provider } = React.createContext({
  title: ``,
  description: ``,
  siteUrl: ``,
  org: ``,
  contact: ``,
  favicon: ``,
  logo: ``
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
              faviconSvg
              logo
              icon
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

export const GetSvg: (key: string) => React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (key: string) => {
  if (!['faviconSvg', 'logo', 'icon'].includes(key)) {
    return null
  }
  return props => (
    <Consumer>
      {(cfg: SiteConfigProviderProps) => (
        <AllSvg.Consumer>
          {({ svgByPath }) => {
            let src = _.get(cfg, key, `unknown key ${key}`)
            src = src.replace('./', '').replace('src/', '')
            console.log(`SiteConfig.Logo ${src}`)
            if (!(src in svgByPath)) {
              console.log(`SiteConfig.Logo ${src} not found`)
              return <em>{`<Svg src=${src}/> not found`}</em>
            }
            const { Svg: SvgRaw } = svgByPath[src]
            console.log(`SiteConfig.Logo ${src} all good!!`)
            return <SvgRaw {...props} />
          }}
        </AllSvg.Consumer>
      )}
    </Consumer>
  )
}
export const Get: (key: string) => React.FunctionComponent<React.ComponentPropsWithRef<'span'>> = (
  key: string
) => props => (
  <Consumer>
    {(cfg: SiteConfigProviderProps) => {
      const text = _.get(cfg, key, `unknown key ${key}`)
      // const sp = <Space cnt={1} />
      // const st = <strong>{text}</strong>
      return React.createElement('span', { props }, [text])
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
  Favicon: GetSvg('faviconSvg'),
  Icon: GetSvg('icon'),
  Logo: GetSvg('logo'),
  Consumer
}
