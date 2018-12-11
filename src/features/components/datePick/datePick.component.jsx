import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import styles from "./datePick.component.scss";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

const moment = extendMoment(originalMoment);

const stateDefinitions = {
  available: {
    color: null,
    label: "Available"
  },
  enquire: {
    color: "#ffd200",
    label: "Enquire"
  },
  unavailable: {
    selectable: false,
    color: "#78818a",
    label: "Unavailable"
  }
};

const dateRanges = [
  // {
  //   state: 'enquire',
  //   range: moment.range(
  //     moment().add(2, 'weeks').subtract(5, 'days'),
  //     moment().add(2, 'weeks').add(6, 'days')
  //   ),
  // },
  {
    state: "unavailable",
    range: moment.range(
      moment().add(7, "weeks"),
      moment()
        .add(7, "weeks")
        .add(3, "days")
    )
  }
];

class DatePickComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      isDateSelected: false,
      totalDays: "",
      selectedDates: props.oldDates || "",
      value: moment.range(
        today.clone(),
        today.clone() //.subtract(7, "days")
      )
    };
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
    let startDay = moment(this.state.value.start);
    let endDay = moment(this.state.value.end);
    let totalDays = endDay.diff(startDay, "days");
    totalDays == 0 ? (totalDays = "1/2 day") : null;
    totalDays == 1 ? (totalDays = "1 day") : null;
    totalDays >= 2 ? (totalDays = totalDays + " days") : null;
    this.setState({ totalDays });
    let dates =
      this.state.value.start.format("MMM Do YYYY") +
      " - " +
      this.state.value.end.format("MMM Do YYYY") +
      "   " +
      this.state.totalDays;
    this.setState({ selectedDates: dates });
    this.setState({ isDateSelected: true });
    this.props.setDates(dates)
    this.setState({ isOpen: !this.state.isOpen });
    this.props.ondatesSelected ? this.props.ondatesSelected() : null;
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <div className={styles.datePick_wraper}>
          <TextField
            variant="outlined"
            onClick={this.onToggle}
            label="Dates"
            value={this.state.selectedDates}
            InputProps={{
              endAdornment: (
                <InputAdornment  position="end">
                  <Icon
                    className={styles.cancelIcon}
                    onClick={this.clearLocation}
                  >
                    date_range
                  </Icon>
                </InputAdornment>
              )
            }}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
            className={styles.datepick}
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            firstOfWeek={1}
            numberOfCalendars={1}
            selectionType="range"
            minimumDate={new Date()}
            stateDefinitions={stateDefinitions}
            dateStates={dateRanges}
            defaultState="available"
            showLegend={true}
          />
        )}
      </div>
    );
  }
}

export default DatePickComponent;
