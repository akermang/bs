import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import styles from "./create-board.page.scss";
import {
  FetchBoardsAction,
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
        "What Is your Board Brand ?",
        <IntegrationReactSelect
          placeholder={"Brand"}
          suggestions={suggestions}
        />
      );
    });
  }

  render() {
    const { boards, options } = this.props;

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          BoardShare - {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          create..save..update..share.. your ShareBoard page detailes
        </Typography>

       

        <Card>
          <div>
            <Button
              variant="flat"
              color="primary"
              aria-label="Edit"
              className={styles.button_edit}
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
              <Icon>edit_icon</Icon>
            </Button>
            <span style={{margin: 8+"px"}}>type</span>
          </div>

          <div>
            <Button
              variant="flat"
              color="secondary"
              aria-label="Edit"
              className={styles.button_edit}
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
              <Icon>edit_icon</Icon>
            </Button>
            <span style={{margin: 8+"px"}}>model</span>
          </div>

          <div>
            <Button
              variant="flat"
              color="accent"
              aria-label="Edit"
              className={styles.button_edit}
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
              <Icon>edit_icon</Icon>
            </Button>
            <span style={{margin: 8+"px"}}>Fins - SetUp</span>
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
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction()),
    openDialog: (title, component) =>
      dispatch(new OpenDialogAction(title, component)),
    closeDialog: () => dispatch(new CloseDialogAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CreateBoardPage)
);
