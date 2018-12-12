import React from "react";
import PropTypes from "prop-types";
import styles from "./globalSearch.component.scss";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
// import {
//   DateRangePicker,
//   SingleDatePicker,
//   DayPickerRangeController
// } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import DatePickComponent from "../datePick/datePick.component.jsx";
import LocationSearchInput from "../../components/locationAutocomlete/locationAutocomlete.component.jsx";
import Card from "@material-ui/core/Card";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

const GlobalsearchComponent = props => {
  const values = queryString.parse(props.location.search);
  let dates = values.dates;
  const setDate = str => {
    dates = str;
  };

  let location = values.location;
  const setLocation = str => {
    location = str;
  };

  const goSearch = (location, dates)=>{
    props.goSearch(props.history, location, dates);
  }
  return (
    <div className={styles.container}>
      <Card className={styles.search_panel}>
        <LocationSearchInput
          place={location}
          setLocation={setLocation}
          dates={dates}
        />
        <DatePickComponent
          oldDates={dates}
          dates={dates}
          setDates={setDate}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="search"
          className={styles.button_search}
          onClick={() => goSearch(location, dates)}
        >
          <SearchIcon />
        </Button>
      </Card>
    </div>
  );
};

// GlobalsearchComponent.propTypes = {
//   example: PropTypes.string.isRequired
// };

export default withRouter(GlobalsearchComponent);
