import * as React from 'react'
import { style } from 'typestyle'

export const theme = {
  Colors: {
    white: 'rbg(252,253,254)', // #FCFDFE
    black: 'rgb(188,186,190)', // #BCBABE
    violet: 'rgb(0,0,128)', // #000080;
    menuTextColor: 'rgb(0,0,128)', // #000080;
    menuBackgroundColor: 'rgb(188,186,190)', // #BCBABE
    normalFontSize: '100%',
    smallFontSize: '90%',
    tinyFontSize: '80%'
  },

  Icons: {
    thumbsUp: '"\\1F44D"',
    caretRight: '"\\25B8"'
  }
}
export const css = {
  bioTitle: style({
    fontSize: `110% !important`,
    color: theme.Colors.violet
  }),

  ListStyle: (listIcon = theme.Icons.caretRight, listColor = 'orange') =>
    style({
      $nest: {
        '& ~ ul': {
          listStyle: 'none' /* Remove list bullets */,
          padding: '0',
          margin: '0'
        },

        '& ~ ul li': {
          paddingLeft: '16px'
        },

        '& ~ ul li:before': {
          content: listIcon /* Insert content that looks like bullets */,
          paddingRight: '8px',
          color: listColor /* Or a color you prefer */
        }
      }
    }),

  HeaderStyle: (color = theme.Colors.violet) =>
    style({
      $nest: {
        '& ~ h1': {
          color
        },
        '& ~ h2': {
          color
        },
        '& ~ h3': {
          color
        },
        '& ~ h4': {
          color
        },
        '& ~ h5': {
          color
        },
        '& ~ h6': {
          color
        }
      }
    })
}

export const StyledTable = ({ children }) => (
  <table className={style({ borderStyle: 'none !important' })}>{children}</table>
)
