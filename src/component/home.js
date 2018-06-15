import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchedInput } from '../action/action_searched_input';
import { parseInput } from '../action/action_parse_input';
// import { getVideoResults } from '../action/action_get_video_results';
// import { getForumResults } from '../action/action_get_forum_results';
import { getUser } from '../action/action_user';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { searchInput: this.props.searchInput || '' };
    this.signInSignOut = this.signInSignOut.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  onInputChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  onFormSubmit(event) {
    const input = this.state.searchInput.trim();
    event.preventDefault();
    this.props.searchedInput(input);
    this.props.parseInput(input);
    // this.props.getVideoResults(input);
    // this.props.getForumResults(input);
    this.props.history.push('/search/code');
  }

  signInSignOut(user) {
    if (user.username === undefined) {
      return <a href="http://localhost:4000/auth/login">Sign In</a>;
    } else {
      return (
        <span>
          {user.username}
          <a href="http://localhost:4000/auth/logout">Sign Out</a>
        </span>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/shop">Swag</Link>
        <Link to="/register">Register</Link>
        {this.signInSignOut(this.props.user)}
        <div className="jumbotron">
          <h1 className="display-4">KISS I.T.</h1>
          <form onSubmit={this.onFormSubmit} action="/search">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
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
          <p>Developers' Search Tool</p>
          <p>#mySyntaxIsCorrect ;-P</p>
          <br />
          <br />
          <p>!!!BELOW THIS WILL BE A COMPONENT!!!</p>
          <table>
            <tbody>
              <tr>
                <th>
                  <input id="searchList1" type="checkbox" />
                  <label htmlFor="searchList1">MY I.T.</label>
                  <br />
                  <input id="searchList2" type="checkbox" />
                  <label htmlFor="searchList2">FOLLOWING I.T.</label>
                  <br />
                  <input id="searchList3" type="checkbox" />
                  <label htmlFor="searchList3">KISS I.T.</label>
                </th>
                <th>
                  <input
                    type="radio"
                    id="searchType1"
                    name="searchType"
                    value="code"
                  />
                  <label htmlFor="searchType1">Code</label>
                  <br />
                  <input
                    type="radio"
                    id="searchType2"
                    name="searchType"
                    value="docs"
                  />
                  <label htmlFor="searchType2">Docs</label>
                  <br />
                  <input
                    type="radio"
                    id="searchType3"
                    name="searchType"
                    value="code-docs"
                  />
                  <label htmlFor="searchType3">Code & Docs</label>
                </th>
              </tr>
            </tbody>
          </table>
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
      // getVideoResults,
      // getForumResults,
      getUser
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
