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
