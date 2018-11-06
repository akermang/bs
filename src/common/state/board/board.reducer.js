import initialState from "./board.state";
import { FETCH_BOARDS } from "./board.actions";
import { SUCCESS_SUFFIX } from "../../constants";

const BoardReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case `${FETCH_BOARDS}${SUCCESS_SUFFIX}`:
      return { ...state, boards: action.payload }

    default:
      return state;
  }
};

export default BoardReducer;
