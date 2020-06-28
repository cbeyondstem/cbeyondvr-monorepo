import * as _ from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
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
      fontSize: '150% !important'
    }
  }
}))

export const BackgroundImg: React.FunctionComponent = props => {
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
              <div>Villa à vendre 145m2 sur terrain de 1000 m²</div>
              <div>Séjour, Salon, 3 chambres et studio indépendant</div>
              <div>La Roquette sur Siagne</div>
              <HomeBedBaths />
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
}
