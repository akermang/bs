import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./board.page.scss";
import queryString from "query-string";
import { FetchBoardByIdAction } from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";
import { translate } from "react-i18next";
import Cards from "../../components/card.Class/cardClass.component.jsx";
import SectionCarousel from "../../components/carousel/carousel.component.jsx";

class BoardPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: ""
  //   };
  // }
  val = {};
  componentWillMount() {
    this.val = queryString.parse(this.props.location.search);
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.props.fetchBoardById(values.boardId);
  }

  goSearch = (history, location, dates) => {
    history.push({
      pathname: "/results",
      search: `?location=${location}&dates=${dates}`
    });
  };

  render() {
    const { boards, selectedBoard } = this.props;

    return (
      <div className={styles.container}>
        <Typography variant="display1" component="h3">
          {this.props.t("BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          This is the Surfboard for your vacation...
        </Typography>
        <GlobalsearchComponent
          place={this.val.location}
          dates={this.val.dates}
          goSearch={this.goSearch}
          className={styles.GlobalsearchComponent}
        />
        <div className={styles.boardContainer}>
          <div className={styles.boardCarousel}>
            {selectedBoard && <SectionCarousel images={selectedBoard.images} />}
          </div>
          {selectedBoard && <Cards board={selectedBoard} />}
        </div>
        
      </div>
    );
  }
}

BoardPage.propTypes = {
  // example: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    boards: state.board.boards,
    selectedBoard: state.board.selectedBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoardById: id => dispatch(new FetchBoardByIdAction(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(BoardPage)
);
