import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SearchCode from './search-lists/search-code';
import SearchDoc from './search-lists/search-doc';
import SearchForum from './search-lists/search-forum';
import SearchVideo from './search-lists/search-video';

class SearchList extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="col-10">
        <div class="tab">
          <Link to={`${match.url}/code`}>
            <button class="tablinks">Code</button>
          </Link>
          <Link to={`${match.url}/doc`}>
            <button class="tablinks">Docs</button>
          </Link>
          <Link to={`${match.url}/forum`}>
            <button class="tablinks">Forums</button>
          </Link>
          <Link to={`${match.url}/video`}>
            <button class="tablinks">Videos</button>
          </Link>
        </div>
        <div>
          <Route
            path={`${match.url}/code`}
            component={SearchCode}
            history={this.props.history}
          />
          <Route
            path={`${match.url}/doc`}
            component={SearchDoc}
            history={this.props.history}
          />
          <Route
            path={`${match.url}/forum`}
            component={SearchForum}
            history={this.props.history}
          />
          <Route
            path={`${match.url}/video`}
            component={SearchVideo}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

export default SearchList;
