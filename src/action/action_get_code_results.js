import axios from 'axios';
const REACT_APP_URL = process.env.REACT_APP_URL;

export function getCodeResults(input, dispatch) {
  axios
    .post('${REACT_APP_URL}/api/db/search', {
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
    .post('${REACT_APP_URL}/api/lib', {
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
    .post('${REACT_APP_URL}/api/lib/repo', {
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
    .post('${REACT_APP_URL}/api/lib/file', {
      searchInput: input
    })
    .then(data => {
      dispatch({
        type: 'GET_CODE_RESULTS',
        payload: data
      });
    });
}
