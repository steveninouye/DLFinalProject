import React from 'react';

const Forum = ({ forum, history, index }) => {
  return (
    <div>
      <a href={forum.link} target="_blank">
        <h1>{forum.title}</h1>
      </a>
      <div>{forum.tags.map(tag => tag + ', ')}</div>
      <hr />
    </div>
  );
};

export default Forum;
