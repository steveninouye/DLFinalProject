import React from 'react';

const Video = ({ video, history, index }) => {
  const imageUrl = video.snippet.thumbnails.high.url;
  const { title, description } = video.snippet;
  return (
    <div
      className="videoResult"
      onClick={() => {
        history.push(`/preview/video/${index}`);
      }}
    >
      <img className="mediaImage" alt={title} src={imageUrl} />
      <div className="mediaTitle">{title}</div>
      <div className="mediaDescription">{description}</div>
    </div>
  );
};

export default Video;
