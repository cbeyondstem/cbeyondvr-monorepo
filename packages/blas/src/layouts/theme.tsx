// import { red } from '@material-ui/core/colors'
import { createMuiTheme, createStyles } from '@material-ui/core/styles'
import { gatsbyHighlight, gatsbyHighlightLanguageBadges } from '@cbeyond/ui-kit'

const background = {
  light: '#fffaed',
  neutral: '#f2ecdc',
  darker: '#F3EBDB'
}
const colors = {
  red0: '#fe2400',
  red: '#fe4627',
  pink: '#ffeaed',
  beige: '#f2ecdc',
  green: '#bbd39b',
  grey: '#2d2d2d'
}
const palette = {
  orange: '#ff9800',
  beige: '#d7c9c0',
  green: '#bbd39b',
  red: '#fe4627'
}

const bodyBackground = '#f5f5f5'
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#fffaed',
      main: colors.green,
      dark: '#bdbdbd',
      contrastText: '#fff'
    },
    secondary: {
      // use as the prism code highlighting background
      main: '#f5f2f0',
      dark: '#bdbdbd' // '#cf0000'
    }
  },
  typography: {
    fontFamily: ['Krona One', 'sans-serif'].join(','),
    h1: {
      color: colors.grey // this h1 typography color is used for the menu toolbar
    }
  }
})

const gh = gatsbyHighlight(theme)
const gl = gatsbyHighlightLanguageBadges(theme)
const body = createStyles({
  '@global': {
    body: {
      backgroundColor: bodyBackground
    }
  }
})
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
})

const themeFinal = createMuiTheme({
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ...body['@global'],
        ...scroll['@global'],
        ...gl['@global'],
        ...gh['@global']
      }
    }
  }
})

export default themeFinal
