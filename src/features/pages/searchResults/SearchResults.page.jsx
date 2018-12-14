import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./SearchResults.page.scss";
import Cards from "../../components/card.Class/cardClass.component.jsx";
import { FetchBoardsBySelectionAction } from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class SearchresultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  val = {}
  componentWillMount(){
    this.val = queryString.parse(this.props.location.search);
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log("did mount params values:", values);
    this.setState({location: values.location, dates: values.dates})
    console.log(this.state.location)
    let selection = values;
    this.fetch(selection);
  }

  fetch = selection => {
    this.props.fetchBoardsBySelections(selection);
  };

  onBoardClick = id => this.goToBoardPage(id);

  goToBoardPage = id => {
    const values = queryString.parse(this.props.location.search);
    this.props.history.push({
      pathname: "/board",
      search: `?boardId=${id}&location=${values.location}&dates=${values.dates}`
    });
  };

  goSearch = (history, location, dates) => {
    history.push({
      // pathname: '/results',
      search: `?location=${location}&dates=${dates}`
    });
    console.log("goSearch params values:", location, dates);
    let selection = {
      location: location,
      dates: dates
    };
    this.fetch(selection);
  };

  render() {
    const { boards } = this.props;
    return (
      <div className={styles.container}>
        {/* <Typography variant="display1" component="h3">
          {this.props.t("SEARCH_RESULT_PAGE")}
        </Typography> */}
        <Typography variant="subheading" component="p" color="textSecondary">
         Pick yourself a Surfboard
        </Typography>
        <GlobalsearchComponent place={this.val.location} dates={this.val.dates} goSearch={this.goSearch} />

        <div className={styles.boardsContainer} style={{ margin: "0 auto" }}>
          {boards &&
            boards.map(board => (
              <div
                key={board.id}
                id={board.id}
                className={styles.boardCard}
                onClick={() => this.onBoardClick(board.id)}
              >
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
    fetchBoardsBySelections: userSelection =>
      dispatch(new FetchBoardsBySelectionAction(userSelection))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(translate()(SearchresultsPage))
);
