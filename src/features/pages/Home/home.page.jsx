import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { translate } from "react-i18next";
import styles from "./home.page.scss";
import "react-dates/lib/css/_datepicker.css";
import Typography from "@material-ui/core/Typography";
import GlobalsearchComponent from "../../components/globalSearch/globalSearch.component.jsx";
import SearchComponent from "../../components/search/search.component.jsx";
import globus from "../../../../assets/img/globus.jpg";

const goSearch = (history, location, dates ) => {
  history.push({
    pathname: '/results',
    search: `?location=${location}&dates=${dates}`
  })
}

const HomePage = props => (
  
  <div className={styles.homePage}>
    <Typography variant="display1" component="h3">
      BoardShare - {props.t("HOME_PAGE")}
    </Typography>
    <Typography variant="subheading" component="p" color="textSecondary">
    {props.t("FIND A SURFBOARD FOR YOUER VACATION")}
    </Typography>
    <GlobalsearchComponent goSearch={goSearch} className={styles.GlobalsearchComponent} />
    {/* <SearchComponent /> */}
    <div className={styles.globusImgWrap}>
      <img src={globus} alt="" />
    </div>
  </div>
);

// HomePage.propTypes = {
//   dispatch: propTypes.func.isRequired,
//   t: propTypes.func.isRequired
// };

export default connect()(translate()(HomePage));
