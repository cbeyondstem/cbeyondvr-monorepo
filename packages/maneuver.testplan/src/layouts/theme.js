// import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#369CFB'
    },
    secondary: {
      main: '#f5f2f0'
    }
    // // error: {
    // //   main: red.A400
    // // },
    // background: {
    //   default: '#2d2d2d'
    // }
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
    h1: {
      color: '#369CFB'
    }
  }
})

export default theme
