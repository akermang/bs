import React from "react";
import PropTypes from "prop-types";
import styles from "./boardsOptionList.componet.scss";
import Boardsoptionsitem from "../boardsOptionsItem/boardsOptionItem.componet.jsx";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Boardsoptionslist = props => {
  const { options, openDialog} = props;
  const optionsArry = Object.keys(options).map(key => {
    return { value: options[key], label: key };
  });
  return (
    <div className={styles.container}>
      <Card>
        {optionsArry &&
          optionsArry.map((option, index) => (
            <Boardsoptionsitem key={index} options={option} openDialog={openDialog}/>
          ))}

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
      </Card>
    </div>
  );
};

Boardsoptionslist.propTypes = {
  // options: PropTypes.array.isRequired
};

export default Boardsoptionslist;
