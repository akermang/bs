import initialState from "./board.state";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OPTIONS,
  FETCH_BOARDS_BY_SELECTION,
  FETCH_BOARDS_BY_ID
} from "./board.actions";
import { SUCCESS_SUFFIX } from "../../constants";

const BoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOARDS}${SUCCESS_SUFFIX}`:
      return { ...state, boards: action.payload };

      case `${FETCH_BOARDS_OPTIONS}${SUCCESS_SUFFIX}`:
      return { ...state, options: action.payload };

    case `${FETCH_BOARDS_BY_SELECTION}${SUCCESS_SUFFIX}`:
      return { ...state, boards: action.payload };

      case `${FETCH_BOARDS_BY_ID}${SUCCESS_SUFFIX}`:
      return { ...state, selectedBoard: action.payload };

    default:
      return state;
  }
};

export default BoardReducer;
