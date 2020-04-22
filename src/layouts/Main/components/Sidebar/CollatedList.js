import React from "react";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/AllInbox";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeOutlinedIcon from "@material-ui/icons/NextWeek";
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
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
}));

const collatedList = [
  { key: "INBOX", value: "Inbox", icon: <InboxIcon /> },
  { key: "TODAY", value: "Today", icon: <TodayIcon /> },
  { key: "NEXT_7", value: "Next 7 days", icon: <DateRangeOutlinedIcon /> },
];

const CollatedList = ({ filterTasks, className, ...rest }) => {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {collatedList.map((item) => (
        <ListItem className={classes.item} disableGutters key={item.key}>
          <Button
            className={classes.button}
            onClick={() => filterTasks(item.key)}
          >
            <div className={classes.icon}>{item.icon}</div>
            {item.value}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CollatedList;
