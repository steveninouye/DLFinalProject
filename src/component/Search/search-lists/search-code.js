import React, { Component } from 'react';
import { connect } from 'react-redux';

import Code from './code/code';

class SearchCode extends Component {
  samplePreview() {
    if (this.props.codeSearchResults.length === 0) {
      return <p>Loading......</p>;
    } else {
      return this.props.codeSearchResults.map((file, index) => {
        const indexOfSearch = file.file_code.indexOf(this.props.searchInput);
        let beginningIndex;
        let endIndex;
        if (indexOfSearch < 256) {
          beginningIndex = 0;
          endIndex = 500 - indexOfSearch;
        } else {
          beginningIndex = 500 - indexOfSearch;
          endIndex = indexOfSearch;
        }
        const file_code = file.file_code.slice(beginningIndex, endIndex);
        return (
          <Code
            history={this.props.history}
            index={index}
            file={file}
            file_code={file_code}
            key={file.file_id}
          />
        );
      });
    }
  }

  render() {
    return <div>{this.samplePreview()}</div>;
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(SearchCode);
