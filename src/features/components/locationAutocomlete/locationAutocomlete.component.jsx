import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { DateRangePicker } from "material-ui-datetime-range-picker";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from "./loctionAutocomplete.component.scss";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      isCleared: false
    };
  }
  onChange = () => {
    null;
  }; //test

  onDismiss = () => {};

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.props.onLocationSelected ? this.props.onLocationSelected() : null;

    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", address, latLng))
      .catch(error => console.error("Error", error));
    this.props.setLocation(address);
  };

  clearLocation = () => {
    this.setState({ address: "" });
    this.setState({ isCleared: true });
  };
  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className={styles.location_wraper}>
              <TextField
                autoFocus={this.state.isCleared}
                label="Location"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <Icon
                        className={styles.cancelIcon}
                        onClick={this.clearLocation}
                      >
                        clear
                      </Icon>
                    </InputAdornment>
                  )
                }}
                value={this.state.address ? this.state.address : null}
                {...getInputProps({})}
              />

              <div
                className={
                  styles.autocomplete_dropdown_container +
                  " autocompletedropdown-container"
                }
              >
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active suggestion"
                    : "suggestion-item suggestion";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <MenuItem classes={styles.loctionMenu}>
                        {suggestion.description}
                      </MenuItem>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}
export default LocationSearchInput;
