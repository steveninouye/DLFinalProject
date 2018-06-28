import React from 'react';

const Code = ({ file, history, index, file_code }) => {
  const { dir_file_name, username, avatar } = file;
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
              <h3>{dir_file_name}</h3>
            </td>
            <td>
              <img className="userAvatar" src={avatar} alt={username} />{' '}
              <h4>{username}</h4>
            </td>
          </tr>
        </tbody>
      </table>
      <p>{file_code}</p>
    </div>
  );
};

export default Code;
