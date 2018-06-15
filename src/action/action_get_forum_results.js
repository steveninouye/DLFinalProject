import axios from 'axios';
import apiKey from '../keys/StackAppKey';

export function getForumResults(input) {
  const urlSearchQuery = input.replace(/\s/g, '%20');
  axios
    .get(
      `https://api.stackexchange.com/2.2/search/advanced?page=1&order=desc&sort=relevance&q=${urlSearchQuery}&tagged=javascript&site=stackoverflow&client_id=12660&key=${apiKey}`
    )
    .then(data => {
      return {
        type: 'GET_FORUM_RESULTS',
        payload: data
      };
    });
}
