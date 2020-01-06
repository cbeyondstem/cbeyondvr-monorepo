// import { red } from '@material-ui/core/colors'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'
import { gatsbyHighlight, gatsbyHighlightLanguageBadges } from '@cbeyond/ui-kit'

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
    fontFamily: ['Michroma'].join(','),
    h1: {
      color: '#fff'
    }
  }
})

const gh = gatsbyHighlight(theme)
const gl = gatsbyHighlightLanguageBadges(theme)
const scroll = createStyles({
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
      '@media (min-width: 576px)': {
        maxWidth: '576px'
      },
      '@media (min-width: 768px)': {
        maxWidth: '768px'
      },
      '@media (min-width: 992px)': {
        maxWidth: '992px'
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1200px'
      }
    }
  }
})

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
