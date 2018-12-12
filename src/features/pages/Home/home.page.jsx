import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { translate } from "react-i18next";
import styles from "./home.page.scss";
import "react-dates/lib/css/_datepicker.css";
import Typography from "@material-ui/core/Typography";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";
import globus from "../../../../assets/img/globus.jpg";
import {
  OpenDialogAction,
  CloseDialogAction
} from "../../../common/state/dialog/dialog.actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: ""
    };
  }

  goSearch = (history, location, dates) => {
    if (dates) {
      history.push({
        search: `?dates=${dates}`
      });
    } else {
      this.props.openDialog("Select Dates");
    }
    
    if (location) {
      history.push({
        search: `?location=${location}`
      });
    } else {
      this.props.openDialog("Select Location");
    }

    if (location && dates) {
      history.push({
        search: `?location=${location}&dates=${dates}`
      });
      history.push({
        pathname: "/results",
        search: `?location=${location}&dates=${dates}`
      });
    }
  };
  render() {
    return (
      <div className={styles.homePage}>
        <Typography variant="display1" component="h3">
          BoardShare
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          {this.props.t("FIND A SURFBOARD FOR YOUER VACATION")}
        </Typography>
        <GlobalsearchComponent
          goSearch={this.goSearch}
          className={styles.GlobalsearchComponent}
        />
        <div>{this.state.massage}</div>
        <div className={styles.globusImgWrap}>
          <img src={globus} alt="" />
        </div>
      </div>
    );
  }
}

// HomePage.propTypes = {
//   dispatch: propTypes.func.isRequired,
//   t: propTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    boards: state.board.boards,
    selectedBoard: state.board.selectedBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openDialog: (title, component, type, handler) =>
      dispatch(new OpenDialogAction(title, component, type, handler)),
    closeDialog: () => dispatch(new CloseDialogAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(HomePage)
);
