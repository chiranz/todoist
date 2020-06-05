import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// MUI Imports
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60vh",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      Dash Board
    </Container>
  );
}
