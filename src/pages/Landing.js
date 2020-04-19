import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import backgroundImage from "../images/landing.png";

const useStyles = makeStyles(() => ({
  backgroundImage: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    textAlign: "center",
    flexDirection: "column",
    background: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "16rem",
  },
  centered: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  callToAction: {
    fontWeight: "bold",
    borderRadius: ".3rem",
  },
  heading: {
    marginTop: "3rem",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.backgroundImage}>
        <Typography className={classes.heading} variant="h1" gutterBottom>
          Organize it all <br /> with Todoist
        </Typography>
        <Button
          className={classes.callToAction}
          color="primary"
          variant="contained"
          component={Link}
          to="/signup"
        >
          <Typography className={classes.bold} variant="h5">
            Get Started
          </Typography>
        </Button>
      </div>
    </Container>
  );
}
