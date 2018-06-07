import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailPreview extends Component {
  getFile() {
    const index = parseInt(this.props.match.params.index, 10);
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

  render() {
    const file = this.getFile();
    return (
      <div className="row">
        <div className="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f8nJGsWa-zdYBFVnDsCr9vBjgJG6-ZaLX7asxVaEcN1ozBUR"
            alt="leftArrow"
          />
        </div>
        <div className="col-11">
          <h2>{file.file_name}</h2>
          <h3>{file.file_author}</h3>
          <div>{this.getCodeOfFile()}</div>
        </div>
        <div className="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyLIJ8S0y2E04HgekZAmw9QNGpno7RzxTMmTVRQYmncbPkaJNaA"
            alt="rightArrow"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(DetailPreview);
