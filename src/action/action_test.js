import axios from 'axios';

export function getuser(input) {
  console.log(input);
  const request = axios.post(process.env.REACT_APP_DB_URL, {
    searchInput: input
  });
  return {
    type: 'REQUEST',
    payload: request
  };
}
