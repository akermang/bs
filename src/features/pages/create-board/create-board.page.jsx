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
import queryString from "query-string";
import {
  FetchBoardsOptionsAction,
  FetchBoardByIdAction
} from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { board: null };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.props.fetchBoardById(values.boardId).then(res => {
      this.setState({ board: res });
    });
    this.props.fetchBoardsOptions().then(res => {
      const suggestions = this.props.options.brand.map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label
      }));
    });
  }

  render() {
    const { boards, options, openDialog, editBoard } = this.props;
    const board = this.state.board;

    function ListItemLink(props) {
      return <ListItem button component="a" {...props} />;
    }

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="h4" color="textSecondary">
          {board && board.name ? `Edit ${board.name} detailes` : "NO BOARD"}
        </Typography>
        <Boardsoptionslist options={options} board={board} openDialog={openDialog} />
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
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction()),
    fetchBoardById: id => dispatch(new FetchBoardByIdAction(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CreateBoardPage)
);
