import React from 'react'
import { SiteConfig } from 'components/SiteConfig'
import { Box } from '@material-ui/core'

export function Footer() {
  return (
    <SiteConfig.Consumer>
      {({ title }) => {
        return (
          <div style={{ width: '100%', bottom: '0em', position: 'absolute' }}>
            <Box display="flex" flexDirection="row-reverse" p={1}>
              <Box p={2}>
                <footer>
                  Copyright: &copy; {1900 + new Date().getYear()} {title}. All rights reserved.
                </footer>
              </Box>
            </Box>
          </div>
        )
      }}
    </SiteConfig.Consumer>
  )
}
