/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Box, useMediaQuery } from '@material-ui/core'
import { primaryFont, secondaryFont } from '../../layouts'
import { SkillCardRawProps, SkillCardGrid } from '../../components/SkillCardGrid'

const services: SkillCardRawProps[] = [
  {
    title: 'Structural Analysis',
    image: 'SD airport 1.jpg',
    avatar: 'S',
    details: `Light weight composite design, numerical analysis method for
      optimized structural design and engineering, construction process and assembly.
      Integration of emerging 3D printing technologies applied to complex carbon tooling
      fabrication for very high performance and ultra light carbon fiber parts.`,
    carousel: ['vectorlaunch_2.jpg', 'gf42_2014_2.jpg', 'racer44_4.jpg', 'DougAitken3.jpg']
  },
  {
    title: 'End-to-end Engineering',
    image: 'gf42_concept_1.jpg',
    avatar: 'E',
    details: `Racing yacht and powerboat, performance prediction, resistance and propulsion, hydrostatics calculation,
     3D modeling, full structural design and construction, project management.`,
    carousel: ['gf42_2014_1.jpg', 'offshore47_1.jpg', 'racer44_1.jpg']
  },
  {
    title: 'Aerodynamic & Hydrodynamic',
    image: 'gf42_fluidanalysis_2.jpg',
    avatar: 'D',
    details: `Numerical flow modeling and CFD analysis and validation: inviscid (panel method)
      and viscous flow (potential flow).
      modeling process: racing yachts, foiling vessels.`,
    carousel: ['gf42_fluidanalysis_2.jpg', 'gf42_fluidanalysis_3.jpg']
  }
]

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
    fontSize: '150%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '120%'
    }
    // overflowWrap: 'break-word'
  }
}))

export const Home: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  const lg = useMediaQuery((t: Theme) => t.breakpoints.up('lg'))
  let padding = 2

  if (md) {
    padding = 4
  } else if (lg) {
    padding = 8
  }
  return (
    <Container className={classes.root}>
      {' '}
      <Box p={padding}>
        <Typography variant="body1" align="left" className={classes.bio}>
          <span style={{ fontFamily: primaryFont }}>Courouble Design & Engineering</span> offers since 2011,
          state-of-the-art composite structure design and manufacturing services. Strong of a track record of designs
          across many industrial domains (aerospace, racing yachts, race cars, consumer goods and art), we put these
          skills at your service, whether you need advanced structural analysis for light-weight composite struture or
          complete end-to-end engineering project management, we are here to help!
        </Typography>
      </Box>
      <SkillCardGrid cardList={services} />
    </Container>
  )
}
