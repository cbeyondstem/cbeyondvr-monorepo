/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Grid, CardMedia, useMediaQuery } from '@material-ui/core'
import { primaryFont, secondaryFont } from '../../layouts'
import { SkillCardRawProps, SkillCardGrid } from '../../components/SkillCardGrid'
import { orderedImages, services as servicesRaw } from '../../assets/image-list'

//   {
//     folder: `service_M`,
//     service: `M`,
//     title: `MANUFACTURING & PROTOTYPING`,
//     details: `Carbon Composite Manufacturing,
// Prototype fabrication with Integration of 3D printing technologies
// to complex carbon tooling fabrication for very high performance carbon fiber parts.
//     `,
//     images: [`vector6`, `vector3`, `office1`, `office5`, `office2`, `fusion4`, `office4`]
//   },

const services: SkillCardRawProps[] = servicesRaw.map(service => {
  const serviceImages = orderedImages[service.folder]
  return {
    title: service.title,
    image: serviceImages[0],
    avatar: service.service,
    details: service.details,
    carousel: serviceImages // _.slice(serviceImages, 1, serviceImages.length)
  }
})

//   {
//     title: 'Manufacturing & Prototyping',
//     image: 'vectorlaunch_2.jpg',
//     avatar: 'M',
//     details: `Integration of emerging 3D printing technologies applied to complex carbon tooling
//       fabrication for very high performance and ultra light carbon fiber parts.`,
//     carousel: ['robot arm rohit.jpg', 'vectorlaunch_2.jpg']
//   },
//   {
//     title: 'Naval Engineering',
//     image: 'gf42_concept_1.jpg',
//     avatar: 'E',
//     details: `Racing yacht and powerboat, performance prediction, resistance and propulsion, hydrostatics calculation,
//      3D modeling, full structural design and construction, project management.`,
//     carousel: ['gf42_2014_1.jpg', 'offshore47_1.jpg', 'racer44_1.jpg']
//   },
//   {
//     title: 'Aerodynamic & Hydrodynamic',
//     image: 'gf42_fluidanalysis_2.jpg',
//     avatar: 'D',
//     details: `Numerical flow modeling and CFD analysis and validation: inviscid (panel method)
//       and viscous flow (potential flow).
//       modeling process: racing yachts, foiling vessels.`,
//     carousel: ['monohull_research.jpg', 'gf42_fluidanalysis_2.jpg', 'gf42_fluidanalysis_3.jpg']
//   }
// ]

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
  },
  title: {
    paddingBottom: '0.5rem',
    paddingTop: '2rem'
  },
  bio: {
    wordSpacing: `${theme.spacing(0.8)}px`,
    fontFamily: secondaryFont,
    fontSize: '140%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '120%'
    }
    // overflowWrap: 'break-word'
  }
}))

export const Home: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const sm = useMediaQuery((t: Theme) => t.breakpoints.up('sm'))
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  const lg = useMediaQuery((t: Theme) => t.breakpoints.up('lg'))
  const CardMediaVimeo = React.lazy(() => import('../../components/LazyCardMedia/CardMediaVimeo'))
  const isSSR = typeof window === 'undefined'
  let padding
  if (md) {
    padding = 4
  } else if (lg) {
    padding = 8
  }
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
    <Container className={classes.root}>
      {' '}
      <Grid className={classes.grid} container alignItems="center" justify="center" direction="row" spacing={2}>
        <Grid item xs={11} md={4}>
          <Typography variant="body1" align="left" className={classes.bio}>
            <span style={{ fontFamily: primaryFont }}>Courouble Design & Engineering</span> offers since 2011,
            state-of-the-art composite structure design and manufacturing services. Strong of a track record of designs
            across many industrial domains (aerospace, racing yachts, race cars, consumer goods and art), we put these
            skills at your service. Whether you need advanced structural analysis for light-weight composite struture or
            complete end-to-end engineering project management, we are here to help!
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {!isSSR && (
            <React.Suspense fallback={<div>loading...</div>}>
              <CardMediaVimeo className={classes.iframe} width={width} height={height} />
            </React.Suspense>
          )}
        </Grid>
      </Grid>{' '}
      <SkillCardGrid cardList={services} />
    </Container>
  )
}
