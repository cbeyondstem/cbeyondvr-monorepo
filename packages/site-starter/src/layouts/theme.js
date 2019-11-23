// import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
// import EurostileNormal from './fonts/Eurostile-Normal.woff2'
// import EurostileBold from './fonts/EurostileBold.woff2'

// const eurostile = {
//   fontFamily: 'Eurostile',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Eurostile'),
//     local('Eurostile-Normal'),
//     url(${EurostileNormal}) format('woff2')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,' +
//     'U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
// }

// const eurostileBold = {
//   fontFamily: 'Eurostile',
//   fontStyle: 'bold',
//   fontDisplay: 'swap',
//   fontWeight: 700,
//   src: `
//     local('Eurostile'),
//     local('EurostileBold'),
//     url(${EurostileBold}) format('woff2')
//   `
// }
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff'
    },
    // // secondary: {
    // //   main: '#19857b'
    // // },
    // // error: {
    // //   main: red.A400
    // // },
    background: {
      default: '#2d2d2d'
    }
  },
  typography: {
    fontFamily: ['Michroma', 'Roboto'].join(',')
    // overrides: {
    //   MuiCssBaseline: {
    //     '@global': {
    //       '@font-face': [eurostile, eurostileBold]
    //     }
    //   }
    // }
  }
})

export default theme
