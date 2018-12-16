import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./input-price.component.scss";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card"

const MuiStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50
  }
});

class InputPriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
      inputFocus: false,
      currency: "EUR"
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  inputFocusToggle() {
    let val = !this.state.inputFocus;
    this.setState({ inputFocus: val });
  }

  iconClick(name) {
    this.inputFocusToggle();
    // this[name].focus();
  }

  render() {
    const { classes, name, label, currency } = this.props;
    return (
      <div className={styles.container} onClick={() => this.iconClick(name)}>
          {!this.state.inputFocus && <Icon color="secondary">edit_icon</Icon>}
          {this.state.inputFocus && (
            <span className={styles.icons_wraper}>
              {/* <div> */}
                <Button color="secondary">save</Button>
                <Button color="primary">cancel</Button>
              {/* </div> */}
              {/* <div><Icon color="secondary">cancel</Icon></div> */}
            </span>
          )}
          <span>
            {" "}
            {label} 
          </span>
          <div>{currency}</div>
          {!this.state.inputFocus && <span>{this.state.price}</span>}
          {this.state.inputFocus && (
            <TextField
              autoFocus
              inputRef={el => (this[name] = el)}
              // onFocus={() => this.inputFocusToggle(name)}
              // onBlur={() => this.inputFocusToggle(name)}
              className={classes.textField}
              InputProps={{}}
              type="number"
              value={this.state.price}
              onChange={this.handleChange("price")}
              style={{ margin: 8 }}
              margin="normal"
            />
          )}
        
      </div>
    );
  }
}

// InputPriceComponent.propTypes = {
//   example: PropTypes.string.isRequired
// };

export default withStyles(MuiStyles)(InputPriceComponent);
