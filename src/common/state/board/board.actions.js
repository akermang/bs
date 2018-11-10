import HttpService from "../../services/http.service";
import ApiService from "../../services/api.service";
import createAsyncAction from "../../../createAsyncAction";

export const FETCH_BOARDS = "FETCH_BOARDS";
export const FETCH_BOARDS_OPTIONS = "FETCH_BOARDS_OPTIONS";
export const FETCH_BOARDS_BY_SELECTION = "FETCH_BOARDS_BY_SELECTION";
export const SYNC_EXAMPLE = "EXAMPLE";
export const ASYNC_EXAMPLE = "ASYNC_EXAMPLE";
export const FETCH_BOARDS_BY_ID = "FETCH_BOARDS_BY_ID";

/**
 * Async actions
 * */

export const FetchBoardsAction = createAsyncAction(FETCH_BOARDS, () => {
  const options = ApiService.getOptions("getBoards");
  return HttpService.fetch(options);
});

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

export const FetchBoardsOptionsAction = createAsyncAction(FETCH_BOARDS_OPTIONS, () => {
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

/**
 * Sync actions
 * */
export function SyncExampleAction(payload) {
  return {
    type: SYNC_EXAMPLE,
    payload
  };
}
