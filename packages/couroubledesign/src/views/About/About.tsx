/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box, Grid, useMediaQuery } from '@material-ui/core'
import { Designer } from '../../components/Designer'

const education = [
  {
    date: 'August 1989',
    where: 'GEORGIA TECH UNIVERSITY, ATLANTA, GA, USA.',
    what: 'ARCHITECTURAL SEMINAR about "American cities"'
  },
  {
    date: '1987',
    where: 'UNIVERSITY OF CALIFORNIA, BERKELEY, CA, USA.',
    what: 'SUMMER SESSION, "Architecture, photography, english and litterature about movies: American comedy"'
  },
  {
    date: '1979 to 1985',
    where: 'SCHOOL OF ARCHITECTURE SCHOOL, BORDEAUX, FRANCE.',
    what: 'MASTER IN ARCHITECTURE (DPLG)'
  },
  {
    date: '1978',
    where: 'LYCEE BELLEVUE, SAINTES, FRANCE.',
    what: <>HIGH-SCHOOL DEGREE, mathematics & physics</>
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
    paddingTop: '1rem'
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
            Frederick Courouble, yacht designer and aerospace engineer, graduated with a Bachelors Degree in Naval
            Architecture from Southampton University in England. Continued research in the field of aeronautical
            engineering led him to obtain a Master of Science in Aerospace Engineering from California State University
            Long Beach with an “Outstanding Masters Thesis” award for his research on the America’s Cup in 2007. A novel
            optimization method in the America’s cup based on constructive Neural Network analysis from the on board
            telemetry database. In Europe, Frederick consulted on design work for 2 IMOCA 60 campaigns and joined the
            German Frers office in Milan during the prada America s cup campaign 2000. After relocating to the USA in
            2000, he collaborated with 2 california designers, before opening his own design office and Engineering firm
            in 2011. Today, Frederick is based in Lakewood, California, and is the founder of Courouble Design &
            Engineering Inc. As a structural engineer, he is responsible for composite structural analysis and design
            for rocket launch vehicle at Vector launch Corporation. Primarily specializing in design and performance
            optimization of racing yachts.
          </Typography>
          <Box py={1} />
        </Container>
      </Box>

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
