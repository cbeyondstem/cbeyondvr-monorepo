// import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d7d7f4'
    },
    secondary: {
      main: '#f5f2f0'
    }
    // // error: {
    // //   main: red.A400
    // // },
    // background: {
    //   default: '#2c2ca0'
    // }
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
    h1: {
      color: '#2c2ca0'
    }
  }
})

export default theme
