import React, { Component } from 'react';

const Video = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
      <div>
        <img className="media-object" src={imageUrl} />
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    );
  }
};

export default Video;
