import React from 'react';

const Video = ({ video, history, index }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const { title, description } = video.snippet;
  return (
    <div
      onClick={() => {
        history.push(`/preview/video/${index}`);
      }}
    >
      <img className="media-object" alt={title} src={imageUrl} />
      <div className="media-heading">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Video;
