import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';
import createAsyncAction from '../../../createAsyncAction';

export const SYNC_EXAMPLE = 'EXAMPLE';
export const FETCH_PLACES_SEARCH = 'FETCH_PLACES_SEARCH';

/**
 * Async actions
 * https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=YOUR_API_KEY&input=pizza+near%20par

 * */
export const FetchPlacesSearchAction = createAsyncAction(
  FETCH_PLACES_SEARCH, (stringToSearch) => {
    const options = ApiService.getOptions('places');
    return HttpService.fetch({...options, body: JSON.stringify({ stringToSearch })})
  }
);

/**
* Sync actions
* */
export function SyncExampleAction(payload) {
 return {
   type: SYNC_EXAMPLE,
   payload
 }
}
