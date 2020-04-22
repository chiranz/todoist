import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import LogoutIcon from "@material-ui/icons/Input";
import { useDispatch } from "react-redux";
// Local imports
import { logoutUser } from "../../../../redux/actions/userActions";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    //TODO: Handle add task
  };

  return (
    <AppBar {...rest} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container
          maxWidth="lg"
          className={clsx(classes.displayFlex, classes.toolbar)}
        >
          <div>
            <Hidden lgUp>
              <IconButton color="inherit" onClick={onSidebarOpen}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="h5"
              color="inherit"
              component={Link}
              to="/dashboard"
            >
              todoist
            </Typography>
          </div>
          <Tooltip title="Add new task" placement="bottom">
            <IconButton
              aria-label="Add new task"
              onClick={handleAddTask}
              color="inherit"
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout" placement="bottom">
            <IconButton
              onClick={() => dispatch(logoutUser())}
              className={classes.signOutButton}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
