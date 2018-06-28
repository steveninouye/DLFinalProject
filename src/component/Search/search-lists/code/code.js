import React from 'react';

const Code = ({ file, history, index, file_code }) => {
  const { file_name, username, avatar } = file;
  return (
    <div
      onClick={() => {
        history.push(`/preview/code/${index}`);
      }}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <h3>{file_name}</h3>
            </td>
            <td>
              <img className="userAvatar" src={avatar} alt={username} />{' '}
              <h4>{username}</h4>
            </td>
          </tr>
        </tbody>
      </table>
      <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
        {file_code}
      </pre>
    </div>
  );
};

export default Code;
