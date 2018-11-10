import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./SearchResults.page.scss";
import Cards from "../../components/card.Class/cardClass.component.jsx";
import { FetchBoardsAction, FetchBoardsBySelectionAction } from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";
import queryString from 'query-string'
import { withRouter } from "react-router-dom";


class SearchresultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log("params values:",values)
    let selection = "gal selection"
    this.props.fetchBoardsBySelections(selection);
  }

  onBoardClick = (id)=> this.goToBoardPage(id)

  goToBoardPage = (id) => {
    this.props.history.push({
      pathname: '/board',
      search: `?boardId=${id}&dates=${'gal dates'}`
    })
  }

  render() {
    const { boards } = this.props;
    console.log(boards)
    return (
      <div className={styles.container}>
        <Typography variant="display1" component="h3">
          {this.props.t("SEARCH_RESULT_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          Surfboard for your vacation.
        </Typography>
        <GlobalsearchComponent />

        <div className={styles.boardsContainer}>
          {boards && boards.map(board => (
            <div key={board.id} id={board.id} className={styles.boardCard} onClick={()=>this.onBoardClick(board.id)}>
              <Cards
               board={board}
                />
            </div>
          ))}
        </div>
        <div>{this.props.example}</div>
      </div>
    );
  }
}

SearchresultsPage.propTypes = {
  // example: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    boards: state.board.boards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoardsBySelections: (userSelection) => dispatch(new FetchBoardsBySelectionAction(userSelection))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter
  (translate()(SearchresultsPage))
);
