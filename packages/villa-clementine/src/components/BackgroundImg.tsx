import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import { Chip } from '@material-ui/core'

import EuroIcon from '@material-ui/icons/Euro'
import withWidth, { isWidthDown, WithWidthProps } from '@material-ui/core/withWidth'
import { HomeBedBaths } from './HomeBedBaths'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    // objectFit:"scale-down",
    // objectPosition:"0% 100%",
    minHeight: '200px',
    // lineHeight: '200px',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#fff !important',
    position: 'relative',
    '& > div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '200% !important',
      [theme.breakpoints.down('md')]: {
        fontSize: '150% !important'
      },
      '& svg': {
        paddingRight: theme.spacing(0.5),
        bottom: '-8px',
        [theme.breakpoints.down('md')]: {
          bottom: '-4px'
        },
        position: 'relative'
      }
    }
  }
}))

const BackgroundImgBase: React.FunctionComponent<WithWidthProps> = props => {
  const classes = useStyles(props)

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "esterel.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={classes.background}
            fluid={imageData}
            // backgroundColor={`#040e18`}
          >
            <div>
              <div>La Roquette sur Siagne</div>
              <div>Villa 144 m2 avec studio indépendant</div>
              <div>
                <span>
                  <span>720 000</span>
                  <EuroIcon fontSize={isWidthDown('md', props.width) ? 'small' : 'large'} />
                </span>
              </div>
              <HomeBedBaths />
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
}

export const BackgroundImg = withWidth()(BackgroundImgBase)
