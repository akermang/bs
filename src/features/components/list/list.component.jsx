import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import EditIcon from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListcompComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItemLink href="/#/create-board">
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItemLink>
        <Divider />
      </List>
    </div>
  );
}

ListcompComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListcompComponent);
