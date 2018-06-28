import axios from 'axios';
import apiKey from '../keys/StackAppKey';

export function getForumResults(input) {
  input = input.split('--lib').join('');
  input = input.split('-repo').join('');
  input = input.split('-file').join('');
  const STACK_APP_KEY = process.env.STACK_APP_KEY || apiKey;
  const urlSearchQuery = input.replace(/\s/g, '%20');
  return dispatch => {
    axios
      .get(
        `https://api.stackexchange.com/2.2/search/advanced?page=1&order=desc&sort=relevance&q=${urlSearchQuery}&tagged=javascript&site=stackoverflow&client_id=12660&key=${STACK_APP_KEY}`
      )
      .then(data => {
        dispatch({
          type: 'GET_FORUM_RESULTS',
          payload: data
        });
      });
  };
}
