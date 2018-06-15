import React from 'react';

const Code = ({ file, history, index }) => {
  const { file_name, file_author, file_code } = file;
  return (
    <div
      onClick={() => {
        history.push(`/preview/code/${index}`);
      }}
    >
      <h3>{file_name}</h3>
      <h4>{file_author}</h4>
      <p>{file_code.slice(0, 500)}</p>
    </div>
  );
};

export default Code;
