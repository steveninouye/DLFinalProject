import axios from 'axios';

export function getSearchResults(input) {
  const request = axios.post('http://localhost:4000/api/db/search', {
    searchInput: input
  });
  return {
    type: 'GET_SEARCH_RESULTS',
    payload: request
  };
}
