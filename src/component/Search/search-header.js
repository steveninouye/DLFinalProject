import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserSignIn from '../userSignIn';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchedInput } from '../../action/action_searched_input';
import { parseInput } from '../../action/action_parse_input';
import { getVideoResults } from '../../action/action_get_video_results';
import { getForumResults } from '../../action/action_get_forum_results';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      searchInput: this.props.searchInput || ''
    };
  }

  onInputChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  onFormSubmit(event) {
    const input = this.state.searchInput.trim();
    event.preventDefault();
    this.props.searchedInput(input);
    this.props.parseInput(input);
    this.props.getVideoResults(input);
    this.props.getForumResults(input);
    this.props.history.push('/search/code');
  }

  render() {
    return (
      <div className="searchHeader">
        <div className="searchNav">
          <Link to="/" className="searchNavLeft">
            KISS I.T.
          </Link>
          <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              name="search-bar"
              placeholder="Search Kiss IT"
              onChange={this.onInputChange}
              value={this.state.searchInput}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <UserSignIn />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchInput, user }) {
  return { searchInput, user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchedInput,
      parseInput,
      getVideoResults,
      getForumResults
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHeader);
