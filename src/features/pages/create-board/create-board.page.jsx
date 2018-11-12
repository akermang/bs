import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import styles from "./create-board.page.scss";
import {
  FetchBoardsAction,
  FetchNewBoardAction,
  FetchBoardsOptionsAction
} from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import IntegrationReactSelect from "../../components/autoSelect/autoSelect.component.jsx";
import {
  OpenDialogAction,
  CloseDialogAction
} from "../../../common/state/dialog/dialog.actions";

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchBoardsOptions().then(res => {
      const suggestions = this.props.options.brand.map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label
      }));
      this.props.openDialog(
        "give your board a name",
        <div className={styles.nameInput}>
          <TextField
            autoFocus
            style={{ width: 100 + "%" }}
            variant="outlined"
            label="Board name"
            value={this.state.selectedDates}
          />
        </div>,
        this.createBoard
      );
    });
  }
  createBoard = board => {
    console.log(board);
  };

  render() {
    const { boards, options } = this.props;
    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          create..save..update..share.. your ShareBoard page detailes
        </Typography>

        <Card>
          <div
            onClick={() =>
              this.props.openDialog(
                "What Is your Board Brand ?",
                <IntegrationReactSelect
                  placeholder={"Brand Options.."}
                  suggestions={this.props.options.brand.map(suggestion => ({
                    value: suggestion.label,
                    label: suggestion.label
                  }))}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>Brand</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "What Is your Board Type ?",
                <IntegrationReactSelect
                  placeholder={"Type"}
                  suggestions={this.props.options.type.map(suggestion => ({
                    value: suggestion,
                    label: suggestion
                  }))}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>type</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "What Is your Board Model ?",
                <IntegrationReactSelect
                  placeholder={"Model"}
                  suggestions={this.props.options.model.map(suggestion => ({
                    value: suggestion,
                    label: suggestion
                  }))}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>model</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "What Is your Board Fins-Setup ?",
                <IntegrationReactSelect
                  placeholder={"Fins - SetUp"}
                  suggestions={this.props.options.finSetUp.map(suggestion => ({
                    value: suggestion,
                    label: suggestion
                  }))}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>Fins Setup</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "Board Tail ?",
                <IntegrationReactSelect
                  placeholder={"Tail style"}
                  suggestions={this.props.options.tail.map(suggestion => ({
                    value: suggestion,
                    label: suggestion
                  }))}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>Tail</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "Board MEASURES",
                <IntegrationReactSelect
                  placeholder={"MEASURES"}
                  suggestions={this.props.options.measures.length.map(
                    suggestion => ({
                      value: suggestion,
                      label: suggestion
                    })
                  )}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>measures</ListItemText>
            </ListItemLink>
          </div>

          <div
            onClick={() =>
              this.props.openDialog(
                "Board Construction ?",
                <IntegrationReactSelect
                  placeholder={"Construction PU/EPS.."}
                  suggestions={this.props.options.construction.map(
                    suggestion => ({
                      value: suggestion,
                      label: suggestion
                    })
                  )}
                />
              )
            }
          >
            <ListItemLink href="/#/create-board">
              <Typography
                variant="subheading"
                component="p"
                color="textSecondary"
              />
              <Button
                variant="flat"
                color="secondary"
                aria-label="Edit"
                className={styles.button_edit}
              >
                <Icon color="secondary">edit_icon</Icon>
              </Button>
              <ListItemText>Construction</ListItemText>
            </ListItemLink>
          </div>

          <div>
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
          </div>
        </Card>
      </div>
    );
  }
}

CreateBoardPage.propTypes = {
  // boards: PropTypes.shape(boardModel).isRequired
};

CreateBoardPage.defaultProps = {
  boards: []
};

function mapStateToProps(state) {
  return {
    boards: state.board.boards,
    options: state.board.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoards: () => dispatch(new FetchBoardsAction()),
    fetchNewBoard: () => dispatch(new FetchNewBoardAction(newBoard)),
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction()),
    openDialog: (title, component) =>
      dispatch(new OpenDialogAction(title, component)),
    closeDialog: () => dispatch(new CloseDialogAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CreateBoardPage)
);
