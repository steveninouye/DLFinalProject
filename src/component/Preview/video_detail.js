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
    const leftArrowIndex = index === 0 ? this.lastIndex() : index - 1;
    const rightArrowIndex = index === this.lastIndex() ? 0 : index + 1;
    const video = this.getVideo();
    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="row">
        <div className="col">
          <Link to={`/preview/video/${leftArrowIndex}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f8nJGsWa-zdYBFVnDsCr9vBjgJG6-ZaLX7asxVaEcN1ozBUR"
              alt="leftArrow"
            />
          </Link>
        </div>
        <div className="col-11">
          <iframe
            className="embed-responsive-item"
            src={url}
            title={video.snippet.title}
          />
          {video.snippet.title}
          <br />
          {video.snippet.description}
        </div>
        <div className="col">
          <Link to={`/preview/video/${rightArrowIndex}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyLIJ8S0y2E04HgekZAmw9QNGpno7RzxTMmTVRQYmncbPkaJNaA"
              alt="rightArrow"
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
