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
import Boardsoptionslist from "../../components/boardsOptionsList/boardsOptionList.componet.jsx";
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
    // let callBack = this.createBoardCallBack
    this.props.fetchBoardsOptions().then(res => {
      const suggestions = this.props.options.brand.map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label
      }));
    });
  }
  createBoardCallBack = board => {
    console.log(board);
  };

  render() {
    const { boards, options, openDialog, editBoard } = this.props;

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          {`Edit ${editBoard.name} detailes`}
        </Typography>
        <Boardsoptionslist options={options} openDialog={openDialog} />
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
    options: state.board.options,
    editBoard: state.board.newBoard
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
