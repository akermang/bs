import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import styles from "./myShareBoards.page.scss";
import { FetchBoardsByUserIdAction } from "../../../common/state/board/board.actions";
import Cards from "../../components/card.Class/cardClass.component.jsx";

class MyshareboardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("user", this.props.user);
    this.props.fetchBoardsByUserId(this.props.user.userId);
  }

  onBoardClick() {
    this.props.history.push({
      pathname: "/create-board"
      // search: `?boardId=${id}&dates=${'gal dates'}`
    });
  }

  render() {
    const { userBoards } = this.props;
    console.log("userBoards:", userBoards);
    return (
      <div className={styles.container}>
        <Typography variant="display1" component="h3">
          My Boards Page
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          Add and Edit Your Surfboards
        </Typography>

        <div className={styles.boardsContainer}>
          {userBoards &&
            userBoards.map((board, index) => (
              <div
                key={board.id}
                id={board.id}
                className={styles.boardCard}
                onClick={() => this.onBoardClick(board.id)}
              >
               
                <Typography variant="subheading" component="p" color="textSecondary">
                 {index +1} {board.id} {board.brand} 
                </Typography>
                <img src={board.images[0]} alt=""/>
              </div>
            ))}
        </div>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={styles.button_edit}
        >
          <Icon>add_icon</Icon>
        </Button>
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
      dispatch(new FetchBoardsByUserIdAction(userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyshareboardsPage);
