import HttpService from "../../services/http.service";
import ApiService from "../../services/api.service";
import createAsyncAction from "../../../createAsyncAction";

export const FETCH_BOARDS = "FETCH_BOARDS";
export const FETCH_BOARDS_OPTIONS = "FETCH_BOARDS_OPTIONS";
export const FETCH_BOARDS_BY_SELECTION = "FETCH_BOARDS_BY_SELECTION";
export const SYNC_EXAMPLE = "EXAMPLE";
export const ASYNC_EXAMPLE = "ASYNC_EXAMPLE";
export const FETCH_BOARDS_BY_ID = "FETCH_BOARDS_BY_ID";
export const FETCH_BOARDS_BY_USER_ID = "FETCH_BOARDS_BY_USER_ID";
export const FETCH_NEW_BOARD = "FETCH_NEW_BOARD";
export const EDIT_BOARD = "EDIT_BOARD";
export const FETCH_BOARD_UPDATE = "FETCH_BOARD_UPDATE";

/**
 * Async actions
 * */

export const FetchBoardsAction = createAsyncAction(FETCH_BOARDS, () => {
  const options = ApiService.getOptions("getBoards");
  return HttpService.fetch(options);
});

export const FetchNewBoardAction = createAsyncAction(
  FETCH_NEW_BOARD,
  newBoard => {
    const options = ApiService.getOptions("postNewBoard");
    return HttpService.fetch({
      ...options,
      body: JSON.stringify({ newBoard })
    });
  }
);

export const FetchBoardsBySelectionAction = createAsyncAction(
  FETCH_BOARDS_BY_SELECTION,
  userSelections => {
    const options = ApiService.getOptions("getBoardsBySelection");
    return HttpService.fetch({
      ...options,
      body: JSON.stringify({ userSelections })
    });
  }
);

export const FetchBoardsOptionsAction = createAsyncAction(
  FETCH_BOARDS_OPTIONS,
  () => {
    const options = ApiService.getOptions("getBoardsOptions");
    return HttpService.fetch({ ...options });
  }
);

export const FetchBoardByIdAction = createAsyncAction(
  FETCH_BOARDS_BY_ID,
  id => {
    const options = ApiService.getOptions("getBoardById");
    return HttpService.fetch({ ...options, url: options.url(id) });
  }
);

export const FetchBoardsByUserIdAction = createAsyncAction(
  FETCH_BOARDS_BY_USER_ID,
  userId => {
    const options = ApiService.getOptions("getBoardsByUserId");
    return HttpService.fetch({ ...options, url: options.url(userId) });
  }
);

/**
 * Sync actions
 * */
export function editBoardAction(payload) {
  return {
    type: EDIT_BOARD,
    payload
  };
}

export const UpdateBoardAction = createAsyncAction(
  FETCH_BOARD_UPDATE,
  payload => {
    const options = ApiService.getOptions("upupdateBoardById");
    const {_id, data} = payload;
    return HttpService.fetch({ ...options,
       url: options.url(_id),
       body: JSON.stringify({data})
    });
  }
);
