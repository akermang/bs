import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import styles from "./myShareBoards.page.scss";
import {
  FetchBoardsByUserIdAction,
  FetchNewBoardAction,
  editBoardAction
} from "../../../common/state/board/board.actions";
import { StartLoaderAction, StopLoaderAction } from "../../../common/state/shared/shared.actions";
import Cards from "../../components/card.Class/cardClass.component.jsx";
import Card from "../../components/Card/Card.jsx";
import ListcompComponent from "../../components/list/list.component.jsx";
import {
  OpenDialogAction,
  CloseDialogAction
} from "../../../common/state/dialog/dialog.actions";
import TextField from "@material-ui/core/TextField";

class MyshareboardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  componentDidMount() {
    this.props.startLoader();
    this.props.fetchBoardsByUserId(this.props.user.userId).then(res => this.props.stopLoader());
  }

  inputChanged(e) {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }

  editBoard(board) {
    this.props.dispatchEditBoard(board);
    this.props.history.push({
      pathname: "/create-board",
      search: `?boardId=${board._id}`
    });
  }

  onBoardClick(board) {
    this.editBoard(board);
  }

  createBoard(){
    this.props.startLoader();
    this.props.fetchNewBoard({
                  name: this.state.inputValue,
                  userId: this.props.user.userId
                })
                .then(res => {
                  this.props.stopLoader();
                  this.editBoard(res);
                  this.props.closeDialog();
                })
  }

  addBoard() {
    this.props.openDialog(
      "give your board a name",
      <div className={styles.nameInput}>
        <TextField
          autoFocus
          style={{ width: 100 + "%" }}
          variant="outlined"
          label="Board name"
          onChange={(e) => this.inputChanged(e)}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={styles.button_edit}
          onClick={() =>
            this.state.inputValue != "" ?
              this.createBoard() : null
          }
        >
          <Icon>add_icon</Icon>
        </Button>
      </div>
    );
  }

  render() {
    const { userBoards } = this.props;
    return (
      <div className={styles.container}>
        <Typography variant="display1" component="h3">
          My Boards Page
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          Add and Edit Your Surfboards
        </Typography>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={styles.button_edit_addBoard}
          onClick={() => this.addBoard()}
        >
          <Icon>add_icon</Icon>
        </Button>
        <div className={styles.boardsContainer}>
          <ListcompComponent
            clickCallBack={e => this.onBoardClick(e)}
            boards={userBoards}
          />
        </div>

      </div>
    );
  }
}

MyshareboardsPage.propTypes = {
  // example: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth.loggedInUser,
    userBoards: state.board.userBoards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoardsByUserId: userId =>
      dispatch(new FetchBoardsByUserIdAction(userId)),
    openDialog: (title, component, type, handler) =>
      dispatch(new OpenDialogAction(title, component, type, handler)),
    fetchNewBoard: newBoard => dispatch(new FetchNewBoardAction(newBoard)),
    closeDialog: () => dispatch(new CloseDialogAction()),
    dispatchEditBoard: board => dispatch(new editBoardAction(board)),
    startLoader: () => dispatch(new StartLoaderAction()),
    stopLoader: () => dispatch(new StopLoaderAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyshareboardsPage);
