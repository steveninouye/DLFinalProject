import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  getIndexOfVideo() {
    return parseInt(this.props.match.params.index, 10);
  }

  getVideo() {
    const index = this.getIndexOfVideo();
    const { videoSearchResults } = this.props;
    return videoSearchResults[index];
  }

  lastIndex() {
    return this.props.videoSearchResults.length - 1;
  }

  render() {
    const index = this.getIndexOfVideo();
    const lastIndex = this.lastIndex();
    const results = this.props.videoSearchResults;
    const videoOne = index < 3 ? lastIndex - 2 + index : index - 3;
    const videoTwo = index < 2 ? lastIndex - 1 + index : index - 2;
    const videoThree = index < 1 ? lastIndex : index - 1;
    const videoFour = index;
    const videoFive = index === lastIndex ? 0 : index + 1;
    const videoSix = index >= lastIndex - 1 ? 1 - lastIndex + index : index + 2;
    const videoSeven =
      index >= lastIndex - 2 ? 2 - lastIndex + index : index + 3;
    const video = this.getVideo();
    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="videoPreview">
        <iframe
          className="embed-responsive-item"
          src={url}
          title={video.snippet.title}
        />
        <div className="videoSlider">
          <Link to={`/preview/video/${videoOne}`}>
            <img
              src={results[videoOne].snippet.thumbnails.medium.url}
              alt={results[videoOne].snippet.title}
            />
          </Link>
          <Link to={`/preview/video/${videoTwo}`}>
            <img
              src={results[videoTwo].snippet.thumbnails.medium.url}
              alt={results[videoTwo].snippet.title}
            />
          </Link>
          <Link to={`/preview/video/${videoThree}`}>
            <img
              src={results[videoThree].snippet.thumbnails.medium.url}
              alt={results[videoThree].snippet.title}
            />
          </Link>
          <img
            src={results[videoFour].snippet.thumbnails.medium.url}
            alt={results[videoFour].snippet.title}
          />
          <Link to={`/preview/video/${videoFive}`}>
            <img
              src={results[videoFive].snippet.thumbnails.medium.url}
              alt={results[videoFive].snippet.title}
            />
          </Link>
          <Link to={`/preview/video/${videoSix}`}>
            <img
              src={results[videoSix].snippet.thumbnails.medium.url}
              alt={results[videoSix].snippet.title}
            />
          </Link>
          <Link to={`/preview/video/${videoSeven}`}>
            <img
              src={results[videoSeven].snippet.thumbnails.medium.url}
              alt={results[videoSeven].snippet.title}
            />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, videoSearchResults }) {
  return { searchInput, videoSearchResults };
}

export default connect(mapStateToProps)(VideoDetail);
