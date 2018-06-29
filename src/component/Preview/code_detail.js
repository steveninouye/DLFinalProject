import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CodeDetail extends Component {
  getIndexOfFile() {
    return parseInt(this.props.match.params.index, 10);
  }

  getFile() {
    const index = this.getIndexOfFile();
    const { codeSearchResults } = this.props;
    return codeSearchResults[index];
  }

  getCodeOfFile() {
    const file = this.getFile();
    const stuff = file.file_code.split('\n').map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });
    return stuff;
  }

  lastIndex() {
    return this.props.codeSearchResults.length - 1;
  }

  render() {
    const index = this.getIndexOfFile();
    const leftArrowIndex = index === 0 ? this.lastIndex() : index - 1;
    const rightArrowIndex = index === this.lastIndex() ? 0 : index + 1;
    const file = this.getFile();
    return (
      <div className="previewCode">
        <div className="leftArrowDiv">
          <Link to={`/preview/code/${leftArrowIndex}`}>{'<'}</Link>
        </div>
        <div className="codePreview">
          <div className="codePreviewHeader">
            <div className="fileInfo">
              <div className="fileName">{file.file_name}</div>
              <p>
                <span className="pathRepo">{file.repository}</span>/{
                  file.file_path
                }
              </p>
              <a href={`${file.user_github_url}/${file.repository}`}>
                GitHub Repo
              </a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href={`${file.file_html_url}`}>GitHub File</a>
            </div>
            <div className="userAvatar">
              <span className="userName">{file.username}</span>
              <img src={file.avatar} alt="avatar" className="avatar" />
            </div>
          </div>
          <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {this.getCodeOfFile()}
          </pre>
        </div>
        <div className="rightArrowDiv">
          <Link to={`/preview/code/${rightArrowIndex}`}>{'>'}</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(CodeDetail);
