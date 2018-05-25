import React, { Component } from 'react';

import SearchHeader from './Search/search-header';
import RefineSearch from './Search/refine-search';
import SearchList from './Search/search-list';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchHeader />
        <div className="container-fluid">
          <div className="row">
            <RefineSearch />
            <SearchList />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
