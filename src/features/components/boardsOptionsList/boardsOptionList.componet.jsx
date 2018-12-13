import React from "react";
import PropTypes from "prop-types";
import styles from "./boardsOptionList.componet.scss";
import Boardsoptionsitem from "../boardsOptionsItem/boardsOptionItem.componet.jsx";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import AdvancedGridList from "../AdvancedGridList/AdvancedGridList.component.jsx";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Boardsoptionslist = props => {
  const { options, board } = props;
  const boardImages = board && board.images ? board.images : null;
  const optionsArry = Object.keys(options).map(key => {
    return { value: options[key], label: key };
  });
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.gallery_wraper}>
          {board && boardImages && <AdvancedGridList board={board} />}
          {!boardImages && (
            <div>
              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <ListItemLink>
                  <Button
                    variant="flat"
                    color="secondary"
                    component="span"
                    // className={classes.button}
                  >
                    <Icon>add_icon</Icon>
                  </Button>
                  <ListItemText> Images</ListItemText>
                </ListItemLink>
              </label>
            </div>
          )}
        </div>

        <div className={styles.options_wraper}>
          {/* {!boardImages && (
            <div>
              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <ListItemLink>
                  <Button
                    variant="flat"
                    color="secondary"
                    component="span"
                    // className={classes.button}
                  >
                    <Icon>add_icon</Icon>
                  </Button>
                  <ListItemText> Images</ListItemText>
                </ListItemLink>
              </label>
            </div>
          )} */}

          {optionsArry &&
            optionsArry.map((option, index) => (
              <Boardsoptionsitem key={index} options={option} board={board} />
            ))}
        </div>
      </Card>
    </div>
  );
};

Boardsoptionslist.propTypes = {
  options: PropTypes.object.isRequired
};

export default Boardsoptionslist;
