import * as _ from 'lodash'
import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  caption: {
    fontSize: '10px !important'
  }
})

export const About: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const classes = useStyles(props)
  return (
    <div id="container">
      <h1>ABOUT</h1>
      <p>
        Dominique Maxime Genauzeau was born in La Rochelle/France, currently lives and works in San Francisco. He is the
        Designer for DMG Design's Interiors, commercial and private, translating conceptual designs into very detailed
        realizations, extending his creativity into furniture, light fixtures and art installations. His passion for the
        ocean, fluidity, organic forms, translate into his compositions. Mixing his classical heritage with modernity is
        fundamental element of his own aesthetic. His partnership with talented contractors, wood and metal craftsmen,
        allows him to complete challenging remodeling projects.
      </p>

      <h2>STUDIES</h2>
      <table className="about">
        <tr className="dotted">
          <td className="strong">August 1989 -</td>
          <td>ARCHITECTURAL SEMINAR about "American cities" , GEORGIA TECH UNIVERSITY, ATLANTA, GA, USA.</td>
        </tr>
        <tr className="dotted">
          <td className="strong">1987 -</td>
          <td>
            SUMMER SESSION, "Architecture, photography, english and litterature about movies: American comedy",
            UNIVERSITY OF CALIFORNIA, BERKELEY, CA, USA.
          </td>
        </tr>
        <tr className="dotted">
          <td className="strong">1979 to 1985 -</td>
          <td>MASTER IN ARCHITECTURE (DPLG), ARCHITECTURE SCHOOL OF BORDEAUX, FRANCE.</td>
        </tr>
        <tr>
          <td className="strong">1978 -</td>
          <td>GRADUATE BACCALAUREAT, S&eacute;rie C, mathematics/physics LYCEE BELLEVUE, SAINTES, FRANCE.</td>
        </tr>
      </table>
      <h2>ART EXHIBITIONS</h2>
      <table className="about">
        <tr className="dotted">
          <td className="strong">October 2000 -</td>
          <td>
            "RENCONTRES No1" - Series of 6 paintings, ink and graphite on vellum, 21"x 34", WILKES BASHFORD, 375 Sutter
            Street, San Francisco.
          </td>
        </tr>
        <tr className="dotted">
          <td className="strong">November 1999 -</td>
          <td>
            "RENCONTRES No2" - Series of 6 paintings, ink and graphite on vellum, 21"x 34", SKYBAR, HOTEL MONDRIAN, 8440
            Sunset Blvd, Los Angeles, for "PICTURE THIS"/Fund Raising for the Silver Lining Foundation, hosted by Cyndy
            Crawford and Rande Gerber.
          </td>
        </tr>
        <tr className="dotted">
          <td className="strong">May 1999 -</td>
          <td>
            "PASTIS...IS CETERA" - Series of 6 paintings, acrylic on canvas, 18"x 18", PIPERADE (PASTIS) RESTAURANT,
            1015 Battery Street, San Francisco.
          </td>
        </tr>
        <tr>
          <td className="strong">October 1999 -</td>
          <td>
            "3, BETWEEN 2 STARS" - Series of 5 paintings, ink and graphite on vellum, 26"x 32", FRINGALE RESTAURANT, 570
            4TH Street, San Francisco.
          </td>
        </tr>
      </table>
      <h2>COMMISSIONNED ART/INSTALLATIONS</h2>
      <table className="about">
        <tr className="dotted">
          <td className="strong">2009 -</td>
          <td>
            WALL INSTALLATION, Wood Spheres, Convex Mirrors, Magnifying Domes/Pictures, LED lighting, on 33 Lacquered
            Panels,9' X 30', Private Home, Pacific Heights, San Francisco.
          </td>
        </tr>
        <tr className="dotted">
          <td className="strong">2007 -</td>
          <td>
            "&MEETS&copy;" - Triptich, acrylic and graphite on wood, 3 x 12" x 72", KRONENBEGER/ROSENFELD Internet Law
            Attorneys, 150 Post Street, Suite 520, San Francisco.
          </td>
        </tr>
        <tr>
          <td className="strong">1998 -</td>
          <td>
            "RENCONTRE DU 1ero ET DU 2&eacute;meo", ink and graphite on vellum, 2 x 19" x 26", PARTECH/VENTURE CAPITAL
            Vincent Worm, 50 California Street, San Francisco.
          </td>
        </tr>
      </table>
    </div>
  )
}
