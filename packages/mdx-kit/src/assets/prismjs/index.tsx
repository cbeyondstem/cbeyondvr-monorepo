// import { grey, red } from '@material-ui/core/colors'
import { createStyles, Theme } from '@material-ui/core/styles'

const prismTheme = (t: Theme) => ({
  fontWeights: {
    body: 'normal',
    bold: 'bold'
  },
  colors: {
    white: '#fff',
    code: {
      text: '#000',
      background: t.palette.secondary.main,
      lineHighlightBorder: t.palette.secondary.main,
      lineHighlightBackground: t.palette.secondary.dark
    },
    comment: '#708090', // slategray
    tag: '#995',
    punctuation: '#999',
    selector: '#690',
    keyword: '#07a',
    add: '#690',
    remove: '*#905',
    regex: '#e90',
    function: '#DD4A68',
    operator: '#9a6e3a',
    invisibles: 'transparent'
  }
})

export const prismToken = (t: Theme) => {
  const p = prismTheme(t)
  return createStyles({
    // PrismJS syntax highlighting token styles
    // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
    '@global': {
      '.token': {
        display: `inline`
      },
      '.token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata': {
        color: p.colors.comment
      },
      '.token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol': {
        color: p.colors.tag
      },
      '.token.punctuation': {
        color: p.colors.selector
      },
      '.token.operator, .token.entity, .token.url, .token.variable': {},
      '.token.atrule, .token.attr-value, .token.keyword, .token.class-name': {
        color: p.colors.keyword
      },
      '.token.inserted': {
        color: p.colors.add
      },
      '.token.deleted': {
        color: p.colors.remove
      },
      '.token.regex, .token.important': {
        color: p.colors.regex
      },
      '.language-css .token.string, .style .token.string': {
        color: p.colors.selector
      },
      '.token.important': {
        fontWeight: 'normal'
      },
      '.token.bold': {
        fontWeight: 'bold'
      },
      '.token.italic': {
        fontStyle: `italic`
      },
      '.token.entity': {
        cursor: `help`
      },
      '.namespace': {
        opacity: 0.7
      },
      // PrismJS plugin styles
      '.token.tab:not(:empty):before, .token.cr:before, .token.lf:before': {
        color: p.colors.invisibles
      }
    }
  })
}

export const gatsbyHighlightLanguageBadges = (t: Theme) => {
  const p = prismTheme(t)
  return createStyles({
    '@global': {
      ".gatsby-highlight pre[class*='language-']": {
        border: 0,
        // WebkitOverflowScrolling: `touch`,
        height: 'auto',
        [t.breakpoints.up('md')]: {
          // do not vertical scroll on large screen
          overflowY: 'hidden !important' as 'hidden'
          // maxHeight: '60vh'
        },
        [t.breakpoints.down('sm')]: {
          // do not vertical scroll on large screen
          maxHeight: '60vh'
        }
      },
      ".gatsby-highlight code[class*='language-']": {
        // backgroundColor: `transparent`,
        textShadow: 'none !important',
        padding: t.spacing(4, 1, 2, 4)
      },
      ".gatsby-highlight pre[class*='language-'].line-numbers .line-numbers-rows": {
        // position: absolute;
        // pointer-events: none;
        top: t.spacing(4.4)
      },

      ".gatsby-highlight pre[class*='language-']::before": {
        background: t.palette.primary.light,
        borderRadius: `0 0 .8em .8em`,
        color: '#FFF',
        fontSize: '12px',
        // fontFamily: 'Roboto',
        // letterSpacing: t.letterSpacings.tracked,
        // lineHeight: t.lineHeights.solid,
        padding: t.spacing(1, 1),
        position: `absolute`,
        left: t.spacing(3),
        textAlign: `right`,
        textTransform: `uppercase`,
        textShadow: 'none',
        top: `0`
      },
      ".gatsby-highlight pre[class*='language-javascript']::before": {
        content: `'js'`,
        background: `#f7df1e`
      },
      ".gatsby-highlight pre[class*='language-js']::before": {
        content: `'js'`,
        background: `#f7df1e`
      },
      ".gatsby-highlight pre[class*='language-jsx']::before": {
        content: `'jsx'`,
        background: `#61dafb`
      },
      ".gatsby-highlight pre[class*='language-graphql']::before": {
        content: `'GraphQL'`,
        background: `#E10098`,
        color: p.colors.white
      },
      ".gatsby-highlight pre[class*='language-html']::before": {
        content: `'html'`,
        background: `#005A9C`,
        color: p.colors.white
      },
      ".gatsby-highlight pre[class*='language-css']::before": {
        content: `'css'`,
        background: `#ff9800`,
        color: p.colors.white
      },
      ".gatsby-highlight pre[class*='language-mdx']::before": {
        content: `'mdx'`,
        background: `#f9ac00`,
        color: p.colors.white,
        fontWeight: 'normal'
      },
      ".gatsby-highlight pre[class*='language-shell']::before": {
        content: `'shell'`
      },
      ".gatsby-highlight pre[class*='language-python']::before": {
        content: `'python'`
      },
      ".gatsby-highlight pre[class*='language-sh']::before": {
        content: `'sh'`
      },
      ".gatsby-highlight pre[class*='language-bash']::before": {
        content: `'driving language'`
      },
      ".gatsby-highlight pre[class*='language-yaml']::before": {
        content: `'yaml'`,
        background: `#ffa8df`
      },
      ".gatsby-highlight pre[class*='language-markdown']::before": {
        content: `'md'`
      },
      ".gatsby-highlight pre[class*='language-json']::before, .gatsby-highlight pre[class='language-json5']::before": {
        content: `'json'`,
        background: `linen`
      },
      ".gatsby-highlight pre[class*='language-diff']::before": {
        content: `'diff'`,
        background: `#e6ffed`
      },
      ".gatsby-highlight pre[class*='language-text']::before": {
        content: `'text'`,
        background: p.colors.white
      },
      ".gatsby-highlight pre[class*='language-flow']::before": {
        content: `'flow'`,
        background: `#E8BD36`
      }
    }
  })
}

export const gatsbyHighlight = (t: Theme) => {
  const p = prismTheme(t)
  return createStyles({
    '@global': {
      // gatsby-remark-prismjs styles
      '.gatsby-highlight': {
        // background: p.colors.code.background,
        color: p.colors.code.text,
        position: `relative`
        // WebkitOverflowScrolling: `touch`
      },
      '.gatsby-highlight pre code': {
        display: `block`,
        fontSize: `100%`,
        lineHeight: 1.5,
        float: `left`,
        minWidth: `100%`,
        // reset code vertical padding declared earlier
        padding: `0 ${t.spacing(6)}`
      },
      '.gatsby-highlight-code-line': {
        background: p.colors.code.lineHighlightBackground,
        // marginLeft: `-${t.spacing(6)}`,
        // marginRight: `-${t.spacing(6)}`,
        // paddingLeft: t.spacing(5),
        // paddingRight: t.spacing(6),
        // borderLeft: `${t.spacing(1)} solid ${p.colors.code.lineHighlightBorder}`,
        display: `block`
      }
    }
  })
}
