import axios from 'axios';
import apiKey from '../keys/YTkey';

export function getVideoResults(input) {
  input = input.split('--lib').join('');
  input = input.split('-repo').join('');
  input = input.split('-file').join('');
  const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY;
  const urlSearchQuery = input.replace(/\s/g, '+') + '+js+javascript';
  return dispatch => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=relevance&q=${urlSearchQuery}&type=video&key=${YOUTUBE_KEY}`
      )
      .then(data => {
        console.log(data);
        dispatch({
          type: 'GET_VIDEO_RESULTS',
          payload: data
        });
      });
  };
}
