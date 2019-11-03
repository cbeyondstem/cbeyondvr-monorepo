import React from 'react'
import { SiteConfig } from 'components/SiteConfig'
import { Box } from '@material-ui/core'
import Icon from 'assets/img/dmg-icon-color.comp.svg'

export function Footer(props) {
  return (
    <SiteConfig.Consumer>
      {({ title }) => {
        return (
          <div style={{ width: '100%', bottom: '0em', position: 'absolute' }}>
            <Box display="flex" p={1}>
              <Box p={1} m={1} flexGrow={1}>
                {'   '}
                <Icon viewBox="0 0 14 14" width="25px" height="25px" />
              </Box>
              <Box p={1} m={1}>
                Copyright: &copy; {1900 + new Date().getYear()}
                {'   '}
                {title}. All rights reserved.
              </Box>
            </Box>
          </div>
        )
      }}
    </SiteConfig.Consumer>
  )
}
