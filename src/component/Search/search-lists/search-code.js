import React, { Component } from 'react';
import { connect } from 'react-redux';

import Code from './code/code';

class SearchCode extends Component {
  constructor(props) {
    super(props);
    this.state = { results: false };
  }

  componentDidMount() {
    this.setState({ results: this.props.codeSearchResults });
  }

  samplePreview() {
    if (!this.state.results) {
      return 'Loading......';
    } else {
      return this.props.codeSearchResults.map((file, index) => (
        <Code
          history={this.props.history}
          index={index}
          file={file}
          key={file.file_id}
        />
      ));
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
