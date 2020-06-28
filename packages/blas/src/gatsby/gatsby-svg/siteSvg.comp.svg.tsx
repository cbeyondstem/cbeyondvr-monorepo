/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { useTheme } from '@material-ui/core'

import LogoSvg from '../../assets/img/logo.comp.svg'
import IconSvg from '../../assets/img/icon.comp.svg'

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme()
  return <LogoSvg width={theme.spacing(4)} height={theme.spacing(4)} {...props} />
}

export const Icon = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme()
  return <IconSvg width={theme.spacing(4)} height={theme.spacing(4)} {...props} />
}
