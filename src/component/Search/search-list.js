import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(index) {
    this.props.history.push(`/preview/${index}`);
  }

  samplePreview() {
    return this.props.codeSearchResults.map((file, index) => (
      <div
        key={file.file_id}
        onClick={() => {
          this.showDetails(index);
        }}
      >
        <h3>{file.file_name}</h3>
        <h4>{file.file_author}</h4>
        <p>{file.file_code.slice(0, 500)}</p>
      </div>
    ));
  }

  render() {
    return <div className="col-10">{this.samplePreview()}</div>;
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(SearchList);
