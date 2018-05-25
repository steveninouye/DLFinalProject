import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchHeader extends Component {
  render() {
    return (
      <div>
        <Link to="/">KISS I.T.</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link to="/shop">Swag</Link>
        <br />
        <input type="text" name="search" placeholder="Search Kiss IT" />
      </div>
    );
  }
}

export default SearchHeader;
