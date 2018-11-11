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

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.props.fetchBoardById(values.boardId);
    this.setState({ id: values.boardId });
  }

  render() {
    const { boards, selectedBoard } = this.props;
    // const id = this.state.id;
    // console.log("boards:", boards, "id:", id,  "selectedBoard:", selectedBoard);

    console.log(selectedBoard);

    return (
      <div className={styles.container}>
        <Typography variant="display1" component="h3">
          {this.props.t("BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          This is the Surfboard for your vacation...
        </Typography>
        <div className={styles.boardContainer}>
          <div className={styles.boardCarousel}>
            {selectedBoard && <SectionCarousel  images = {selectedBoard.images}/>}
          </div>
          {selectedBoard && <Cards board={selectedBoard} />}
        </div>
        <GlobalsearchComponent className={styles.GlobalsearchComponent} />
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
