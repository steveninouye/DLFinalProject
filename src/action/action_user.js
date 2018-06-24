import axios from 'axios';
import REACT_APP_URL from '../url';

export function getUser() {
  return function(dispatch) {
    return axios.get(`${REACT_APP_URL}/auth/check`).then(data => {
      return dispatch({
        type: 'GET_USER',
        payload: data
      });
    });
  };
}
