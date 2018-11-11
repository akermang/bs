export default {
  login: {
    url: '/api/utility/user-info',
    method: 'GET',
    contentType: 'application/json'
  },
  signout: {
    url: '/api/internal/commands/sign-out',
    method: 'POST',
    contentType: 'application/json'
  },
  places: {
    url: '/api/utility/search-places',
    method: 'POST',
    contentType: 'application/json'
  },
  getBoards: {
    url: '/api/boards',
    method: 'GET',
    contentType: 'application/json'
  },
  postNewBoard: {
    url: '/api/boards',
    method: 'POST',
    contentType: 'application/json'
  },
  getBoardsBySelection: {
    url: '/api/boards/bySelection',
    method: 'POST',
    contentType: 'application/json',
  },
  getBoardsOptions: {
    url: '/api/boards/options',
    method: 'GET',
    contentType: 'application/json',
  },
  getBoardById: {
    url: id => `/api/boards/${id}`,
    method: 'GET',
    contentType: 'application/json'
  },
  getBoardsByUserId: {
    url: id => `/api/boards/byUserId/${id}`,
    method: 'GET',
    contentType: 'application/json'
  }
};
