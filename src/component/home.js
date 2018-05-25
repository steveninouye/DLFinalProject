import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/register">Register</Link>
        <Link to="/sigin">Sign In</Link>
        <Link to="/shop">Swag</Link>
        <div class="jumbotron">
          <h1 class="display-4">Kiss It</h1>
          <form action="/">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round" />
            </label>
            <input type="text" name="search-bar" placeholder="Search Kiss IT" />
            <Link to="/search">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </Link>
          </form>
          <p>Developers' Search Tool</p>
          <p>#mySyntaxIsCorrect ;-P</p>
          <br />
          <br />
          <p>!!!BELOW THIS WILL BE A COMPONENT!!!</p>
          <table>
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
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
