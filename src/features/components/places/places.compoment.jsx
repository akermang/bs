import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./places.compoment.scss";
import {FetchPlacesSearchAction} from "../../../common/state/places/places.actions";
import { StartLoaderAction, StopLoaderAction } from "../../../common/state/shared/shared.actions";

class PlacesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesAutocomlete: "",
      suggestions: ["sug1", "sug2","sug3"]
    };
  }

  handleInput = e => {
    let inputValue = e.target.value;
    this.setState({ placesAutocomlete: inputValue});
    
    this.props.startLoader()
    this.props.fetchPlaces({inputValue})
    .then((res)=>{
      const { suggestions } = res;
      this.setState({suggestions})
      this.props.stopLoader();
    })
    .catch((err) => console.log('errorrrrrrrrrrrrrrr: ', err))
   
  };

  render() {

    const { suggestions, placesAutocomlete } = this.state;
    return (
      <div className={styles.container}>
        <h4>Places</h4>
        <input
          ref={input => (this.textInput = input)}
          ref="placesAutocomlete"
          name="placesAutocomlete"
          onChange={this.handleInput}
          type="text"
          autoFocus
        />
        <p>{placesAutocomlete}</p>
        <div> Suggestions:
          {suggestions && suggestions.map((suggestion, index) => {
           return <div key={"sug" + index}>{suggestion}</div>;
          })}
        </div>
        <div>{this.props.example}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    suggestions: state.places.suggestions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPlaces: () => dispatch(new FetchPlacesSearchAction()),
    startLoader: () => dispatch(new StartLoaderAction()),
    stopLoader: () => dispatch(new StopLoaderAction())
  };
}

PlacesComponent.propTypes = {
  // example: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesComponent);
