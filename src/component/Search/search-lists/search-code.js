import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchCode extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = { results: 0 };
  }

  componentDidMount() {
    this.setState({ results: this.props.codeSearchResults });
  }

  showDetails(index) {
    this.props.history.push(`/preview/${index}`);
  }

  samplePreview() {
    if (this.state === 0) {
      return 'Loading......';
    } else {
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
  }

  render() {
    return <div>{this.samplePreview()}</div>;
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

export default connect(mapStateToProps)(SearchCode);
