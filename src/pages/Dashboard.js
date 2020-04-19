import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
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
    <Container className={classes.centered} maxWidth="lg">
      Dashboard Page
    </Container>
  );
}
