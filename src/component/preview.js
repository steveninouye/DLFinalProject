import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/preview.css';

import SearchHeader from './Search/search-header';
import CodeDetail from './Preview/code_detail';
import VideoDetail from './Preview/video_detail';

class Preview extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <SearchHeader history={this.props.history} />
        <Route
          path={`${match.url}/code/:index`}
          history={this.props.history}
          component={CodeDetail}
        />
        <Route
          path={`${match.url}/video/:index`}
          history={this.props.history}
          component={VideoDetail}
        />
        <Route
          path={`${match.url}/forum/:index`}
          history={this.props.history}
          component={CodeDetail}
        />
        <Route
          path={`${match.url}/doc/:index`}
          history={this.props.history}
          component={CodeDetail}
        />
      </div>
    );
  }
}

export default Preview;
