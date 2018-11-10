import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./create-board.page.scss";
import {
  FetchBoardsAction,
  FetchBoardsOptionsAction
} from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import IntegrationReactSelect from "../../components/autoSelect/autoSelect.component.jsx";
import { OpenDialogAction } from "../../../common/state/dialog/dialog.actions";

class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchBoardsOptions().then(res => {
      const suggestions = this.props.options.brand.map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label
      }));
      this.props.dialog(
        "What Is your Board Brand?",
        <IntegrationReactSelect
          placeholder={"Brand"}
          suggestions={suggestions}
        />
      );
    });
  }

  render() {
    const { boards, options } = this.props;

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          BoardShare - {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          create..save..update..share.. your ShareBoard page detailes
        </Typography>
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
    options: state.board.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBoards: () => dispatch(new FetchBoardsAction()),
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction()),
    dialog: (title, component) =>
      dispatch(new OpenDialogAction(title, component))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CreateBoardPage)
);
