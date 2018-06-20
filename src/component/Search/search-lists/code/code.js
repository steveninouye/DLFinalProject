import React from 'react';

const Code = ({ file, history, index }) => {
  const { dir_file_name, username, file_code } = file;
  return (
    <div
      onClick={() => {
        history.push(`/preview/code/${index}`);
      }}
    >
      <h3>{dir_file_name}</h3>
      <h4>{username}</h4>
      <p>{file_code.slice(0, 500)}</p>
    </div>
  );
};

export default Code;
