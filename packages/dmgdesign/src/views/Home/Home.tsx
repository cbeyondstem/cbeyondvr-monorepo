/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'

import Img, { FluidObject } from 'gatsby-image'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { Container, Typography, CardMedia, Box, Grid, useMediaQuery } from '@material-ui/core'
import { AllImgConsumer, CarouselImgProps } from '@cbeyond/ui-kit'
import { ImageSharpFluid } from '../../types/gatsby-graphql-types'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    paddingBottom: `2rem`
  },
  iframe: {
    '& .vp-center': {
      justifyContent: 'flex-start !important'
    }
  },
  grid: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
    // '& div.left': {
    //   paddingLeft: '0 !important',
    //   paddingRight: '0.5rem !important'
    // },
    // '& div.right': {
    //   paddingLeft: '0.5rem !important',
    //   paddingRight: '0 !important'
    // }
  },
  title: {
    paddingBottom: '0.5rem',
    paddingTop: '2rem'
  },
  bio: {
    paddingBottom: '1rem',
    paddingTop: '1rem',
    wordSpacing: `${theme.spacing(0.8)}px`,
    fontSize: '125%'
    // overflowWrap: 'break-word'
  },
  where: {
    fontSize: '14px !important'
    // overflowWrap: 'break-word'
  },
  what: {
    fontSize: '14px !important'
    // overflowWrap: 'break-word'
  },
  paper: {
    backgroundColor: `${theme.palette.primary} !important`
    // backgroundColor: `#000 !important`
  },
  divider: {
    backgroundColor: '#787878 !important'
  }
}))

export const Home: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const theme = useTheme()
  const fixItem: (img: ImageSharpFluid) => FluidObject = img => {
    const { aspectRatio = 1.5, src = '', srcSet = '', sizes = '', ...fluid } = img
    return { aspectRatio, src, srcSet, sizes, ...fluid }
  }
  const sm = useMediaQuery((t: Theme) => t.breakpoints.up('sm'))
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  let width = 600
  let height = 260

  if (md) {
    width = 1800
    height = 640
  } else if (sm) {
    width = 640
    height = 320
  }
  return (
    <AllImgConsumer>
      {({ images, maxWidth = 1200 }) => {
        return (
          <Container className={classes.root}>
            <Grid className={classes.grid} container alignItems="center" justify="center" direction="row" spacing={2}>
              <Grid item xs={11} md={4} className="left">
                <Typography variant="body1" align="left" className={classes.bio}>
                  DMG Design craftsmanship mixes classical heritage with modernity, taking inspiration from the ocean
                  fluidity and organic forms. DMGDesign unique aesthetic creates a unique interior ambiance with custom
                  pieces of furniture, light fixtures and art installations.
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} className="right">
                <CardMedia
                  component="iframe"
                  className={classes.iframe}
                  title="DMG Design SF - Project Portfolio"
                  image="https://player.vimeo.com/video/139663778?byline=false&portrait=false&title=false&fun=false&texttrack=false&autoplay=true&muted=true&loop=1"
                  width={width}
                  height={height}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />{' '}
              </Grid>
            </Grid>
            <Box py={2} />
            {[
              ['home/_0002_lit2.jpg', 'home/_0005_lit.jpg'],
              ['interiors/_PP_5178.jpg', 'interiors/_0001_lit-copy-4'],
              ['interiors/WallPanorama.jpg']
            ].map(pathList => {
              const selectedImages: CarouselImgProps[] = []
              pathList.forEach(path => {
                const item = images.filter(img => img.path.search(path) > -1)
                if (item.length > 0) {
                  selectedImages.push(item[0])
                }
              })

              return (
                <Grid className={classes.grid} container alignItems="center" direction="row" spacing={3}>
                  <Grid item xs={12} lg={selectedImages.length > 1 ? 6 : 12} className="left">
                    {selectedImages[0].caption ? (
                      <Typography className={classes.title} align="left" variant="body1">
                        {selectedImages[0].caption.split(',').map(t => (
                          <div>{t}</div>
                        ))}
                      </Typography>
                    ) : null}
                    <Img
                      fluid={fixItem(selectedImages[0].desktop)}
                      title={selectedImages[0].title}
                      alt={selectedImages[0].title}
                      backgroundColor={
                        theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
                      }
                      style={{
                        margin: '0 auto', // Used to center the image
                        maxWidth: '1200'
                      }}
                    />
                  </Grid>
                  {selectedImages.length > 1 ? (
                    <Grid item xs={12} lg={6} className="right">
                      {selectedImages[1].caption ? (
                        <Typography className={classes.title} align="left" variant="body1">
                          {selectedImages[1].caption.split(',').map(t => (
                            <div>{t}</div>
                          ))}
                        </Typography>
                      ) : null}
                      <Img
                        fluid={fixItem(selectedImages[1].desktop)}
                        title={selectedImages[1].title}
                        alt={selectedImages[1].title}
                        backgroundColor={
                          theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
                        }
                        style={{
                          margin: '0 auto', // Used to center the image
                          maxWidth: '1200'
                        }}
                      />
                    </Grid>
                  ) : null}
                </Grid>
              )
            })}
          </Container>
        )
      }}
    </AllImgConsumer>
  )
}
