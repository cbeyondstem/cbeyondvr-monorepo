// import { red } from '@material-ui/core/colors'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'
import { gatsbyHighlight, gatsbyHighlightLanguageBadges } from '@cbeyond/ui-kit'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#d7d7f4',
      main: '#2c2ca0'
      // contrastText: '#2c2ca0'
    },
    secondary: {
      // use as the prism code highlighting background
      main: '#f5f2f0'
    }
  },
  typography: {
    fontFamily: ['Roboto'].join(',')
    // h1: {
    //   color: '#2c2ca0'
    // }
  }
})

const gh = gatsbyHighlight(theme)
const gl = gatsbyHighlightLanguageBadges(theme)
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
    '.container-fluid': {
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%',
      maxWidth: '95vw',
      '@media (min-width: 576px)': {
        maxWidth: '576px !important'
      },
      '@media (min-width: 768px)': {
        maxWidth: '768px !important'
      },
      '@media (min-width: 992px)': {
        maxWidth: '992px !important'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1200px !important'
      },
      '@media (min-width: 1500px)': {
        maxWidth: '1500px !important'
      }
    }
  }
}

const themeFinal = createMuiTheme({
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ...scroll['@global'],
        ...gl['@global'],
        ...gh['@global']
      }
    }
  }
})

export default themeFinal
