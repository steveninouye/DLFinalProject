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
