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
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "../../components/Card/Card.jsx";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto"
  },
  listItemBoard: {
    display: "flex",
    justifyContent: "space-around"
  }

});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ListcompComponent(props) {
  const { classes, boards } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <div className={styles.boardsContainer}>
          {boards &&
            boards.map((board, index) => (
              <div
                key={board.id}
                className={styles.boardCard}
                onClick={() => this.onBoardClick(board.id)}
              >
                <Card>
                  <ListItemLink className={classes.listItemBoard} href="/#/create-board">
                    <Avatar alt="Remy Sharp" src={board.images[0]} />
                    <Typography
                      variant="subheading"
                      component="p"
                      color="textSecondary"
                    >
                      {index + 1} {board.name} {board.brand}
                    </Typography>
                    <Button
                      variant="flat"
                      color="secondary"
                      aria-label="Edit"
                      className={styles.button_edit}
                    >
                      <Icon color="secondary">edit_icon</Icon>
                    </Button>
                  </ListItemLink>
                </Card>
              </div>
            ))}
        </div>
      </List>
    </div>
  );
}

ListcompComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListcompComponent);
