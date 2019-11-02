// import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import EuroStyleNormal from './fonts/EuroStyleNormal.woff2'
import EurostileBold from './fonts/EurostileBold.woff2'

const eurostile = {
  fontFamily: 'eurostile',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('eurostile'),
    local('EuroStyleNormal'),
    url(${EuroStyleNormal}) format('woff2')
  `
}

const eurostileBold = {
  fontFamily: 'eurostile',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('eurostile'),
    local('EurostileBold'),
    url(${EurostileBold}) format('woff2')
  `
}
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff'
    },
    // secondary: {
    //   main: '#19857b'
    // },
    // error: {
    //   main: red.A400
    // },
    background: {
      default: '#2d2d2d'
    }
  },
  typography: {
    fontFamily: ['eurostile', 'sans-serif'].join(','),
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [EuroStyleNormal, EurostileBold]
        }
      }
    }
  }
})

export default theme
