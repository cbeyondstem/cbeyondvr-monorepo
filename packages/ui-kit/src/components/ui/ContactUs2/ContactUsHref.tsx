import * as _ from 'lodash'
import * as React from 'react'
import {
  SiteConfigConsumer,
  SiteConfigProviderProps,
} from '../../content/SiteConfig'

export const ContactUsHref: React.FunctionComponent = props => {
  return (
    <SiteConfigConsumer>
      {(cfg: SiteConfigProviderProps) => {
        const text = _.get(cfg, 'contact', `unknown key 'contact'`)
        // const sp = <Space cnt={1} />
        // const st = <strong>{text}</strong>
        return (
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${text}`}
            >
              {text}
            </a>
          </div>
        )
      }}
    </SiteConfigConsumer>
  )
}

export default ContactUsHref
