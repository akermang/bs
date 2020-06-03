import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./boardsOptionItem.componet.scss";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IntegrationReactSelect from "../../components/autoSelect/autoSelect.component.jsx";
import Paper from "@material-ui/core/Paper";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Boardsoptionsitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      boardHasOptionValue: false
    };
  }

  toggleEdit() {
    this.setState(
      this.state.editMode ? { editMode: false } : { editMode: true }
    );
  }

  render() {
    const { options, board } = this.props;
    let renderBoardOption = false;
    options.label === "measures"
      ? (options.value = options.value.length)
      : null;
    options.label === "measures" ? (options.label = "length") : null;
    if (board && board[options.label]) {
      renderBoardOption = true;
    } else {
    }

    return (
      <div className={styles.container}>
        <div>
          {!this.state.editMode &&
            board &&
            board[options.label] &&
            options.label !== "_id" && (
              <ListItemLink
                onClick={() => this.toggleEdit()}
                className={styles.board_container}
              >
                <Typography
                  variant="subheading"
                  component="p"
                  color="textSecondary"
                />
                <Button
                  variant="flat"
                  color="secondary"
                  aria-label="Edit"
                  // className={styles.button_edit}
                >
                  <Icon color="secondary">edit_icon</Icon>
                </Button>
                {!this.state.editMode &&
                  board &&
                  board[options.label] &&
                   <div>{board[options.label]}</div>}
              </ListItemLink>
            )}
          <div>
            {this.state.editMode &&
              options &&
              options.value && (
                <ListItemLink
                  className={styles.selectContainer}
                  onBlur={() => this.setState({ editMode: false })}
                >
                  <div>
                    <Button>set</Button>
                    <Button onClick={() => this.setState({ editMode: false })}>
                      skip
                    </Button>
                  </div>
                  <ListItem>
                    <IntegrationReactSelect
                      placeholder={options.label}
                      suggestions={options.value.map(
                        suggestion =>
                          suggestion.label
                            ? {
                                label: suggestion.label
                              }
                            : {
                                label: suggestion
                              }
                      )}
                    />
                  </ListItem>
                </ListItemLink>
              )}
            {!renderBoardOption &&
              !this.state.editMode && (
                <ListItemLink onClick={() => this.toggleEdit()}>
                  <Typography
                    variant="subheading"
                    component="p"
                    color="textSecondary"
                  />
                  <Button
                    variant="flat"
                    color="secondary"
                    aria-label="Edit"
                    // className={styles.button_edit}
                  >
                    <Icon color="secondary">edit_icon</Icon>
                  </Button>
                  <ListItemText>{options.label}</ListItemText>
                </ListItemLink>
              )}
          </div>
        </div>
      </div>
    );
  }
}

Boardsoptionsitem.propTypes = {
  // title: PropTypes.string.isRequired,
  // onClick: PropTypes.function.isRequired,
  // placeholder: PropTypes.string.isRequired,
  // optionName: PropTypes.string,
  options: PropTypes.object.isRequired
};

export default Boardsoptionsitem;
