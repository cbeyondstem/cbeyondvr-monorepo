/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Box, Grid, useMediaQuery } from '@material-ui/core'
import { Designer } from '../../components/Designer'
import { primaryFont, secondaryFont, renderHtml } from '../../layouts'

const education = [
  {
    date: '2007',
    where: 'awarded by the College of Aeropsace Engineering',
    what: renderHtml(`&ldquo;Outstanding Master’s Thesis&rdquo; Award:
      Deep Learning optimization methods for America’s Cup racing yacht`)
  },
  {
    date: '2002-2007',
    where: 'California State University Long Beach (CSULB)',
    what: `Master of Science in Aerospace Engineering`
  },
  {
    date: '1992-1995',
    where: 'Solent University, (Southampton, England)',
    what: 'Bachelor of Science in Engineering'
  }
]
const exhibitions = [
  {
    date: 'October 2000',
    where: 'WILKES BASHFORD, 375 Sutter Street, San Francisco.',
    what: '"RENCONTRES No1" - Series of 6 paintings, ink and graphite on vellum, 21"x 34"'
  },
  {
    date: 'November 1999',
    where: 'SKYBAR, HOTEL MONDRIAN, 8440 Sunset Blvd, Los Angeles',
    what:
      '"RENCONTRES No2" - Series of 6 paintings, ink and graphite on vellum, 21"x 34"' +
      'for "PICTURE THIS" Fund Raising for the Silver Lining Foundation, ' +
      'hosted by Cindy Crawford and Rande Gerber'
  },
  {
    date: 'May 1999',
    where: 'PIPERADE (PASTIS) RESTAURANT, 1015 Battery Street, San Francisco',
    what: '"PASTIS...IS CETERA" - Series of 6 paintings, acrylic on canvas, 18"x 18"'
  },
  {
    date: 'October 1999',
    where: 'FRINGALE RESTAURANT, 570 4TH Street, San Francisco.',
    what: '"3, BETWEEN 2 STARS" - Series of 5 paintings, ink and graphite on vellum, 26"x 32"'
  }
]
const commissioned = [
  {
    date: '2009',
    where: 'Private Home, Pacific Heights, San Francisco.',
    what:
      'WALL INSTALLATION, Wood Spheres, Convex Mirrors, Magnifying Domes/Pictures, LED lighting,' +
      "on 33 Lacquered Panels,9' X 30'"
  },
  {
    date: '2007',
    where: (
      <>
        <small>KRONENBEGER ROSENFELD INTERNET LAW ATTORNEYS</small>, 150 Post Street, Suite 520, San Francisco.
      </>
    ),
    what: <>"MEETS&copy;" Triptich, acrylic and graphite on wood, 3 x 12" x 72"</>
  },
  {
    date: '1998',
    where: (
      <>
        <small>PARTECH VENTURE CAPITAL</small> Vincent Worm, 50 California Street, San Francisco.
      </>
    ),
    what: '"RENCONTRE No1 and No2", ink and graphite on vellum, 2 x 19" x 26"'
  }
]

interface ActivityProps extends React.ComponentPropsWithRef<'div'> {
  date: string | React.ReactNode
  where: string | React.ReactNode
  what: string | React.ReactNode
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
  about: {
    paddingLeft: '0 !important'
  },
  activity: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    '& div.left': {
      paddingLeft: '0 !important',
      paddingRight: '0.5rem !important'
    },
    '& div.right': {
      paddingLeft: '0.5rem !important',
      paddingRight: '0 !important'
    }
  },
  bio: {
    paddingBottom: '1rem',
    paddingTop: '1rem',
    fontFamily: secondaryFont,
    fontSize: '135%'
    // overflowWrap: 'break-word'
  },
  where: {
    fontFamily: secondaryFont,
    fontSize: '125%'
    // overflowWrap: 'break-word'
  },
  what: {
    fontFamily: secondaryFont,
    fontSize: '125%'
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

const Activity: React.FunctionComponent<ActivityProps> = props => {
  const classes = useStyles(props)
  const { date, where, what } = props
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  return (
    <Container>
      <Grid className={classes.activity} container direction="row" spacing={3}>
        <Grid item xs={12} sm={2}>
          <Typography align="left" variant="body1">
            {date}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="body1" className={classes.what}>
            {what}
          </Typography>
          <Box py={1} />
          <Typography variant="body1" className={classes.where}>
            {where}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export const About: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const Exhibitions = exhibitions.map((p, idx) => (
    <Box key={uid(p, idx)} py={1} my={2}>
      <Activity {...p} />
    </Box>
  ))
  const Commissioned = commissioned.map((p, idx) => (
    <Box key={uid(p, idx)} py={1} my={2}>
      <Activity {...p} />
    </Box>
  ))
  const Education = education.map((p, idx) => (
    <Box key={uid(p, idx)} py={1} my={2}>
      <Activity {...p} />
    </Box>
  ))

  return (
    <Container className={classes.root}>
      <Box py={2} />
      <Typography variant="h5">ABOUT</Typography>
      <Box py={1} my={2}>
        <Container className={classes.about}>
          <Designer />
          <Typography variant="body1" className={classes.bio}>
            <span style={{ fontFamily: primaryFont }}>Frederick Courouble</span> was born in France, currently lives and
            works in Los Angeles. <br /> He is the founder of{' '}
            <span style={{ fontFamily: primaryFont }}> Courouble Design & Engineering </span> offering since 2011,
            state-of-the-art composite structure design and manufacturing services. The firm's track record of
            successful innovative designs spanning across many industrial domains (aerospace, racing yachts, race cars,
            underwater sculptures, sports goods, electric vehicles) speaks for itself. This versatility dear to
            Frederick is also at the core of his unique approach, allowing to integrate cross-cutting bleeding-edge
            techniques for ever more performant and light-weight designs: Deep Learning AI methods, Finite Elements
            analysis or 3D-printing molding.
          </Typography>
          <Box py={1} />
        </Container>
      </Box>
      <Typography variant="h5">EDUCATION</Typography>
      <Box py={2} />
      {Education}
      <Box py={2} />
      {/* <Box py={1} />
      <Typography variant="h5">EXHIBITIONS</Typography>
      <Box py={2} />
      {Exhibitions}
      <Box py={2} />
      <Typography variant="h5">COMMiSSIONED ART / INSTALLATIONS</Typography>
      <Box py={2} />
      {Commissioned}
      <Box py={2} />
      <Typography variant="h5">EDUCATION</Typography>
      <Box py={2} />
      {Education}
      <Box py={2} /> */}
    </Container>
  )
}
