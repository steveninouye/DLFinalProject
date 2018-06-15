import axios from 'axios';
import apiKey from '../keys/YTkey';

export function getVideoResults(input) {
  const urlSearchQuery = input.replace(/\s/g, '+') + '+js+javascript';
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=relevance&q=${urlSearchQuery}&type=video&key=${apiKey}`
    )
    .then(data => {
      return {
        type: 'GET_VIDEO_RESULTS',
        payload: data
      };
    });
}
