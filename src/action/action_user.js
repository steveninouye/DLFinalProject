import axios from 'axios';

export function getUser() {
  return function(dispatch) {
    return axios.get('http://localhost:4000/auth/check').then(data => {
      return dispatch({
        type: 'GET_USER',
        payload: data
      });
    });
  };
}
