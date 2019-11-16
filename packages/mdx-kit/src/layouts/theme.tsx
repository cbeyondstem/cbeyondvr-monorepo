// import { red } from '@material-ui/core/colors'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'
import { gatsbyHighlight, gatsbyHighlightLanguageBadges } from 'assets/prismjs'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d7d7f4'
    },
    secondary: {
      main: '#f5f2f0'
    }
    // error: {
    //    main: red.A400
    // },
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
