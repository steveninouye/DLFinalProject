import React, { Component } from 'react';

import SearchHeader from './SearchList/search-header';
import RefineSearch from './SearchList/refine-search';
import SearchList from './SearchList/search-list';

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
