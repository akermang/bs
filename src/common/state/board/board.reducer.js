import initialState from "./board.state";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OPTIONS,
  FETCH_BOARDS_BY_SELECTION,
  FETCH_BOARDS_BY_ID,
  FETCH_BOARDS_BY_USER_ID,
  FETCH_NEW_BOARD,
  EDIT_BOARD,
  FETCH_BOARD_UPDATE
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

    case `${FETCH_BOARDS_BY_USER_ID}${SUCCESS_SUFFIX}`:
      return { ...state, userBoards: action.payload };

    case `${FETCH_NEW_BOARD}${SUCCESS_SUFFIX}`:
      return { ...state, newBoard: action.payload };

    case `${EDIT_BOARD}`:
      return { ...state, board: action.payload };

    case `${FETCH_BOARD_UPDATE}`:
      return { ...state, updatedBoard: action.payload };
  

    default:
      return state;
  }
};

export default BoardReducer;
