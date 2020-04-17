import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60vh",
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <Container className={classes.centered} maxWidth="lg">
      Landing Page
    </Container>
  );
}
