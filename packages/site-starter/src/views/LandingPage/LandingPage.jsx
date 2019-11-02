import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components and styles
import {
  Header,
  Footer,
  GridContainer,
  GridItem,
  Button
  //Parallax
} from "@creative/material-kit";

// styles
import { landingPageStyles } from "assets";

// Sections for this page
// import ProductSection from './Sections/ProductSection.js'
// import TeamSection from './Sections/TeamSection.js'
// import WorkSection from './Sections/WorkSection.js'
// import landingBg from '@creative/material-kit/src/assets/img/landing-bg.jpg'
import { HeaderLinks } from "components/Header/HeaderLinks";

const dashboardRoutes = [];

const useStyles = makeStyles(landingPageStyles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="DMG Design"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that{"'"}s why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>
            <br />
            <Button
              color="danger"
              size="lg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Watch video
            </Button>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} />
      </div>
      <Footer />
    </div>
  );
}
