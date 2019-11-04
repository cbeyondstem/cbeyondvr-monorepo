/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Paper, Box, Grid } from '@material-ui/core'

const studies = [
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
    what: 'HIGH-SCHOOL DEGREE, mathematics/physics'
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
      'for "PICTURE THIS"/Fund Raising for the Silver Lining Foundation, ' +
      'hosted by Cindy Crawford and Rande Gerber'
  },
  {
    date: 'May 1999',
    where: 'PIPERADE (PASTIS) RESTAURANT, 1015 Battery Street, San Francisco',
    what: '"PASTIS...IS CETERA" - Series of 6 paintings, acrylic on canvas, 18"x 18"'
  },
  {
    date: 'October 1999',
    where: 'FRINGALE RESTAURANT,570 4TH Street, San Francisco.',
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
    where: 'KRONENBEGER/ROSENFELD Internet Law Attorneys, 150 Post Street, Suite 520, San Francisco.',
    what: '"&MEETS&copy;" - Triptich, acrylic and graphite on wood, 3 x 12" x 72"'
  },
  {
    date: '1998',
    where: 'PARTECH/VENTURE CAPITAL Vincent Worm, 50 California Street, San Francisco.',
    what: '"RENCONTRE No1 and No2", ink and graphite on vellum, 2 x 19" x 26"'
  }
]

interface ActivityProps extends React.ComponentPropsWithRef<'div'> {
  date: string
  where: string
  what: string
}

const useStyles = makeStyles({
  caption: {
    fontSize: '10px !important'
  },
  where: {
    fontSize: '10px !important'
  },
  what: {
    fontSize: '14px !important'
  },
  paper: {
    backgroundColor: '#787878 !important'
  }
})

const Activity: React.FunctionComponent<ActivityProps> = props => {
  const classes = useStyles(props)
  const { date, where, what } = props
  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={4}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body1">{date}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" className={classes.where}>
                {where}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" className={classes.what}>
            {what}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const About: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  const Exhibitions = exhibitions.map((p, idx) => (
    <Box key={uid(p, idx)} p={1} m={2}>
      <Activity {...p} />
    </Box>
  ))
  const Commissioned = commissioned.map((p, idx) => (
    <Box key={uid(p, idx)} p={1} m={2}>
      <Activity {...p} />
    </Box>
  ))
  const Studies = studies.map((p, idx) => (
    <Box key={uid(p, idx)} p={1} m={2}>
      <Activity {...p} />
    </Box>
  ))

  return (
    <Container maxWidth="md">
      <Paper>
        <Box p={2} />
        <Typography variant="h5">ABOUT</Typography>
        <Box p={1} m={2}>
          <Paper key="bio" className={classes.paper}>
            <Typography variant="caption">
              Dominique Maxime Genauzeau was born in La Rochelle/France, currently lives and works in San Francisco. He
              is the Designer for DMG Design's Interiors, commercial and private, translating conceptual designs into
              very detailed realizations, extending his creativity into furniture, light fixtures and art installations.
              His passion for the ocean, fluidity, organic forms, translate into his compositions. Mixing his classical
              heritage with modernity is fundamental element of his own aesthetic. His partnership with talented
              contractors, wood and metal craftsmen, allows him to complete challenging remodeling projects.
            </Typography>
          </Paper>
        </Box>
        <Box p={1} />
        <Typography variant="h5">EXHIBITIONS</Typography>
        <Box p={2} />
        {Exhibitions}
        <Box p={2} />
        <Typography variant="h5">COMMiSSIONED ART / INSTALLATIONS</Typography>
        <Box p={2} />
        {Commissioned}
        <Box p={2} />
        <Typography variant="h5">STUDIES</Typography>
        <Box p={2} />
        {Studies}
        <Box p={2} />
      </Paper>
    </Container>
  )
}
