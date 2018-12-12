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
    this.state = {};
  }
// componentDidMount(){
//   this.props.openDialog("NO selection", <div>LOCATION / DATES</div>);
// }

  goSearch = (history, location, dates) => {
    // console.log(dispatch)
    // console.log("this.props:", this.props);
    // this.props.openDialog("NO selection", <div>LOCATION / DATES</div>);
    !location ? console.log("No location selected") : null;
    !dates ? console.log("No dates selected") : null;
    location && dates
      ? history.push({
          pathname: "/results",
          search: `?location=${location}&dates=${dates}`
        })
      : null;
  };
  render() {
    return (
      <div className={styles.homePage}>
        <Typography variant="display1" component="h3">
          BoardShare - {this.props.t("HOME_PAGE")}
        </Typography>
        <Typography variant="subheading" component="p" color="textSecondary">
          {this.props.t("FIND A SURFBOARD FOR YOUER VACATION")}
        </Typography>
        <GlobalsearchComponent
          goSearch={this.goSearch}
          className={styles.GlobalsearchComponent}
        />
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

function mapDispatchToProps(dispatch) {
  return {
    openDialog: (title, component, type, handler) => dispatch(new OpenDialogAction(title, component, type, handler)),
    closeDialog: () => dispatch(new CloseDialogAction())
  };
}

export default connect(mapDispatchToProps)(translate()(HomePage));
