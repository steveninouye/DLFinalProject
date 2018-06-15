import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SearchHeader from './Search/search-header';
import CodeDetail from './Preview/code_detail';
import VideoDetail from './Preview/video_detail';

class Preview extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <SearchHeader />
        <Route path={`${match.url}/code/:index`} component={CodeDetail} />
        <Route path={`${match.url}/video/:index`} component={VideoDetail} />
        <Route path={`${match.url}/forum/:index`} component={CodeDetail} />
        <Route path={`${match.url}/doc/:index`} component={CodeDetail} />
      </div>
    );
  }
}

export default Preview;
