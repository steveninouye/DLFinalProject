import React from 'react';

const Code = ({ file, history, index, file_code }) => {
  const {
    file_name,
    username,
    avatar,
    repository,
    user_github_url,
    file_html_url
    // file_path
  } = file;
  return (
    <div className="code">
      <div className="codeDiv">
        <div className="leftDiv">
          <div
            className="leftTopDiv"
            onClick={() => {
              history.push(`/preview/code/${index}`);
            }}
          >
            <img className="userAvatar" src={avatar} alt={username} />
            <div className="codeMiddleColumn">
              <span className="fileName">{file_name}</span>
              <br />
              <span className="author">By: {username}</span>
              <br />
              <span className="repository">repository: {repository}</span>
            </div>
          </div>
          <div className="leftBottomDiv">
            <div className="fileLink">
              <a href={file_html_url}>GitHub File</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href={`${user_github_url}/${repository}`}>GitHub Repo</a>
            </div>
          </div>
        </div>
        <pre
          style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
          onClick={() => {
            history.push(`/preview/code/${index}`);
          }}
        >
          {file_code}
        </pre>
      </div>
      <hr />
    </div>
  );
};

export default Code;
