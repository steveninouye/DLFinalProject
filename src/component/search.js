import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchedInput } from '../action/action_searched_input';

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
            <SearchList history={this.props.history} match={this.props.match} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, codeSearchResults }) {
  return { searchInput, codeSearchResults };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchedInput }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
