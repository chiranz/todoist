import React from "react";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";
import { useSelector } from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const ProjectList = ({ filterTasks, className, ...rest }) => {
  const classes = useStyles();
  const projects = useSelector((state) => state.data.projects);
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {projects &&
        projects.map((project, id) => (
          <ListItem className={classes.item} disableGutters key={id}>
            <Button
              className={classes.button}
              onClick={() => filterTasks(project.projectId)}
            >
              {project.name}
            </Button>
          </ListItem>
        ))}
    </List>
  );
};

export default ProjectList;
