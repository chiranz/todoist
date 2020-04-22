import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// MUI Imports
import Container from "@material-ui/core/Container";
// Local imports
import { getAllProjects, getAllTasks } from "../redux/actions/dataActions";

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
  const { authenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authenticated) {
      dispatch(getAllProjects());
      dispatch(getAllTasks());
    }
  }, [dispatch, authenticated]);

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      Dash Board
    </Container>
  );
}
