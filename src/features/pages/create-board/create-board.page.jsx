import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./create-board.page.scss";
import { FetchBoardsAction } from "../../../common/state/board/board.actions";

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    return (
      <div className={styles.container}>
        {boards.map(board => <div key={board.id}>{board.id}</div>)}
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
    boards: state.board.boards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoards: () => dispatch(new FetchBoardsAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardPage);
