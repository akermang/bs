import placesState from "./places.state";
import { SUCCESS_SUFFIX } from "../../constants";
import { FETCH_PLACES_SEARCH } from "./places.actions";

const PlacesReducer = (state = placesState, action) => {
  switch (action.type) {
    case `${FETCH_PLACES_SEARCH}${SUCCESS_SUFFIX}`:
    return { ...state, suggestions: action.payload };
    default: 
      return state;
  }
};

export default PlacesReducer;
