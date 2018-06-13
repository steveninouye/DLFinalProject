import React, { Component } from 'react';
import { connect } from 'react-redux';

import Video from './video/video';
import apiKey from '../../../keys/YTkey';

class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.apiKey = apiKey;
    this.urlSearchQuery =
      this.props.searchInput.replace(/\s/g, '+') + '+js+javascript';
    this.state = { videos: false };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=relevance&q=${
        this.urlSearchQuery
      }&type=video&key=${this.apiKey}`
    )
      .then(response => response.json())
      .then(data => this.setState({ videos: data.items }));
  }

  render() {
    const { videos } = this.state;
    if (!videos) {
      return <div>Loading...</div>;
    } else {
      return videos.map(video => (
        <div>
          <Video key={video.id.videoId} video={video} />
        </div>
      ));
    }
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(SearchVideo);
