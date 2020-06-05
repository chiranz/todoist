import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { colors } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

// Mui imports
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { getAllProjects } from "../../../../redux/actions/dataActions";
import { getProjectColor } from "../../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {},
  panel: {
    boxShadow: "none",
    border: "none",
  },
  item: {
    display: "flex",
    paddingBottom: 0,
    paddingTop: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  expansion: {
    padding: 0,
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
  projectIcon: {
    height: 10,
    width: 10,
    margin: "auto",
    marginRight: 15,
    marginLeft: 0,
    borderRadius: "50%",
  },
}));

const ProjectList = ({ filterTasks, className, ...rest }) => {
  const [expand, setExpand] = useState(false);
  const projects = useSelector((state) => state.data.projects);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);
  return (
    <ExpansionPanel
      expanded={expand}
      onChange={() => setExpand((state) => !state)}
      className={classes.panel}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.expansion}
      >
        <Typography className={classes.heading}>Projects</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List {...rest} className={clsx(classes.root, className)}>
          {projects &&
            projects.map((project, id) => (
              <ListItem className={classes.item} disableGutters key={id}>
                <Button
                  className={classes.button}
                  onClick={() => filterTasks(project.projectId)}
                >
                  <span
                    className={classes.projectIcon}
                    style={{ background: getProjectColor(id) }}
                  />

                  {project.name}
                </Button>
              </ListItem>
            ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ProjectList;
