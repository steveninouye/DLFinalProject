import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DetailPreview extends Component {
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
    console.log(stuff);
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
      <div className="row">
        <div className="col">
          <Link to={`/preview/${leftArrowIndex}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f8nJGsWa-zdYBFVnDsCr9vBjgJG6-ZaLX7asxVaEcN1ozBUR"
              alt="leftArrow"
            />
          </Link>
        </div>
        <div className="col-11">
          <h2>{file.file_name}</h2>
          <h3>{file.file_author}</h3>
          <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {this.getCodeOfFile()}
          </pre>
        </div>
        <div className="col">
          <Link to={`/preview/${rightArrowIndex}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyLIJ8S0y2E04HgekZAmw9QNGpno7RzxTMmTVRQYmncbPkaJNaA"
              alt="rightArrow"
            />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(DetailPreview);
