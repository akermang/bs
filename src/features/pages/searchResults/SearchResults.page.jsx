import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./SearchResults.page.scss";
import Cards from "../../components/card.Class/cardClass.component.jsx";
import { FetchBoardsAction } from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";

class SearchresultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchBoards();
    this.formatSelectionData()
  }

  formatSelectionData = ()=>{
    let data = "Aachen,%20Germany%20Nov%2014th%202018%20-%20Nov%2016th%202018%20%20%202%20days".split("%20");
    let str = data.join(" ")
    console.log("selection data: ",str)
  }

  

  render() {
    const { boards } = this.props;
    return (
      <div className={styles.container}>
        {/* <GlobalsearchComponent /> */}
        <Typography variant="display1" component="h3">
          {this.props.t("SEARCH_RESULT_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          Surfboard for your vacation.
        </Typography>
        <div className={styles.boardsContainer}>
          {boards.map(board => (
            <div key={board.id} className={styles.boardCard}>
              <Cards board={board} />
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
    fetchBoards: () => dispatch(new FetchBoardsAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(SearchresultsPage)
);
