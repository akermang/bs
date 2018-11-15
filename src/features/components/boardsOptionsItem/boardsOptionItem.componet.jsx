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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Boardsoptionsitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  toggleEdit() {
    this.setState(
      this.state.editMode ? { editMode: false } : { editMode: true }
    );
  }

  render() {
    const { options, openDialog } = this.props;
    options.label === "measures"
      ? (options.value = options.value.length)
      : null;
    options.label === "measures" ? (options.label = "length") : null;

    return (
      <div className={styles.container}>
        <div onClick={() => this.toggleEdit()}>
          <ListItemLink>
            {this.state.editMode &&
              options &&
              options.value &&
              (<div>{`Board ${options.label} ?`}</div>,
              (
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
              ))}
            {!this.state.editMode && (
              <ListItem>
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
              </ListItem>
            )}
          </ListItemLink>
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
