import React from "react";
import PropTypes from "prop-types";
// import styles from "./board-price-form.component.scss";
import { Form, Textarea, Input, Button } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputPriceComponent from "../input-price/input-price.component.jsx";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 70
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 60
  }
});

const currencies = [
  {
    value: "USD",
    label: "USD"
  },
  {
    value: "EUR",
    label: "EUR"
  },
  {
    value: "BTC",
    label: "BTC"
  },
  {
    value: "JPY",
    label: "JPY"
  }
];

const priceList = [
  {
    name: "halfDayPrice",
    label: " 1/2 day price "
  },
  {
    name: "oneDayPrice",
    label: "1 day price"
  },
  {
    name: "threeDaysPrice",
    label: "3 days price"
  },
  {
    name: "weekPrice",
    label: "week price"
  },
  {
    name: "boardValue",
    label: "board value"
  }
];

class BoardPriceFormComponent extends React.Component {
  state = {
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className={styles.price_input_wraper}>
          <div>
            {/* <Icon color="secondary">edit_icon</Icon> */}
            <span> currency</span>
            <TextField
              select
              className={classes.textField}
              value={this.state.currency}
              onChange={this.handleChange("currency")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={styles.input_list_wraper}>
            {priceList &&
              priceList.map(option => {
                let name = option.name;
                let label = option.label; 
                let currency = this.state.currency;
                return (
                  <div key={option.name}>
                  <InputPriceComponent name={name} label={label} currency={currency} price={111}/>
                  </div>
                );
              })}
          </div>
        </div>
      </form>
    );
  }
}

BoardPriceFormComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BoardPriceFormComponent);
