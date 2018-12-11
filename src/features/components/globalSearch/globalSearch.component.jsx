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

let  dates = ""
const setDate = (str) => {
  dates = str
}

let location = "";
const setLocation = (str)=>{
  location = str;
}

const GlobalsearchComponent = props => {
  return (
    <div className={styles.container}>
      {console.log(props)}
      <Card className={styles.search_panel}>
        <LocationSearchInput place={props.place} setLocation={setLocation} dates={props.dates}/>
        <DatePickComponent oldDates={props.dates} dates={dates} setDates={setDate} />
        <Button
          variant="fab"
          color="primary"
          aria-label="search"
          className={styles.button_search}
          onClick={() => props.goSearch(props.history, location, dates)}
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
