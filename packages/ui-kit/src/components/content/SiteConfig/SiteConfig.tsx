/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import * as _ from 'lodash'
import { AllSvgConsumer } from '../AllSvg'

export interface SiteConfigProviderProps {
  title: string
  description: string
  siteUrl: string
  org: string
  contact: string
  favicon: string
  logo: string
  map: string
}

export const {
  Consumer: SiteConfigConsumer,
  Provider: SiteConfigProvider,
} = React.createContext({
  title: ``,
  description: ``,
  siteUrl: ``,
  org: ``,
  contact: ``,
  favicon: ``,
  logo: ``,
  map: ``,
} as SiteConfigProviderProps)

export interface SiteConfigProps {
  children: React.ReactNode
}

export const GetSvg: (
  key: string
) => React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (key: string) => {
  if (!['faviconSvg', 'logo', 'icon'].includes(key)) {
    return null
  }
  return props => (
    <SiteConfigConsumer>
      {(cfg: SiteConfigProviderProps) => (
        <AllSvgConsumer>
          {({ svgByPath }) => {
            let src = _.get(cfg, key, `unknown key ${key}`)
            src = src.replace('./', '').replace('src/', '')
            if (!(src in svgByPath)) {
              return <em>{`<Svg src=${src}/> not found`}</em>
            }
            const { Svg: SvgRaw } = svgByPath[src]
            return <SvgRaw {...props} />
          }}
        </AllSvgConsumer>
      )}
    </SiteConfigConsumer>
  )
}
const Get: (
  key: string
) => React.FunctionComponent<React.ComponentPropsWithRef<'span'>> = (
  key: string
) => props => (
  <SiteConfigConsumer>
    {(cfg: SiteConfigProviderProps) => {
      const text = _.get(cfg, key, `unknown key ${key}`)
      // const sp = <Space cnt={1} />
      // const st = <strong>{text}</strong>
      return React.createElement('span', { props }, [text])
    }}
  </SiteConfigConsumer>
)
const GetContact: (
  key: string
) => React.FunctionComponent<React.ComponentPropsWithRef<'span'>> = (
  key: string
) => props => (
  <SiteConfigConsumer>
    {(cfg: SiteConfigProviderProps) => {
      const text = _.get(cfg, key, `unknown key ${key}`)
      // const sp = <Space cnt={1} />
      // const st = <strong>{text}</strong>
      return <a href={`mailto:${text}`}>{text}</a>
    }}
  </SiteConfigConsumer>
)
export const SiteConfig = {
  Org: Get('org'),
  SiteUrl: Get('siteUrl'),
  Contact: GetContact('contact'),
  Title: Get('title'),
  Description: Get('description'),
  Favicon: GetSvg('faviconSvg'),
  Icon: GetSvg('icon'),
  Logo: GetSvg('logo'),
  Map: Get('map'),
}
