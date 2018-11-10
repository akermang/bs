import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./create-board.page.scss";
import { FetchBoardsAction, FetchBoardsOptionsAction } from "../../../common/state/board/board.actions";
import Typography from "@material-ui/core/Typography";
import { translate } from "react-i18next";
import IntegrationReactSelect from "../../components/autoSelect/autoSelect.component.jsx";
import { OpenDialogAction } from '../../../common/state/dialog/dialog.actions';

const suggestions = [
  { label: 'None' },
  { label: 'Costume' },
  { label: 'Othter' },
  { label: 'Any' },
  { label: 'Lost' },
  { label: 'Channel Islands' },
  { label: 'Firewire ' },
  { label: 'Aloha' },
  { label: 'BeachBeat' },
  { label: 'Rusty' },
  { label: 'Ultrawave' },
  { label: 'All Meric' },
  { label: 'Inter Surf' },
  { label: 'Bear' },
  { label: 'Bic' },
  { label: 'G&S' },
  { label: 'Hawaiian Island Creations' },
  { label: 'Hot Buttered' },
  { label: 'Sedny' },
  { label: 'Blitz' },
  { label: 'Huny' },
  { label: 'NSP' },
  { label: 'Pukas' },
  { label: 'Spyder' },
  { label: 'Town and Country'},
  { label: 'Superbrand' },
  { label: 'JS Industries'},
  { label: 'Donald Takayama' },
  { label: 'Formula Energy' },
  { label: 'DVS Surfboards' },
  { label: 'Chilli' },
  { label: 'Wanted' },
  { label: 'Jason Rodd' },
  { label: 'Pyzel' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));


class CreateBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.fetchBoardsOptions();
    this.props.dialog("Select Brand", <IntegrationReactSelect placeholder={"Brand"} suggestions={suggestions} /> );

  }

  render() {
    const { boards } = this.props;

    return (
      <div className={styles.container + " createBoardPage"}>
        <Typography variant="display1" component="h3">
          BoardShare - {this.props.t("CREATE_BOARD_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          here yuo are creating new board to share
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
    dialog: (title,component) => dispatch(new OpenDialogAction(title, component)),
    fetchBoardsOptions: () => dispatch(new FetchBoardsOptionsAction)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(translate()(CreateBoardPage));
