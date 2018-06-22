import axios from 'axios';

export function getCodeResults(input, dispatch) {
  axios
    .post('http://localhost:4000/api/db/search', {
      searchInput: input
    })
    .then(data => {
      dispatch({
        type: 'GET_CODE_RESULTS',
        payload: data
      });
    });
}

export function getLibraryResults(input, dispatch) {
  axios
    .post('http://localhost:4000/api/lib', {
      searchInput: input
    })
    .then(data => {
      dispatch({
        type: 'GET_CODE_RESULTS',
        payload: data
      });
    });
}

export function getRepoResults(input, dispatch) {
  axios
    .post('http://localhost:4000/api/lib/repo', {
      searchInput: input
    })
    .then(data => {
      dispatch({
        type: 'GET_CODE_RESULTS',
        payload: data
      });
    });
}

export function getFileResults(input, dispatch) {
  axios
    .post('http://localhost:4000/api/lib/file', {
      searchInput: input
    })
    .then(data => {
      dispatch({
        type: 'GET_CODE_RESULTS',
        payload: data
      });
    });
}
