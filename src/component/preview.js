import React, { Component } from 'react';

import SearchHeader from './Search/search-header';
import DetailPreview from './Preview/detail-preview';

class Preview extends Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <DetailPreview />
      </div>
    );
  }
}

export default Preview;
