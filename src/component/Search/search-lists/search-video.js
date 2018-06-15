import React, { Component } from 'react';
import { connect } from 'react-redux';

import Video from './video/video';

class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: false };
  }

  componentDidMount() {
    this.setState({ videos: this.props.videoSearchResults });
  }

  render() {
    const { videos } = this.state;
    if (!videos) {
      return <div>Loading...</div>;
    } else {
      return videos.map((video, index) => (
        <Video
          key={video.id.videoId}
          index={index}
          history={this.props.history}
          video={video}
        />
      ));
    }
  }
}

function mapStateToProps({ searchInput, videoSearchResults }) {
  return { searchInput, videoSearchResults };
}

export default connect(mapStateToProps)(SearchVideo);
