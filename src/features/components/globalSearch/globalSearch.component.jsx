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

const goSearch = () => {
  window.location = "#/results?"+location + "%20"+ dates;
}
let  dates = {}
const setDate = (str) => {
  dates = str
  console.log(dates)
}

let location ={};
const setLocation = (str)=>{
  location = str;
  console.log(location)
}

const GlobalsearchComponent = props => {
  return (
    <div className={styles.container}>
      {props.example}
      <Card className={styles.search_panel}>
        <LocationSearchInput setLocation={setLocation}/>
        <DatePickComponent setDates={setDate} />
        <Button
          variant="fab"
          color="primary"
          aria-label="search"
          className={styles.button_search}
          onClick={goSearch}
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

export default GlobalsearchComponent;
