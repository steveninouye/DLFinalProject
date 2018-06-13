import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import apiKey from '../../../../config/YTkey';

class SearchVideo extends Component {
  render() {
    YTSearch({ key: apiKey, term: 'surfboards' }, data => console.log(data));
    return <div>Video is here</div>;
  }
}

export default SearchVideo;
