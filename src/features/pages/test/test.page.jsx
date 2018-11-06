import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import styles from "./test.page.scss";
import SectionCarousel from "../../components/carousel/carousel.component.jsx";
import PlacesComponent from "../../components/places/places.compoment.jsx";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        TEST PAGE
        {/* <PlacesComponent/> */}
        {/* <DateRangePicker
          startDate={moment()} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={moment()} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        /> */}
        <SectionCarousel />
      </div>
    );
  }
}

TestPage.propTypes = {
  // example: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    // example: state.example.text
  };
}

export default connect(mapStateToProps)(TestPage);
