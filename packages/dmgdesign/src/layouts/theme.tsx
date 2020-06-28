// import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#d7d7f4',
      main: '#2d2d2d',
      dark: '#2d2d2d',
      contrastText: '#fff'
    },
    secondary: {
      // use as the prism code highlighting background
      main: '#f5f2f0',
      dark: '#bdbdbd' // '#cf0000'
    }
  },
  typography: {
    fontFamily: ['Michroma', 'sans-serif'].join(','),
    h1: {
      color: '#fff'
    }
  }
})

const scroll = {
  '@global': {
    '*::-webkit-scrollbar': {
      width: theme.spacing(1),
      height: theme.spacing(1)
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.dark,
      outline: '1px solid slategrey'
    },
    // 'img, video': {
    //   aspectRatio: 'attr(width) / attr(height)'
    // },
    '.container-fluid': {
      paddingRight: '15px',
      paddingLeft: '15px',
      paddingBottom: '45px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%',
      minHeight: '80vh',
      '@media (min-width: 600px)': {
        maxWidth: '600px'
      },
      '@media (min-width: 960px)': {
        maxWidth: '960px'
      },
      '@media (min-width: 1280px)': {
        maxWidth: '1280px'
      }
    }
  }
}

const themeFinal = createMuiTheme({
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ...scroll['@global']
      }
    }
  }
})

export default themeFinal
