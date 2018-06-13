import axios from 'axios';

export function getUser() {
  const request = axios.get('http://localhost:4000/auth/check');
  return {
    type: 'GET_USER',
    payload: request
  };
}
