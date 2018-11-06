import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./search.component.scss";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import "react-dates/lib/css/_datepicker.css";
import DatePickComponent from "../datePick/datePick.component.jsx";
import LocationSearchInput from "../../components/locationAutocomlete/locationAutocomlete.component.jsx";
import Card from "@material-ui/core/Card";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLocationSelected: false,
      isDateSelected: false,
      dates: "",
      location: ""
    };
  }
  goSearch = () => {
    window.location = "#/results";
  };

  setDate = str => {
    this.setState({ dates: str });
  };

  setLocation = str => {
    this.setState({ location: str });
  };

  locationSelectedHandler = () => {
    this.setState({ isLocationSelected: true });
  };

  dateSelectedHandler = () => {
    this.setState({ isDateSelected: true });
  };

  render() {
    return (
      <div className={styles.container}>
        {/* {props.example} */}
        <Card className={styles.search_panel}>
          <LocationSearchInput
            setLocation={this.setLocation}
            onLocationSelected={this.locationSelectedHandler}
          />
          {this.state.isLocationSelected ? (
            <DatePickComponent setDates={this.setDate} ondatesSelected={this.dateSelectedHandler} />
          ) : null}
          {this.state.isDateSelected ? (
            <Button
              variant="fab"
              color="primary"
              aria-label="search"
              className={styles.button_search}
              onClick={this.goSearch}
            >
              <SearchIcon />
            </Button>
          ) : null}
        </Card>
      </div>
    );
  }
}

// SearchComponent.propTypes = {
//   example: PropTypes.string.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     example: state.example.text
//   }
// }

export default SearchComponent;
