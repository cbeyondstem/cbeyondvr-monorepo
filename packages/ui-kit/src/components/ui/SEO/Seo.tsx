import * as React from 'react'
import Helmet from 'react-helmet'

import { SEOProps } from '../../../types/interfaces'
import {
  SiteConfigConsumer,
  SiteConfigProviderProps,
} from '../../providers/SiteConfig'

export const SEO = (props: SEOProps) => {
  const {
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title,
  } = props
  return (
    <SiteConfigConsumer>
      {(cfg: SiteConfigProviderProps) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${cfg.title}`}
          meta={[
            {
              name: `description`,
              content: description || cfg.description,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: description || cfg.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: cfg.contact,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: description || cfg.description,
            },
          ]
            .concat(
              keywords.length === 0
                ? []
                : {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
            )
            .concat(
              meta.length === 0
                ? []
                : {
                    name: `meta`,
                    content: meta.join(`, `),
                  }
            )}
        />
      )}
    </SiteConfigConsumer>
  )
}
