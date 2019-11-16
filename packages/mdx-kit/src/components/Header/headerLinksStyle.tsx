import { createStyles, Theme } from '@material-ui/core/styles'

const headerLinksStyle = (theme: Theme) =>
  createStyles({
    list: {
      fontSize: '14px',
      margin: 0,
      paddingLeft: '0',
      listStyle: 'none',
      paddingTop: '0',
      paddingBottom: '0',
      color: 'inherit'
    },
    listItem: {
      float: 'left',
      color: 'inherit',
      position: 'relative',
      display: 'block',
      width: 'auto',
      margin: '0',
      padding: '0',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&:after': {
          width: `calc(100% - ${theme.spacing(2)})`,
          content: '""',
          display: 'block',
          height: '1px',
          marginLeft: theme.spacing(1),
          backgroundColor: '#e5e5e5'
        }
      }
    },
    listItemText: {
      padding: '0 !important'
    },
    navLink: {
      color: 'inherit',
      position: 'relative',
      padding: '0.9375rem',
      fontWeight: 400,
      fontSize: '14px',
      textTransform: 'uppercase',
      borderRadius: '3px',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex',
      '&:hover,&:focus': {
        color: 'inherit',
        background: 'rgba(200, 200, 200, 0.2)'
      },
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% - ${theme.spacing(2)})`,
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
        textAlign: 'left',
        '& > span:first-child': {
          justifyContent: 'flex-start'
        }
      }
    },
    notificationNavLink: {
      color: 'inherit',
      padding: '0.9375rem',
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'uppercase',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex',
      top: '4px'
    },
    registerNavLink: {
      top: '3px',
      position: 'relative',
      fontWeight: 400,
      fontSize: '12px',
      textTransform: 'uppercase',
      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex'
    },
    navLinkActive: {
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    icons: {
      width: '20px',
      height: '20px',
      marginRight: '3px'
    },
    socialIcons: {
      position: 'relative',
      fontSize: '20px !important',
      marginRight: '4px'
    },
    dropdownLink: {
      '&,&:hover,&:focus': {
        color: 'inherit',
        textDecoration: 'none',
        display: 'block',
        padding: '10px 20px'
      }
    },
    marginRight5: {
      marginRight: '5px'
    }
  })

export default headerLinksStyle
